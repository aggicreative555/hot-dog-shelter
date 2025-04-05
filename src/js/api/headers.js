import { API_KEY } from "./constants";

/**
 * Generates HTTP headers for API requests, including Content-Type, Authorization, and API key.
 *
 * @function headers
 * @returns {Headers} A headers object containing:
 *   - `Content-Type`: Set to "application/json".
 *   - `Authorization`: Bearer token for user authentication.
 *   - `X-Noroff-API-Key`: API key for the service.
 * @throws {Error} If the access token or API key is missing.
 *
 */

/**
 * Generates HTTP headers for API requests.
 *
 * @param {Object} options
 * @param {boolean} [options.authRequired=false] - Whether auth token is required.
 * @param {boolean} [options.apiKeyRequired=true] - Whether API key is required.
 * @returns {Headers} The configured headers object.
 */
export function headers({ authRequired = false, apiKeyRequired = true } = {}) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  // Only append API key if required
  if (apiKeyRequired && API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  } else if (apiKeyRequired && !API_KEY) {
    throw new Error("API Key is missing.");
  }

  // Only append Auth token if required
  if (authRequired && localStorage.accessToken) {
    headers.append("Authorization", `Bearer ${localStorage.accessToken}`);
  } else if (authRequired && !localStorage.accessToken) {
    throw new Error("Authorization token is missing.");
  }

  return headers;
}
