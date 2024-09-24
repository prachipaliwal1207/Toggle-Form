const signupBtn = document.querySelector(".signupBtn");
const RegisterBtn = document.querySelector(".RegisterBtn");
const moveSignup = document.querySelector(".moveSignup");
const signup = document.querySelector(".signup");
const register = document.querySelector(".register");

RegisterBtn.addEventListener("click", () => {
    moveSignup.classList.add("moveRight");
    register.classList.add("registerForm");
    signup.classList.remove("signupForm");
    moveSignup.innerHTML = 'Login';
});

signupBtn.addEventListener("click", () => {
    moveSignup.classList.remove("moveRight");
    register.classList.remove("registerForm");
    signup.classList.add("signupForm");
    moveSignup.innerHTML = 'Signup';
});

function validateSignupForm() {
    const fname = document.forms["toggleForm"]["fname"].value.trim();
    const email = document.forms["toggleForm"]["email"].value.trim();
    const phoneNumber = document.forms["toggleForm"]["phoneNumber"].value.trim();

    let isValid = true;

    if (fname === "") {
        document.getElementById('nameValidationMsg').textContent = "Full Name must be filled out.";
        isValid = false;
    } else {
        document.getElementById('nameValidationMsg').textContent = "";
    }

    if (email === "") {
        document.getElementById('emailValidationMsg').textContent = "Email must be filled out.";
        isValid = false;
    } else {
        document.getElementById('emailValidationMsg').textContent = "";
    }

    if (!validatePhoneNumber(phoneNumber)) {
        isValid = false;
    }

    return isValid;
}

function validateLoginForm() {
    const email = document.forms["toggleForm"]["email"].value.trim();
    const password = document.forms["toggleForm"]["pswd"].value.trim();

    let isValid = true;

    if (email === "") {
        document.getElementById('loginEmailValidationMsg').textContent = "Email must be filled out.";
        isValid = false;
    } else {
        document.getElementById('loginEmailValidationMsg').textContent = "";
    }

    if (password === "") {
        document.getElementById('passwordValidationMsg').textContent = "Password must be filled out.";
        isValid = false;
    } else {
        document.getElementById('passwordValidationMsg').textContent = "";
    }

    return isValid;
}

function validatePhoneNumber(phoneNumber) {
    const pattern = /^\d{10}$/; // Validates a 10-digit phone number
    const isValid = pattern.test(phoneNumber);
    document.getElementById('phoneValidationMsg').textContent = isValid ? '' : 'Please enter a valid 10-digit phone number.';
    return isValid;
}

document.querySelector("input[name='phoneNumber']").addEventListener('input', function() {
    validatePhoneNumber(this.value);
});

function showPassword() {
    const passwordField = document.querySelector("input[name='pswd']");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}