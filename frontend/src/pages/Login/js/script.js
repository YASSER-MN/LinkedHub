// Select the main form container
const forms = document.querySelector(".forms");

// Select all elements with the class 'link' (used for toggling between login and signup)
const links = document.querySelectorAll(".link");

// Select all elements with the class 'eye-icon' (used for toggling password visibility)
const pwShowHide = document.querySelectorAll(".eye-icon");

// Select the login form specifically
const loginForm = document.querySelector(".form.login form");

// Predefined list of valid users (for demonstration purposes only)
const users = [
    { email: "user1@example.com", password: "password123" },
    { email: "user2@example.com", password: "mypassword456" },
];

// Select the sign-up form and its fields
const signupForm = document.querySelector("#signup-form");
const signupEmailInput = document.querySelector("#signup-email-input");
const signupPasswordInput = document.querySelector("#signup-password-input");
const signupEmailError = document.querySelector("#signup-email-error");
const signupPasswordError = document.querySelector("#signup-password-error");

// Add click event listeners to each link to toggle between login and signup forms
links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); // Prevent the default link behavior
        forms.classList.toggle("show-signup"); // Toggle the 'show-signup' class on the forms container
    });
});

// Add click event listeners to each eye icon to toggle password visibility
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        // Find all password fields within the same form section as the clicked eye icon
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        pwFields.forEach(pwField => {
            // Toggle the type attribute between 'password' and 'text'
            if (pwField.type === "password") {
                pwField.type = "text"; // Show the password
                eyeIcon.classList.add("show"); // Add a class to indicate the password is visible
            } else {
                pwField.type = "password"; // Hide the password
                eyeIcon.classList.remove("show"); // Remove the class indicating the password is visible
            }
        });
    });
});

// Handle login form submission
loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const email = document.querySelector("#login-contact-email").value.trim();
    const password = document.querySelector(".password").value.trim();

    // Check if the email and password match any user in the users array
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login successful!");
        // Redirect to another page or update UI as necessary
    } else {
        alert("Invalid email or password");
    }
});

// Sign-up form submission event
signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from reloading the page

    const email = signupEmailInput.value.trim();
    const password = signupPasswordInput.value.trim();

    // Validate email format
    if (!validateEmail(email)) {
        signupEmailError.textContent = "Please enter a valid email.";
        return;
    } else {
        signupEmailError.textContent = "";
    }

    // Validate password length
    if (password.length < 6) {
        signupPasswordError.textContent = "Password must be at least 6 characters.";
        return;
    } else {
        signupPasswordError.textContent = "";
    }

    // Check if the email already exists in the users array
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        signupEmailError.textContent = "Email is already registered.";
        return;
    }

    // Add the new user to the users array
    const newUser = { email, password };
    users.push(newUser);

    // Display success message or redirect to the login page
    alert("Sign-up successful!");
    // Optionally, switch to the login form after successful sign-up
    forms.classList.toggle("show-signup");
});

// Function to validate email format
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Handle eye icon click to show/hide password for sign-up form
document.querySelector("#signup-eye").addEventListener("click", function () {
    const passwordField = signupPasswordInput;
    const eyeIcon = document.querySelector("#signup-eye");

    // Toggle password visibility
    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.add("show");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("show");
    }
});
