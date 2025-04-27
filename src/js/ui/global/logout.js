import { remove } from "../../utilities/authGuard";

/**
 * Attaches a logout button to the given container.
 *
 * On click, the function:
 * - Clears user-related data from localStorage and sessionStorage.
 * - Displays a confirmation message in #userSuccess.
 * - Redirects the user to the home page after a short delay.
 *
 * @function setLogoutListener
 * @param {HTMLElement} container - The DOM element where the logout button will be appended.
 */

export function setLogoutListener(container) {
  const logoutButton = document.createElement("button");
  logoutButton.classList.add("btn-base", "btn-secondary", "md:w-[341px]");
  const messageContainer = document.getElementById("userSuccess");

  logoutButton.innerHTML = "Log out";

  logoutButton.addEventListener("click", () => {
    try {
      localStorage.clear();
      sessionStorage.clear();

      if (messageContainer) {
        messageContainer.innerHTML =
          "You are now logged out. Redirecting to home page...";
      } else {
        console.error("#userSuccess not found in DOM.");
      }
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      console.error("Logout unsuccessful.", error.message);
      throw error;
    }
  });

  container.prepend(logoutButton);
}
