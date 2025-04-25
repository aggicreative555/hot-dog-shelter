import { onCreatePost } from "../../ui/post/create";
import { navToggler } from "../../utilities/navToggler";
import { authGuard } from "../../utilities/authGuard";
import { setupImagePreview } from "../../ui/global/imagePreview";
import { validateField } from "../../ui/global/validateField";
import {
  isValidAge,
  isValidBreed,
  isValidDescription,
  isValidImageAlt,
  isValidLocation,
  isValidName,
  isValidSize,
  isValidUrl,
} from "../../ui/global/validators";

function initializePostCreate() {
  authGuard();
  navToggler();

  const form = document.querySelector("#createPost");
  // setupImagePreview();

  if (form) {
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const breedInput = document.getElementById("breed");
    const descriptionInput = document.getElementById("description");
    const locationInput = document.getElementById("location");
    const imageInput = document.getElementById("image-url");
    const imageAltInput = document.getElementById("image-alt");
    const sizeInput = document.getElementById("size");

    validateField(
      nameInput,
      isValidName,
      "The name of your pet can only inlude letters and be between 1 - 30 characters",
    );
    validateField(
      ageInput,
      isValidAge,
      "Your pets age must be a valid number between 0 - 99",
    );
    validateField(
      breedInput,
      isValidBreed,
      "Your pets breed can only inlude letters and must be between 1 - 30 characters",
    );
    validateField(
      descriptionInput,
      isValidDescription,
      "Write a few sweet words about your pet. 10 - 300 words",
    );
    validateField(
      locationInput,
      isValidLocation,
      "Please enter a valid location (max 30 characters)",
    );
    validateField(
      imageInput,
      isValidUrl,
      "Please add a valid image URL starting with http(s)",
    );
    validateField(
      imageAltInput,
      isValidImageAlt,
      "Write a small description of the image",
    );
    validateField(
      sizeInput,
      isValidSize,
      "Please enter the weight of your pet ending with kg, lbs or pounds",
    );

    form.addEventListener("submit", onCreatePost);
  } else {
    console.error("Create Post form not found");
  }
}

initializePostCreate();
