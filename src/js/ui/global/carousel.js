/**
 * Initializes an automatic image carousel with smooth transitions.
 * Only one image is visible at a time, and images transition automatically.
 *
 * @function carousel
 * @param {string} carouselId - The ID of the carousel container element.
 * @param {number} interval - The interval time in milliseconds (default 3000ms).
 *
 * @example
 * // Usage
 * carousel("carousel", 3000);
 *
 * This will initialize the carousel with the ID "carousel" and set the transition interval to 3 seconds.
 *
 * @throws Will throw an error if the element with the specified ID is not found.
 */
export function carousel(carouselId, interval = 3000) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) {
    console.error(`Carousel container with ID "${carouselId}" not found.`);
    return;
  }

  const images = carousel.querySelectorAll("img");
  let currentIndex = 0;

  images.forEach((img, index) => {
    img.style.position = "absolute";
    img.style.left = "0";
    img.style.transition = "opacity 1s ease-in-out";
    img.style.opacity = index === 0 ? 1 : 0;
  });

  function nextSlide() {
    images[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = 1;
  }

  setInterval(nextSlide, interval);

  nextSlide();
}
