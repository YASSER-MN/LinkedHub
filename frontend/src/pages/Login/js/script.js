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