import { authGuard } from "../../utilities/authGuard";
import { readPostsByOwner } from "../../api/profile/read";
import { goBackButton } from "../../ui/global/goBackButton";
import { shareButton } from "../../ui/global/shareButton";
import { profileTemplate } from "../../ui/profile/profileTemplate";
import { setupPostClickNavigation } from "../../ui/post/renderPost";

function initializeProfile() {
  authGuard();
  const container = document.getElementById("postsContainer");

  if (container) {
    profileTemplate(container);
    setupPostClickNavigation();
    goBackButton();
    shareButton();
    readPostsByOwner(container);
  } else {
    console.error("No element with id #postsContainer found in the DOM.");
    return;
  }
}

initializeProfile();
