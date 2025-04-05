import { API_PETS } from "../constants";
import { headers } from "../headers";

/**
 * Deletes a post by its ID.
 *
 * @async
 * @function deletePost
 * @param {string|number} id - The ID of the post to delete.
 * @returns {Promise<void>} Resolves when post is successful.
 * @throws {Error} If the API request fails or post ID is invalid.
 *
 * @example
 * try {
 *   await deletePost(123);
 *   console.log("Post deleted successfully.");
 * } catch (error) {
 *   console.error("Error deleting post:", error.message);
 * }
 */

export async function deletePost(id) {
  if (!id) {
    throw new Error("Post ID is required.");
  }

  const url = new URL(`${API_PETS}/${id}`);

  const response = await fetch(url.toString(), {
    method: "DELETE",
    headers: headers({ authRequired: true }),
  });

  if (response.status === 204) {
    console.log(`Post with ID ${id} has been deleted successfully.`);
    return;
  }

  if (!response.ok) {
    throw new Error(
      `Failed to delete post with ID ${id}: ${response.statusText}`,
    );
  }
}
