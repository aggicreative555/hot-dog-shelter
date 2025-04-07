import { authGuard } from "../../utilities/authGuard";
import { onUpdatePost } from "../../ui/post/update";
import { deleteButton } from "../../ui/global/deleteButton";

/**
 * Initializes the post editing page.
 * Ensures the user is authenticated, binds the update form, and adds a delete button.
 *
 * @function initializePostEdit
 * @fires authGuard
 * @fires onUpdatePost - Handles the form submission.
 * @fires deleteButton - Appends a delete button to the DOM.
 */

function initializePostEdit() {
  authGuard();

  const form = document.querySelector("#editPost");

  if (form) {
    form.addEventListener("submit", onUpdatePost);
    deleteButton();
  } else {
    console.error("Edit post form or delete button not found");
  }
}

initializePostEdit();
