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
  shareButton.classList.add(
    "p-4",
    "m-4",
    "bg-primary-mayo100",
    "text-brown-800",
    "h-[48px]",
    "w-[48px]",
    "flex",
    "items-center",
    "justify-center",
    "rounded-full",
    "shadow-[0px_4px_4px_0px_rgba(29,26,25,0.20)]",
    "hover:text-brown-500",
    "hover:bg-brown-100",
    "hover:shadow-[0px_8px_8px_0px_rgba(29,26,25,0.20)]",
    "focus:border-3",
    "focus:border-brown-800",
    "transition-all",
    "duration-150",
    "ease-in-out",
  );
  const shareIcon = document.createElement("i");
  shareIcon.classList.add("fa-solid", "fa-paper-plane", "text-xl");
  shareButton.title = "Share pet";
  shareButton.ariaLabel = "Share pet";
  shareButton.appendChild(shareIcon);

  // Storing the URL of the current webpage
  const url = window.location.href.slice(7); // Removes 'http://'

  shareButton.addEventListener("click", () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  });

  return shareButton;
}
