/**
 * Creates a "Go Back" button and appends it to the page.
 *
 * When clicked, the button navigates the user back to the previous page
 * using the browser's history stack.
 *
 * @function goBackButton
 */
export function goBackButton() {
  const backButton = document.createElement("a");
  backButton.title = "Go Back";
  backButton.classList.add("p-2", "m-2", "w-fit", "h-fit", "flex");
  const backIcon = document.createElement("img");
  backIcon.src = "/icon/custom-arrow-icon.svg";
  backIcon.classList.add("object-cover", "rotate-180", "w-[32px]", "h-[32-px]");
  backIcon.alt = "Arrow icon";
  backButton.appendChild(backIcon);

  backButton.addEventListener("click", () => {
    history.back();
  });
  return backButton;
}
