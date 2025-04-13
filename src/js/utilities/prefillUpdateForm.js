import { API_PETS } from "../api/constants";
/**
 * Fetches a post by ID and pre-fills the update form with its data.
 *
 * @async
 * @function prefillUpdateForm
 * @param {string} id - The ID of the post to fetch and display in the form.
 * @throws {Error} If the post could not be fetched.
*/

export async function prefillUpdateForm(id) {
    if (!id) throw new Error("Post ID is required to prefill the form.");

    const url = `${API_PETS}/${id}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch post data.");

    const data = await response.json();

    const form = document.querySelector("#updateForm");
    if (!form) {
      throw new Error("Form with ID 'updateForm' not found.");
    }

    if (!data || typeof data !== "object") {
      throw new TypeError("Invalid data object provided to prefillForm.");
    }

    const set = (field, value) => {
      if (form.elements[field]) {
        form.elements[field].value = value ?? "";
      } else {
        console.warn(`Form field "${field}" not found.`);
      }
    };

    // Populate form fields
    set("name", data.data.name);
    set("species", data.data.species);
    set("breed", data.data.breed);
    set("age", data.data.age);
    set("gender", data.data.gender);
    set("color", data.data.color);
    set("location", data.data.location);
    set("adoptionStatus", data.data.adoptionStatus);
    set("size", data.data.size);
    set("description", data.data.description);
    set("image-url", data.data.image.url);
    set("image-alt", data.data.image.alt);

}