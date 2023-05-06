const users = JSON.parse(localStorage.getItem('users')) || [];
if(users.length == 0){
    alert('Please Signup and then login');
    window.location.href = '../signup/index.html';
}

const email = document.getElementById('email');
const password = document.getElementById('pass');

const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let currentEmail = email.value;
    let currentPassword = password.value;

    let currentUser;

    let isUserPresent = false;
    users.forEach((userObj) => {
        if(userObj.email === currentEmail && userObj.password === currentPassword){
            currentUser = userObj;
            isUserPresent = true;
            setUserToStorage(currentUser);
        }
    });

    // if user is not available in database
    if(!isUserPresent){
        alert('User not exist.');
        window.location.href = '../signup/index.html';
    }
});

function setUserToStorage(currentUser){
    currentUser.accessToken = generateAccessToken();
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    // after setting current user into data redirecting to the shop page
    window.location.href = '../shop/index.html';
}

function generateAccessToken() {
    // Generate a random 16-byte string
    const randomBytes = new Uint8Array(16);
    window.crypto.getRandomValues(randomBytes);
    const accessToken = btoa(String.fromCharCode.apply(null, randomBytes));
    return accessToken;
}

