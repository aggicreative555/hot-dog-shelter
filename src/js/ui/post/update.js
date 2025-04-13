import { updatePost } from "../../api/post/update";

/**
 * Handles form submission to update an existing post.
 * Converts form data into the expected API structure and sends it via PUT.
 *
 * @async
 * @function onUpdatePost
 * @param {SubmitEvent} event - The form submit event.
 * @fires updatePost
 * @modifies DOM - Updates the #userSuccess message and reloads on success.
 */

export async function onUpdatePost(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const postData = Object.fromEntries(formData.entries());
  const messageContainer = document.getElementById("userSuccess");
  messageContainer.style.display = "block";

  const id = new URLSearchParams(window.location.search).get("id");

  const image = {
    url: postData["image.url"] || "",
    alt: postData["image.alt"] || "",
  };

  // Ensure age is a number
  const age = Number(postData.age);
  if (isNaN(age)) {
    messageContainer.innerHTML = "Age must be a valid number";
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
    const result = await updatePost(id, body);

    if (result.ok) {
      messageContainer.innerHTML = "Post successfully updated! Refreshing...";
      setTimeout(() => (window.location.href = `/pets/?id=${id}`), 2000);
    } else {
      messageContainer.innerHTML = "Failed to update post. Please check your inputs and try again.";
    }
  } catch (error) {
    console.error("Update failed:", error);
    messageContainer.innerHTML = "Something went wrong. Please refresh and try again.";
  }
}

