import { login } from "../../api/auth/login";
/**
 * Handles the login form submission by extracting email and password
 * from the form and sending it to the login API function.
 *
 * Disables the submit button during submission to prevent duplicate requests.
 * Displays success or error messages accordingly.
 *
 * @function onLogin
 * @throws {Error} If the login form is not found in the DOM.
 */

export function onLogin() {
    const form = document.querySelector('#loginForm');
  
    if (form) {
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
  
        // Disable submit to prevent spamming.
        const submitButton = form.querySelector('button[type="submit"]');
  
        if (!submitButton) {
          console.error('Submit button not found', error);
          return;
        }
  
        submitButton.disabled = true;
        submitButton.textContent = 'Loggin in...';
  
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');
        const userSuccess = document.getElementById("userSuccess");
  
        try {

          await login({email, password});
          if (response.ok) {
            userSuccess.style.display = "block";
            userSuccess.innerHTML = `Login sucessful!`;
            setTimeout(() => {
              window.location.href = '/';
            }, 1000);
          }
          return false;
        } catch (error) {
          console.error('Login error:', error);
          alert('An error occurred while loggin in. Please try again.');
        } finally {
          submitButton.disabled = false;
          submitButton.textContent = 'Login';
          form.reset();
        }
      });
    } else {
      console.error('Error submitting login information');
    }
}