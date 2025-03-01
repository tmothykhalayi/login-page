// Function to handle form validation
function validateForm(event) {
    var _a;
    event.preventDefault(); // Prevent form from submitting
    // Clear previous error messages
    var emailError = document.getElementById("email-error");
    var usernameError = document.getElementById("username-error");
    var passwordError = document.getElementById("password-error");
    var agreeError = document.getElementById("agree-error");
    emailError.innerText = "";
    usernameError.innerText = "";
    passwordError.innerText = "";
    agreeError.innerText = "";
    // Get the form inputs
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var agreeCheckbox = document.getElementById("agree").checked;
    // Regular expression for email validation
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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
    (_a = document.querySelector("form")) === null || _a === void 0 ? void 0 : _a.reset(); // Reset the form fields
    return true;
}
// Adding event listener for form submission
var form = document.querySelector("form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", validateForm);
