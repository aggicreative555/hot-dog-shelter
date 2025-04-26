import { singlePost } from "../components/post/singlePost";

export function setupPostClickNavigation() {
  const container = document.getElementById("postsContainer");
  if (!container) return;

  container.addEventListener("click", (event) => {
    const postElement = event.target.closest(".post-item");
    if (!postElement) return;

    const postId = postElement.dataset.id;
    if (postId) {
      window.location.href = `/pets/?id=${postId}`;
    }
  });
}

export function renderMultiplePosts(posts) {
  const container = document.getElementById("postsContainer");
  if (!container) {
    console.error(`Container with ID '${postsContainer}' not found.`);
    return;
  }
  container.innerHTML = "";

  container.classList.add(
    "flex",
    "flex-wrap",
    "justify-center",
    "mt-10",
    "gap-10",
  );

  posts.forEach((post) => {
    const postElement = singlePost(post);
    container.appendChild(postElement);
  });
}
