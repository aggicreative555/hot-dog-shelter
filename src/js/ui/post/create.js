import { createPost } from "../../api/post/create";

/**
 * @async
 * Handles form submission for creating a new post.
 * Converts flat form data into the expected API structure (including media).
 *
 * @param {SubmitEvent} event - The form submit event
 */

export async function onCreatePost(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const postData = Object.fromEntries(formData.entries());

  const image = {
    url: postData["image.url"] || "",
    alt: postData["image.alt"] || "",
  };

  // Validate required fields
  if (
    !postData.name ||
    !postData.species ||
    !postData.age ||
    !postData.location
  ) {
    alert("Name, species, age, and location are required.");
    return;
  }

  // Ensure age is a number
  const age = Number(postData.age);
  if (isNaN(age)) {
    alert("Age must be a valid number.");
    return;
  }

  const body = {
    name: postData.name,
    species: postData.species,
    breed: postData.breed,
    age, // Ensure age is a number
    gender: postData.gender,
    color: postData.color,
    location: postData.location,
    adoptionStatus: postData.adoptionStatus || "available",
    size: postData.size || "unknown",
    description: postData.description || "",
    image,
  };

  try {
    const newPost = await createPost(body);

    if (newPost && newPost.data && newPost.data.id) {
      alert("Post successfully created!");
      // Redirect to the single post view with the new post ID
      window.location.href = `/pets/?id=${newPost.data.id}`;
    } else {
      throw new Error("Post creation succeeded but no ID was returned.");
    }
  } catch (error) {
    console.error("Error creating post:", error);
    alert("Failed to update post. Please try again.");
  }
}
