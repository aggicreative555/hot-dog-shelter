import { readPosts } from "../../api/post/read";
import { readPost } from "../../api/post/read";
import {
  renderPost,
  renderMultiplePosts,
  setupPostClickNavigation,
} from "../../ui/post/renderPost";

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
    }
  } catch (error) {
    console.error("Error loading post(s):", error);
    container.innerHTML = "<p>Something went wrong loading posts.</p>";
  }
}

loadPosts();
