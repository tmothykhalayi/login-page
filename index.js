
          
        // Function to handle form validation
        function validateForm(event) {
            event.preventDefault();  // Prevent form from submitting

            // Clear previous error messages
            document.getElementById("email-error").innerText = "";
            document.getElementById("username-error").innerText = "";
            document.getElementById("password-error").innerText = "";
            document.getElementById("agree-error").innerText = "";

            // Get the form inputs
            const email = document.getElementById("email").value;
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const agreeCheckbox = document.getElementById("agree").checked;

            // Regular expression for email validation
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            // Validate email
            if (!emailPattern.test(email)) {
                document.getElementById("email-error").innerText = "Please enter a valid email address.";
                return false;
            }

            // Validate username (minimum length of 3 characters)
            if (username.length < 3) {
                document.getElementById("username-error").innerText = "Username should be at least 3 characters long.";
                return false;
            }

            // Validate password (minimum length of 6 characters)
            if (password.length < 6) {
                document.getElementById("password-error").innerText = "Password should be at least 6 characters long.";
                return false;
            }

            // Check if terms and conditions are agreed to
            if (!agreeCheckbox) {
                document.getElementById("agree-error").innerText = "You must agree to the terms and conditions.";
                return false;
            }

            // If all validations pass, reset form and show success message
            alert("Form submitted successfully!");
            document.querySelector("form").reset();  // Reset the form fields
            return true;
        }

        // Adding event listener for form submission
        document.querySelector("form").addEventListener("submit", validateForm);
   