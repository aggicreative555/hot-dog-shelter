import { API_AUTH_REGISTER } from '../constants';
import { login } from './login';
import { headers } from '../headers';

/**
 * Registers a new user with the provided details.
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

export async function register({name, email, password}) {
  const body = JSON.stringify({ name, email, password });

  try {
    const response = await fetch(API_AUTH_REGISTER, {
      method: 'POST',
      headers: headers({apiKeyRequired : false}),
      body,
    });

    const result = await response.json();
    const userSuccess = document.getElementById("userSuccess");

    if (response.ok) {
      userSuccess.style.display = "block";
      userSuccess.innerHTML = `User was created successfully, logging in...`;
      setTimeout(() => {
        login({ email, password });
      }, 3000);
      return result;
    } else {
      throw new Error(`Registration failed: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
}