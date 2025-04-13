import { headers } from "../headers";
import { API_PETS } from "../constants";

/**
 * Creates a new post by sending the data to the API.
 *
 * @async
 * @function createPost
 * @param {Object} body - The post data to send.
 * @param {string} body.name - The name of the pet (required).
 * @param {string} [body.species] - The species of the pet.
 * @param {string} [body.breed] - The breed of the pet.
 * @param {string} [body.age] - The age of the pet.
 * @param {string} [body.gender] - The gender of the pet.
 * @param {string} [body.color] - The color of the pet.
 * @param {string} [body.location] - The location of the pet.
 * @param {string} [body.adoptionStatus="available"] - The adoption status.
 * @param {Object} [body.image] - Image object with URL and alt text.
 * @param {string} [body.image.url] - Image URL.
 * @param {string} [body.image.alt] - Alt text for image.
 * @returns {Promise<Object>} The created post data from the API.
 * @throws {Error} If the API request fails or server returns an error.
 *
 * @example
 * const post = {
 *   name: "My Pet",
 *   species: "Dog",
 *   breed: "Dachshund",
 *   age: "2 years",
 *   color: "Black",
 *   location: "Bergen",
 *   adoptionStatus: "available",
 *   image: {
 *     url: "https://example.com/image.jpg",
 *     alt: "Cute dog"
 *   }
 * };
 * const response = await createPost(post);
 * console.log(response); // Outputs created post data
 */

export async function createPost(body) {
  const response = await fetch(API_PETS, {
    method: "POST",
    headers: headers({ authRequired: true }),
    body: JSON.stringify(body),
  });

  const post = await response.json();

  if (!response.ok) {
    console.error(`Failed to create post:${post?.message}`);
  } else {
    console.error("Post created successfully:", post);
  }

  return post;
}
