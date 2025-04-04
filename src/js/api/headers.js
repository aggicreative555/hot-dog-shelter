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

export function headers() {
  const headers = new Headers();

  if (API_KEY) {
    headers.append('X-Noroff-API-Key', API_KEY);
  } else {
    throw new Error('API Key is missing. Please retrieve it first.');
  }

  if (localStorage.accessToken) {
    headers.append('Authorization', `Bearer ${localStorage.accessToken}`);
  } else {
    throw new Error('Authorization token is missing. Please retrieve it first.');
  }

  if (body) {
    headers.append('Content-type', 'application/json');
  } else {
   throw new Error('Body element is missing. Reload the page.');
  }
    
  return headers;
}

