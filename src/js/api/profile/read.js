import { load, save } from "../../utilities/authGuard";
import { readPosts } from "../post/read";
import { renderMultiplePosts } from "../../ui/post/renderPost";
import { updateButton } from "../../ui/global/updateButton";

/**
 * Filters and displays posts created by the currently logged-in user.
 * @async
 * - Retrieves posts from localStorage cache (if available), or fetches them from the API.
 * - Matches each post's `owner.name` against the current user's name stored in localStorage.
 * - Renders only the posts that belong to the logged-in user.
 * - If no posts exist for the user, displays a message and a link to create a new post.
 * @function readPostsByOwner
 * @returns {Promise<void>}
 */

let cachedPosts = [];

export async function readPostsByOwner() {
  const createPostContainer = document.getElementById("createPostContainer");
  const postsContainer = document.getElementById("postsContainer");
  const currentUser = load("userName");

  const borderContainer = document.createElement("div");
  borderContainer.classList.add(
    "text-primary-fur100",
    "border-solid",
    "border-primary-fur100",
    "border-2",
    "flex",
    "justify-center",
    "items-center",
    "align-middle",
    "m-4",
    "px-2",
    "py-2",
    "mt-10",
    "w-full",
    "outline",
    "outline-[4px]",
    "outline-offset-[8px]",
    "outline-primary-fur100",
  );
  const createPostLink = document.createElement("a");
  createPostLink.id = "createPostLink";
  createPostLink.classList.add("btn-base", "btn-primary", "w-full");
  createPostLink.href = "/pets/create/";
  createPostLink.innerHTML = "create a new post";

  borderContainer.append(createPostLink);

  if (!postsContainer) {
    console.error("No #postsContainer found in the DOM");
    return;
  }

  const stored = load("cachedPosts");
  if (stored) {
    cachedPosts = JSON.parse(stored);
  } else {
    cachedPosts = await readPosts();
    save("cachedPosts", JSON.stringify(cachedPosts));
  }

  const filteredPosts = cachedPosts.filter((post) => {
    return post.owner?.name === currentUser;
  });

  postsContainer.innerHTML = "";
  createPostContainer.innerHTML = "";

  if (filteredPosts.length === 0) {
    if (createPostContainer) {
      createPostLink.innerHTML = "";
      createPostLink.innerHTML = "create your first post";
      createPostContainer.appendChild(borderContainer);
    }
  } else {
    renderMultiplePosts(filteredPosts, postsContainer);

    setTimeout(() => {
      const singlePosts = postsContainer.querySelectorAll(".post-item");

      singlePosts.forEach((postElement, index) => {
        const post = filteredPosts[index];
        if (post && post.id) {
          const button = updateButton(post.id);
          button.classList.replace("btn-primary", "btn-secondary");
          button.classList.replace("md:w-full", "w-auto");
          postElement.appendChild(button);
        }
      });
    }, 0);
    createPostContainer.appendChild(borderContainer);
  }
}
