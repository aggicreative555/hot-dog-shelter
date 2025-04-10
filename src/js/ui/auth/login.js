import { login } from "../../api/auth/login";
import { validateField } from "../../ui/global/validateField";
import { isValidEmail, isValidPassword } from "../../ui/global/validators";
/**
 * Handles the login form submission by extracting email and password
 * from the form and sending it to the login API function.
 *
 * Disables the submit button during submission to prevent duplicate requests.
 * Displays success or error messages accordingly.
 *
 * @function onLogin
 * @throws {Error} If the login form is not found in the DOM.
 */

export function onLogin() {
  const form = document.querySelector("#loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  if (form) {
    validateField(emailInput, isValidEmail, "Must be a valid noroff.no or stud.noroff.no email.");
    validateField(passwordInput, isValidPassword, "Password must be 8–30 characters.");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      // Disable submit to prevent spamming.
      const submitButton = form.querySelector('button[type="submit"]');

      if (!submitButton) {
        console.error("Submit button not found", error);
        return;
      }

      submitButton.disabled = true;
      submitButton.textContent = "Loggin in...";

      const formData = new FormData(form);
      const email = formData.get("email");
      const password = formData.get("password");

      try {
        await login({ email, password });
        return false;
      } catch (error) {
        console.error("Login error:", error);
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Login";
        form.reset();
      }
    });
  } else {
    console.error("Error submitting login information");
  }
}
