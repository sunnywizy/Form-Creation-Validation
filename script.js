// script.js

document.addEventListener('DOMContentLoaded', function() {
    // 1. Initial Code Structure: Select the form and the feedback area.
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // 2. Form Submission Event Listener: Listen for when the user clicks the Register button.
    form.addEventListener('submit', function(event) {
        // Stop the form from trying to send data to a server immediately.
        event.preventDefault(); 

        // 3. Input Retrieval and Trimming: Get the values and clean up any extra spaces.
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // 4. Initialize Validation Variables: Start assuming the form is valid.
        let isValid = true;
        const messages = [];

        // --- Validation Logic ---

        // Username Validation: Must be at least 3 characters long.
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email Validation: Must contain both '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address (must contain '@' and '.').");
        }

        // Password Validation: Must be at least 8 characters long.
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // --- Displaying Feedback ---

        // Always make the feedback box visible so the user sees the result.
        feedbackDiv.style.display = "block";

        if (isValid) {
            // Success Case
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green text
            feedbackDiv.style.backgroundColor = "#d4edda"; // Light green background

            // OPTIONAL: Clear the form fields after success
            form.reset(); 
        } else {
            // Failure Case: Show all the error messages.
            
            // Join all error messages with an HTML line break (<br>) between them.
            feedbackDiv.innerHTML = messages.join('<br>'); 
            
            feedbackDiv.style.color = "#dc3545"; // Red text
            feedbackDiv.style.backgroundColor = "#f8d7da"; // Light red background
        }
    });
});
