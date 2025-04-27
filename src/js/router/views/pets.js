import { readPosts } from "../../api/post/read";
import { readPost } from "../../api/post/read";
import { goBackButton } from "../../ui/global/goBackButton";
import { shareButton } from "../../ui/global/shareButton";
import { updateButton } from "../../ui/global/updateButton";
import { load, save } from "../../utilities/authGuard";
import { navToggler } from "../../utilities/navToggler";
import {
  renderMultiplePosts,
  setupPostClickNavigation,
} from "../../ui/post/renderPost";
import { searchBar, setupLiveSearch } from "../../ui/global/search";
import { postIdCard } from "../../ui/components/post/postIdPost";
import { loadMultiplePosts, setupPagination } from "../../ui/post/pagniation";

/**
 * @async
 * Loads and renders post data based on the current URL.
 *
 * - If no `id` is found in the URL, this function fetches and displays all posts.
 * - If an `id` is present (`?id=<postId>`), it fetches and displays a single post,
 *   along with "Go Back" and "Share pet" buttons for user interaction.
 *
 * Displays an error message on the page if something goes wrong.
 *
 * @function loadPosts
 * @returns {Promise<void>}
 */

export async function loadPosts() {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");
  if (header && footer) {
    navToggler();
  } else {
    console.error("No #footer or #header element located in the DOM");
  }

  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");
  const container = document.getElementById("postsContainer");
  const updateContainer = document.getElementById("update");
  const message = document.getElementById("userSuccess");
  const searchContainer = document.getElementById("searchContainer");

  if (!container) {
    console.error("No #postsContainer found in the DOM.");
    return;
  }

  const goBack = document.getElementById("goBack");
  goBack.appendChild(goBackButton());
  try {
    if (!postId) {
      const posts = await readPosts();
      renderMultiplePosts(posts);
      loadMultiplePosts();
      setupPagination();
      save("cachedPosts", JSON.stringify(posts));
      searchBar(searchContainer);
      setupLiveSearch({
        inputId: "searchQuery",
        typeSelectId: "searchType",
        postsContainerId: "postsContainer",
      });
      setupPostClickNavigation();
    } else if (postId) {
      const pagination = document.getElementById("pagination");
      pagination.classList.add("hidden");
      const post = await readPost(postId);
      const postOwnerName = post.owner.name;
      const currentUserName = load("userName");
      container.innerHTML = "";
      container.appendChild(postIdCard(post));
      if (currentUserName === postOwnerName) {
        updateContainer.append(updateButton(postId));
      }
    }
  } catch (error) {
    console.error("Error loading post(s):", error);
    message.classList.remove("invisible");
    message.innerHTML =
      "Something went wrong loading posts.Refresh the page...";
  }
}

loadPosts();
