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
  const messageContainer = document.getElementById('userSuccess');

  const image = {
    url: formData.get("image.url"),
    alt: formData.get("image.alt"),
  };

  const age = Number(postData.age);
  if (isNaN(age)) {
    console.error("Age must be a valid number");
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
      messageContainer.innerHTML = "Post created successfully!";
      // Redirect to the single post view with the new post ID
      setTimeout(() => {
        window.location.href = `/pets/?id=${newPost.data.id}`;
      }, 2000);
    } else {
      throw new Error("Post creation succeeded but no ID was returned.");
    }
  } catch (error) {
    console.error("Error creating post:", error);
    messageContainer.innerHTML = "Failed to create post, check your fields and try again";
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }
}
