import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";
import { setupImagePreview } from "../../ui/global/imagePreview";

function initializePostCreate() {
  authGuard();

  const form = document.querySelector("#createPost");
  setupImagePreview();

  if (form) {
    form.addEventListener("submit", onCreatePost);
  } else {
    console.error("Create Post form not found");
  }
}

initializePostCreate();
