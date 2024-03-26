//Fake users will be replaced by databse later
const users = ["shibani.pinto@version1.com","thayna@version1.com","ziyu@version1.com","anoop@version1.com"];
const passwords = ["Shibani1!","Thayna1!","Ziyu1!","Anoop1!"];

//function to validate the sign in
function validate_form(){
    let user_email = document.getElementById("email");
    let user_password = document.getElementById("password");

    let user_index = users.indexOf(user_email.value);
    if (user_index<0){
        window.alert("User does not exist, Please Sign up instead.");
    }
    else{
        if (user_password===""){
            window.alert("Please enter a passsword")
        }
        else if (passwords[user_index]===user_password.value){
            // This will send you to the home page or new page
            window.alert("Congrats on logging in");
        }
        else{
            window.alert("Incorrect Password, try again!");
        }
    }
}

//function to toggle passowrd visiblity
function togglePasswordVisibility(){
    const passwordField = document.getElementById("password");
    const togglePassword = document.getElementById("toggle-password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
      } else {
        passwordField.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
      }
}