import { API_AUTH_REGISTER } from "../constants";
import { login } from "./login";
import { headers } from "../headers";

/**
 * Registers a new user with the provided details.
 *
 * Displays a success message and logs the user in on success.
 * Displays relevant validation errors returned from the API on failure.
 *
 * @param {Object} data - The registration data.
 * @param {string} data.name - The user's name (required).
 * @param {string} data.email - The user's email address (required).
 * @param {string} data.password - The user's
 *
 * @returns {Promise<Object>} A promise that resolves to the user's registration response.
 *
 * @throws {Error} If the registration fails.
 *
 * @example
 * const profile = {
 * name = "user1",
 * email = "user@example.com",
 * password = "password1234"
 * };
 * const response = await register(profile);
 * console.log(response) // Outputs successful registration response.
 */

export async function register({ name, email, password }) {
  const body = JSON.stringify({ name, email, password });

  try {
    const response = await fetch(API_AUTH_REGISTER, {
      method: "POST",
      headers: headers({ apiKeyRequired: false }),
      body,
    });

    const result = await response.json();
    const userSuccess = document.getElementById("userSuccess");
    const errorMessage =
      `Registration failed. ${result?.errors?.[0]?.message}. Please try again.` ||
      `Registration failed. ${result?.message}. Please try again.` ||
      "Registration failed. Please check that all fields are filled in correctly and try again.";

    if (userSuccess) {
      userSuccess.style.display = "block";
      userSuccess.innerHTML = ""; // Clear
    }

    if (response.ok) {
      userSuccess.style.display = "block";
      userSuccess.innerHTML = `User created successfully, logging in...`;
      setTimeout(() => {
        login({ email, password });
      }, 2000);
      return result;
    } else {
      userSuccess.innerHTML = errorMessage;

      setTimeout(() => {
        userSuccess.innerHTML = ""; // Clear
      }, 2000);
    }
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
}
