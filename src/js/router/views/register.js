import { onRegister } from "../../ui/auth/register";
import { navToggler } from "../../utilities/navToggler";
import { buttonBase } from "../../ui/components/buttons/buttonTemplate";

/**
 * Function initalizes register functionality on the register page specifically.
 * @function initializeRegister
 */

function initializeRegister() {
  const token = localStorage.getItem("accessToken");
  if (token) {
    alert("You are already using your account, log out to create a new user.");
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
  const form = document.getElementById("registerForm");
  if (form) {
    try {
      onRegister();
      form.appendChild(
        buttonBase({
          type: "primary",
          label: "Register",
          btnType: "submit",
        }),
      );
    } catch {
      console.error("Error loading register functionality.");
    }
  } else {
    console.error("Form #registerForm not found in DOM");
  }
}

initializeRegister();
