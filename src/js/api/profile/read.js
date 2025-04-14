import { load, save } from "../../utilities/authGuard";
import { readPosts } from "../post/read";
import { renderMultiplePosts } from "../../ui/post/renderPost";

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
  const userSuccess = document.getElementById("userSuccess");
  const postsContainer = document.getElementById("postsContainer");
  const currentUser = load("userName");

  const createPostLink = document.createElement("a");
  const heading = document.createElement("h2");
  createPostLink.id = "createPostLink";
  createPostLink.href = "/pets/create/";
  createPostLink.innerHTML = "Create a Post";

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
  userSuccess.innerHTML = "";

  if (filteredPosts.length === 0) {
    if (userSuccess) {
      userSuccess.appendChild(heading);
      heading.innerHTML = "Make your first post!";
      userSuccess.appendChild(createPostLink);
    }
  } else {
    userSuccess.appendChild(heading);
    heading.innerHTML = "Make a new post";
    userSuccess.appendChild(createPostLink);
    renderMultiplePosts(filteredPosts, postsContainer);
  }
}
