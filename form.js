const form = document.querySelector("form");
const inputs = document.querySelectorAll('input');

const firstNameError = document.querySelector(".firstNameError");
const lastNameError = document.querySelector(".lastNameError");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passwordError");
const confirmPasswordError = document.querySelector(".confirmPasswordError");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const number = document.getElementById("number");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const patterns = {
    firstName: /^[A-Z][a-z]{1,30}(\s[A-Z](\.|[a-z]{1,30})?)*$/,
    lastName: /^[A-Z][a-z]{1,30}(\s[A-Z](\.|[a-z]{1,30})?)*$/,
    email: /^[a-zA-Z0-9\.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-z]{2,8}$/,
    number: /^\d{8}$/,
    password: /^[\w@-]{8,20}$/,
    confirmPassword: /^[\w@-]{8,20}$/,
}

function validate(field, regex){
    if(regex.test(field.value)){
        field.className = 'valid';
    }else{
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value])
        isValid();
    });
    
});

form.addEventListener("submit", (event) => {
        event.preventDefault();
        notEmpty();
});


function notEmpty(){
    if(firstName.value === ''){
        firstNameError.textContent = 'First name is required.';
    }
    if(firstName.className === 'invalid'){
        firstNameError.textContent = 'Please input your real name.';
    }

    if(lastName.value === ''){
        lastNameError.textContent = 'Last name is required.';
    }

    if(email.value === ''){
        emailError.textContent = 'Email address is required.';
    }
    if(email.className === 'invalid'){
        emailError.textContent = 'Entered value needs to be an email address.';
    }

    if(password.value === ''){
        passwordError.textContent = 'Password is required.';
    }
    if(password.className === 'invalid'){
        passwordError.textContent = 'Password is invalid.';
    }

    if(confirmPassword.value === ''){
        confirmPassword.textContent = 'You must confirm the password.';
    } 
    
}

function isValid(){
    if(firstName.className === 'valid'){
        firstNameError.textContent = '';
    }
    if(lastName.className === 'valid'){
        lastNameError.textContent = '';
    }
    if(email.className === 'valid'){
        emailError.textContent = '';
    }
    if(password.className === 'valid'){
        passwordError.textContent = '';
    }


    if(confirmPassword.value !== password.value){
        confirmPassword.className = 'invalid';
        confirmPasswordError.textContent = 'Passwords must match';
    }
    if(confirmPassword.value === password.value){
        if(confirmPassword.value !== ''){
            confirmPassword.className = 'valid';
        }
        confirmPasswordError.textContent = '';
    }
}