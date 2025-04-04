import { onRegister } from "../../ui/auth/register";

/**
 * Function initalizes register functionality on the register page specifically. 
 * @function initializeRegister
*/

function initializeRegister() {
    console.log('working');
    try {
      onRegister();
    } catch {
      console.error('Error loading register functionality.');
    }
  }
  
initializeRegister();