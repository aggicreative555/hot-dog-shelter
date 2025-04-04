import { onLogin } from "../../ui/auth/login";

/**
 * Function initalizes login functionality on the login page specifically. 
 * @function initializeLogin
*/

function initializeLogin() {
    try {
      onLogin();
    } catch {
      console.error('Error loading login functionality.');
    }
  }
  
initializeLogin();