import { onLogin } from "../../ui/auth/login";
import { navToggler } from "../../utilities/navToggler";
import { buttonBase } from "../../ui/components/buttons/buttonTemplate";

/**
 * Function initalizes login functionality on the login page specifically.
 * @function initializeLogin
 */

function initializeLogin() {
  const token = localStorage.getItem("accessToken");
  if (token) {
    alert("You are already logged in");
    setTimeout(() => {
      window.location.href = "/profile/";
    }, 1000);
  }
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");
  if (header && footer) {
    navToggler();
  } else {
    console.error("No #footer or #header element located in the DOM");
  }

  const form = document.getElementById("loginForm");
  try {
    if (form) {
      onLogin();
      form.appendChild(
        buttonBase({
          type: "primary",
          label: "Log in",
          btnType: "submit",
        }),
      );
    } else {
      console.error("Form #loginForm not found in DOM");
    }
  } catch {
    console.error("Error loading login functionality.");
  }
}

initializeLogin();
