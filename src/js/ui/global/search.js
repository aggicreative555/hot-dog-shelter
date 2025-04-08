import { renderMultiplePosts } from "../post/renderPost";
import { readPosts } from "../../api/post/read";
import { save, load } from "../../utilities/authGuard";

let cachedPosts = [];
let debounceTimer;

/**
 * Searches cached posts by a query and type, and renders results in the DOM.
 * Loads cached posts from localStorage if available
 * Falls back to fetching posts from the API
 * Filters results on the client side based on searchType
 * Renders filtered posts into the provided container
 * @async
 * @function searchByPost
 * @param {Object} params
 * @param {string} params.query - The search query string.
 * @param {string} params.searchType - The field to search by (e.g., 'name', 'owner').
 * @param {HTMLElement} params.postsContainer - The container element to render results into.
 */

export async function searchByPost({ query, searchType, postsContainer }) {
  const userSuccess = document.getElementById("userSuccess");

  if (!query || !searchType) {
    userSuccess.innerHTML = "Please enter a valid search query.";
    return;
  }

  const stored = load("cachedPosts");
  if (stored) {
    cachedPosts = JSON.parse(stored);
  } else {
    cachedPosts = await readPosts();
    save("cachedPosts", JSON.stringify(cachedPosts));
  }

  const searchTerm = query.toLowerCase();

  const filteredPosts = cachedPosts.filter((post) => {
    const postValue =
      searchType === "owner"
        ? post.owner?.name?.toLowerCase() || ""
        : post[searchType]?.toLowerCase() || "";
    return postValue.includes(searchTerm);
  });

  postsContainer.innerHTML = "";

  if (filteredPosts.length === 0) {
    if (userSuccess) {
      userSuccess.innerHTML = `<p>No results found for "<strong>${query}</strong>".</p>`;
    }
  } else {
    renderMultiplePosts(filteredPosts, postsContainer);
  }

  if (userSuccess) {
    const message =
      filteredPosts.length === 1
        ? `1 result found for "<strong>${query}</strong>"`
        : `${filteredPosts.length} results found for "<strong>${query}</strong>"`;
    userSuccess.innerHTML = `<p>${message}</p>`;
  }
}

/**
 * Sets up a debounced live search input tied to `searchByPost`.
 *
 * @function setupLiveSearch
 * @param {Object} params
 * @param {string} params.inputId - ID of the input field.
 * @param {string} params.typeSelectId - ID of the dropdown for selecting search type.
 * @param {string} params.postsContainerId - ID of the container for posts.
 */
export function setupLiveSearch({ inputId, typeSelectId, postsContainerId }) {
  const input = document.getElementById(inputId);
  const typeSelect = document.getElementById(typeSelectId);
  const postsContainer = document.getElementById(postsContainerId);
  const userSuccess = document.getElementById("userSuccess");

  input.addEventListener("input", () => {
    const query = input.value.trim();
    const searchType = typeSelect.value;

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      if (query.length <= 1) {
        postsContainer.innerHTML = "";
        renderMultiplePosts(cachedPosts, postsContainer);
        if (userSuccess) userSuccess.innerHTML = "";
        return;
      }

      searchByPost({
        query,
        searchType,
        postsContainer,
      });
    }, 500);
  });
}

/**
 * Dynamically creates a search bar with a dropdown, input, and button.
 * Hooks into the `searchByPost` function.
 *
 * @function searchBar
 * @param {HTMLElement} container - The DOM element to append the search bar into.
 */

export function searchBar(container) {
  const searchBar = document.createElement("div");
  searchBar.id = "searchBar";

  const select = document.createElement("select");
  select.id = "searchType";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  defaultOption.textContent = "Search by";

  const options = ["name", "breed", "species", "color", "description", "owner"];
  const optionElements = options.map((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
    return option;
  });

  select.appendChild(defaultOption);
  optionElements.forEach((opt) => select.appendChild(opt));

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search by name, breed, color and more...";
  searchInput.id = "searchQuery";

  const searchButton = document.createElement("button");
  searchButton.id = "searchButton";
  searchButton.innerHTML = "Search";

  searchBar.appendChild(select);
  searchBar.appendChild(searchInput);
  searchBar.appendChild(searchButton);
  container.prepend(searchBar);

  searchButton.addEventListener("click", async () => {
    const searchType = select.value;
    const query = searchInput.value.trim();
    const postsContainer = document.getElementById("postsContainer");
    const userSuccess = document.getElementById("userSuccess");

    if (!query || !searchType) {
      userSuccess.innerHTML = "Please select a search type and enter a query.";
      return;
    }

    try {
      await searchByPost({ query, searchType, postsContainer });
    } catch (error) {
      console.error("Search failed:", error);
    }
  });
}
