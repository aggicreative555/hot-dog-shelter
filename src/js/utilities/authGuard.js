/**
 * Ensures the user is authenticated by checking for an access token in localStorage.
 * If the user is not authenticated, redirects them to the login page.
 *
 * @function authGuard
 */

export function authGuard() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    alert("You must be logged in to view this page");
    window.location.href = "/auth/login/";
  }
}

/**
 * Saves data to localStorage with correct handling of string values.
 *
 * @param {string} key - The key under which the value should be stored.
 * @param {any} value - The value to store in localStorage.
 */
export function save(key, value) {
  // If value is a string, store it directly without JSON.stringify()
  if (typeof value === "string") {
    localStorage.setItem(key, value);
  } else {
    // Otherwise, stringify the value (for objects, arrays, etc.)
    localStorage.setItem(key, JSON.stringify(value));
  }
}
/**
 * Loads and parses a value from localStorage.
 *
 * @function load
 * @param {string} key - The key for which the value needs to be retrieved.
 * @returns {*} The parsed value from localStorage, or an error object if parsing fails.
 *
 * // Example usage: Load user profile from localStorage
 * const userProfile = load("userProfile");
 *
 */

export function load(key) {
  return localStorage.getItem(key);
}

/**
 * Removes a value from localStorage.
 *
 * @function remove
 * @param {string} key - The key to remove from localStorage.
 *
 * @example
 * // Example usage: Remove user session data
 * remove("userProfile");
 */

export function remove(key) {
  return localStorage.removeItem(key);
}
