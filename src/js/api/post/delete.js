import { API_PETS } from "../constants";
import { headers } from "../headers";

/**
 * Deletes a post by its ID.
 *
 * @async
 * @function deletePost
 * @param {string|number} id - The ID of the post to delete.
 * @returns {Promise<{ok: boolean}>} Result of the deletion operation.
 * @throws {Error} If the API request fails or post ID is invalid.
 *
 * @example
 * try {
 *   const result = await deletePost(123);
 *   if (result.ok) console.log("Post deleted.");
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
    return { ok: true };
  } else {
    const message = `Failed to delete post with ID ${id}: ${response.statusText}`;
    console.error(message);
    throw new Error(message);
  }
}
