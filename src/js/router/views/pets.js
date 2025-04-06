import { readPosts } from "../../api/post/read";
import { readPost } from "../../api/post/read";
import { goBackButton } from "../../ui/global/goBackButton";
import { shareButton } from "../../ui/global/shareButton";
import {
  renderPost,
  renderMultiplePosts,
  setupPostClickNavigation,
} from "../../ui/post/renderPost";

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
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");
  const container = document.getElementById("postsContainer");

  if (!container) {
    console.error("No #postsContainer found in the DOM.");
    return;
  }

  try {
    if (!postId) {
      const posts = await readPosts();
      renderMultiplePosts(posts);
      setupPostClickNavigation();
    } else if (postId) {
      const post = await readPost(postId);
      container.innerHTML = renderPost(post);
      goBackButton();
      shareButton();
    }
  } catch (error) {
    console.error("Error loading post(s):", error);
    container.innerHTML = "<p>Something went wrong loading posts.</p>";
  }
}

loadPosts();
