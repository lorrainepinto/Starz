//This function allows users to toggle the visibility of their password, enhancing usability without compromising security.

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var toggleIcon = document.getElementById('toggle-password');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.add('fa-eye-slash');
        toggleIcon.classList.remove('fa-eye');
    }
}

//Form Submission with Basic Validation

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var isValid = true;

    // Basic Validation
    if (!email || !password) {
        alert('Both email and password are required.');
        isValid = false;
    }

    // More validations can be added here

    if (isValid) {
        // Proceed with form submission via AJAX or other means
        console.log('Form is valid. Implement AJAX submission here.');
    }
});