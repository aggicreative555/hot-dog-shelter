import { headers } from "../headers";
import { API_PETS } from "../constants";

/**
 * Updates an existing post by sending updated data to the API.
 *
 * @async
 * @function updatePost
 * @param {string|number} id - The ID of the post to update.
 * @param {Object} body - The updated post data.
 * @param {string} [body.name] - The updated name of the pet.
 * @param {string} [body.description] - Updated description of the post.
 * @param {string[]} [body.tags] - Updated tags for the post.
 * @param {Object} [body.image] - Updated image object.
 * @param {string} [body.image.url] - The updated image URL.
 * @param {string} [body.image.alt] - Updated alt text for the image.
 * @returns {Promise<{data: Object, ok: boolean}>} The response and status.
 * @throws {Error} If the request fails or ID is missing.
 * @example
 * const updated = await updatePost("123", {
 *   name: "Pet",
 *   description: "Short description",
 *   image: { url: "https://example.com/dog.jpg", alt: "Dog" }
 * });
 * console.log(updated); // Updated post object
 */

export async function updatePost(id, body) {
  if (!id) {
    throw new Error("Post ID is required for updating.");
  }

  const url = new URL(`${API_PETS}/${id}`);

  const response = await fetch(url.toString(), {
    method: "PUT",
    headers: headers({ authRequired: true }),
    body: JSON.stringify(body),
  });

  const updatedPost = await response.json();

  return {
    data: updatedPost,
    ok: response.ok,
  };
}
