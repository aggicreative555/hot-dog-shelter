import { register } from "../../api/auth/register";
/**
 * Handles the register form submission by passing data to the register function.
 * Disables the submit button during submission to prevent duplicate requests.
 * Displays success or error messages accordingly.
 *
 *
 * @function onRegister
 * @param {Event} event - Form submission event.
 * @throws {Error} If register form is missing in the DOM.
 */

export function onRegister() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const submitButton = form.querySelector('button[type="submit"]');

      if (!submitButton) {
        console.error("Submit button not found");
        return;
      }

      submitButton.disabled = true;
      submitButton.textContent = "Registering user...";

      const formData = new FormData(form);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");

      try {
        await register({ name, email, password });
        form.reset();
      } catch (error) {
        console.error("Error registering user:", error);
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Register";
      }
    });
  } else {
    console.error("Register form not found");
  }
}
