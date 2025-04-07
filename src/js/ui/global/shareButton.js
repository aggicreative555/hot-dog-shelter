/**
 * Creates a "Share pet" button and appends it to the page.
 *
 * When clicked, the button copies the current page's URL (excluding the 'http://')
 * to the user's clipboard and displays a confirmation alert.
 *
 * @function shareButton
 */
export function shareButton() {
  const shareButton = document.createElement("button");

  shareButton.innerHTML = "Share pet";

  // Storing the URL of the current webpage
  const url = window.location.href.slice(7); // Removes 'http://'

  shareButton.addEventListener("click", () => {
    navigator.clipboard.writeText(url);
    alert("Sharing link copied to clipboard!");
  });

  document.body.appendChild(shareButton);
}
