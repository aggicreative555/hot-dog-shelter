import { authGuard } from "../../utilities/authGuard";
import { readPostsByOwner } from "../../api/profile/read";
import { goBackButton } from "../../ui/global/goBackButton";
import { shareButton } from "../../ui/global/shareButton";
import { setupPostClickNavigation } from "../../ui/post/renderPost";
import { setLogoutListener } from "../../ui/global/logout";
import { profileTemplate } from "../../ui/components/profileTemplate";
import { navToggler } from "../../utilities/navToggler";

function initializeProfile() {
  authGuard();

  const header = document.getElementById("header");
  const footer = document.getElementById("footer");
  if (header && footer) {
    navToggler();
  } else {
    console.error("No #footer or #header element located in the DOM");
  }

  const container = document.getElementById("postsContainer");
  const profileContainer = document.getElementById("profileContainer");

  if (container) {
    profileTemplate(container);
    setupPostClickNavigation();
    goBackButton();
    shareButton();
    setLogoutListener(profileContainer);
    readPostsByOwner(container);
  } else {
    console.error("No element with id #postsContainer found in the DOM.");
    return;
  }
}

initializeProfile();
