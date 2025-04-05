import { headers } from "../headers";
import { API_PETS } from "../constants";

/**
 * Updates an existing post by sending updated data to the API.
 *
 * @async
 * @function updatePost
 * @param {string|number} id - The ID of the post to update.
 * @param {Object} data - The updated post data.
 * @param {string} [data.name] - The updated name of the pet.
 * @param {string} [data.description] - Updated description of the post.
 * @param {string[]} [data.tags] - Updated tags for the post.
 * @param {Object} [data.image] - Updated image object.
 * @param {string} [data.image.url] - The updated image URL.
 * @param {string} [data.image.alt] - Updated alt text for the image.
 * @returns {Promise<Object>} The updated post data from the API.
 * @throws {Error} If the request fails or ID is missing.
 *
 * @example
 * const updated = await updatePost("123", {
 *   name: "Pet",
 *   description: "Short description",
 *   image: { url: "https://example.com/dog.jpg", alt: "Dog" }
 * });
 * console.log(updated); // Updated post object
 */

export async function updatePost(id) {
  if (!id) {
    throw new Error("Post ID is required for updating.");
  }

  const url = new URL(`${API_PETS}/${id}`);

  const response = await fetch(url.toString(), {
    method: "PUT",
    headers: headers({ authRequired: true }),
    body: JSON.stringify(data),
  });

  const updatedPost = await response.json();

  return updatedPost;
}
