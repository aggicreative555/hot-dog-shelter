/**
 * Creates a "Go Back" button and appends it to the page.
 *
 * When clicked, the button navigates the user back to the previous page
 * using the browser's history stack.
 *
 * @function goBackButton
 */
export function goBackButton() {
  const backButton = document.createElement("button");

  backButton.innerHTML = "Go Back";

  backButton.addEventListener("click", () => {
    history.back();
  });

  document.body.appendChild(backButton);
}
