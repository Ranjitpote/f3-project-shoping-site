const fName = document.getElementById('fname');
const lName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('pass');
const confirmPassword = document.getElementById('cpass');

const signForm = document.querySelector('form');

const users = JSON.parse(localStorage.getItem('users')) || [];

signForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = {
        firstName: fName.value,
        lastName: lName.value,
        email: email.value,
        password: password.value,
    }

    // validations to the signup form
    if(user.password != confirmPassword.value){
        alert('Please enter same password and confirm password.');
        return;
    }

    // If user already exist or not
    let isUserPresent = false;
    users.forEach((userObj) => {
        if(userObj.email === user.email){
            alert('User already exists. Please go to the login page.');
            isUserPresent = true;
            return;
        }
    });

    if(!isUserPresent) {
        users.push(user);
    }

    localStorage.setItem('users', JSON.stringify(users));

    window.location.href = '../login/index.html';
});