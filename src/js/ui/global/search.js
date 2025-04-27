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
    userSuccess.classList.remove("invisible");
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
      userSuccess.classList.remove("invisible");
      userSuccess.textContent = `No results found for ${query}`;
    }
  } else {
    renderMultiplePosts(filteredPosts, postsContainer);
  }

  if (userSuccess) {
    userSuccess.classList.remove("invisible");
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
  searchBar.classList.add(
    "w-full",
    "h-fit",
    "flex-wrap",
    "md:flex-nowrap",
    "my-4",
    "p-2",
    "border-2",
    "border-primary-fur100",
    "bg-primary-mayo100",
    "max-w-[700]",
    "flex",
    "flex-row",
    "justify-start",
    "align-middle",
    "gap-4",
  );
  searchBar.id = "searchBar";

  const select = document.createElement("select");
  select.id = "searchType";
  select.classList.add(
    "border-2",
    "border-primary-fur100",
    "text-brown-800",
    "font-medium",
    "body-text",
    "bg-primary-mayo100",
  );

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  defaultOption.textContent = "Search by";
  defaultOption.classList.add("body-text", "font-medium", "text-brown-800");
  const arrowIcon = document.createElement("img");
  arrowIcon.src = "/icon/custom-arrow-icon.svg";
  arrowIcon.alt = "Arrow icon";

  defaultOption.append(arrowIcon);

  const options = ["name", "breed", "species", "color", "description", "owner"];
  const optionElements = options.map((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type.charAt(0).toLowerCase() + type.slice(1);
    return option;
  });

  select.appendChild(defaultOption);
  optionElements.forEach((opt) => select.appendChild(opt));

  const noWrapContainer = document.createElement("div");
  noWrapContainer.classList.add(
    "flex",
    "flex-row",
    "justify-between",
    "w-full",
  );

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Enter a keyword";
  searchInput.classList.add(
    "placeholder:text-brown-500",
    "placeholder:body-text",
    "w-fit",
    "body-text",
    "border-none",
    "bg-primary-mayo100",
    "focus:border-brown-500",
    "focus:border-2",
  );
  searchInput.id = "searchQuery";

  const searchButton = document.createElement("button");
  searchButton.id = "searchButton";
  searchButton.innerHTML = "";
  searchButton.classList.add(
    "fa-solid",
    "jusitfy-self-end",
    "fa-magnifying-glass",
    "p-2",
    "m-2",
    "border-2",
    "border-primary-fur100",
    "h-[48px]",
    "w-[48px]",
    "text-2xl",
  );
  searchButton.title = "Search";
  searchButton.ariaLabel = "Search";

  noWrapContainer.append(searchInput, searchButton);
  searchBar.appendChild(select);
  searchBar.appendChild(noWrapContainer);
  container.prepend(searchBar);

  searchButton.addEventListener("click", async () => {
    const searchType = select.value;
    const query = searchInput.value.trim();
    const postsContainer = document.getElementById("postsContainer");
    const userSuccess = document.getElementById("userSuccess");

    if (!query || !searchType) {
      userSuccess.classList.remove("invisible");
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
