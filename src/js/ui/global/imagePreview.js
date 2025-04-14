export function setupImagePreview() {
  const input = document.getElementById(image - url);
  const preview = document.getElementById(image - preview);

  input.addEventListener("input", () => {
    const url = input.value.trim();
    const isValidImage = /^https?:\/\/.*\.(jpg|jpeg|png)$/.test(url);

    if (isValidImage) {
      preview.src = url;
      preview.alt = "Preview of the selected image URL";
      preview.style.display = "block";
    } else {
      preview.style.display = "none";
      preview.alt = "";
    }
  });
}
