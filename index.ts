// Function to handle form validation
function validateForm(event: Event): boolean {
    event.preventDefault();  // Prevent form from submitting

    // Clear previous error messages
    const emailError = document.getElementById("email-error") as HTMLElement;
    const usernameError = document.getElementById("username-error") as HTMLElement;
    const passwordError = document.getElementById("password-error") as HTMLElement;
    const agreeError = document.getElementById("agree-error") as HTMLElement;
    emailError.innerText = "";
    usernameError.innerText = "";
    passwordError.innerText = "";
    agreeError.innerText = "";

    // Get the form inputs
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    const agreeCheckbox = (document.getElementById("agree") as HTMLInputElement).checked;

    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validate email
    if (!emailPattern.test(email)) {
        emailError.innerText = "Please enter a valid email address.";
        return false;
    }

    // Validate username (minimum length of 3 characters)
    if (username.length < 3) {
        usernameError.innerText = "Username should be at least 3 characters long.";
        return false;
    }

    // Validate password (minimum length of 6 characters)
    if (password.length < 6) {
        passwordError.innerText = "Password should be at least 6 characters long.";
        return false;
    }

    // Check if terms and conditions are agreed to
    if (!agreeCheckbox) {
        agreeError.innerText = "You must agree to the terms and conditions.";
        return false;
    }

    // If all validations pass, reset form and show success message
    alert("Form submitted successfully!");
    document.querySelector("form")?.reset();  // Reset the form fields
    return true;
}

// Adding event listener for form submission
const form = document.querySelector("form");
form?.addEventListener("submit", validateForm);
