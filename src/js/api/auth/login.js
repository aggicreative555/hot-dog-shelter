import { save } from "../../utilities/authGuard";
import { headers } from "../headers";

/**
 * Logs in a user using the provided credentials.
 *
 * @async
 * @function login
 * @param {Object} data - The login data from the form.
 * @param {string} data.email - The user's email address.
 * @param {string} data.password - The user's password.
 * @returns {Promise<void>} Resolves when login is successful and data is saved.
 * @throws {Error} If the login request fails or the server returns an error.
 *
 * @example
 * await login({ email: "user@example.com", password: "password123" });
 */

export async function login({ email, password }) {
    const body = JSON.stringify({ email, password });

    try {
        const response = await fetch(API_AUTH_LOGIN, {
        method: "POST",
        headers: headers(), 
        body,
        });

        const result = await response.json();
        const userSuccess = document.getElementById("userSuccess");

        if (!response.ok) {
        const errorMessage = result.errors?.[0]?.message || "Login failed";
        throw new Error(errorMessage);
        } else {
            userSuccess.style.display = "block";
            userSuccess.innerHTML = `Login sucessful!`;
        }

        const {
        data: { accessToken, name, ...restUserData },
        } = result;
        save("accessToken", accessToken);
        save("userName", name);
        save("user", { name, ...restUserData });
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
}