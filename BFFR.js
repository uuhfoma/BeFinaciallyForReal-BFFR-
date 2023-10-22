document.addEventListener('DOMContentLoaded', function () {
    loadUserData();
});

function continueToApp() {
    const usernameInput = document.getElementById('username-input');
    const passwordInput = document.getElementById('password-input');

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
        alert("Please enter your username and password to continue.");
        return false; // Prevent form submission
    }

    const user = {
        username,
        password,
        savingsGoal: 0,
        savingsDuration: 0,
        savingsFrequency: '',
        savingsLog: [],
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert(`Welcome, ${username}! You can now use the app.`);
    loadUserData();
    return false; // Prevent form submission
}

function showRegisterForm() {
    document.getElementById('login-wrapper').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function register() {
    document.getElementById('login-wrapper').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    return false; // Prevent form submission for demo purposes
}

function loadUserData() {
    const userSection = document.getElementById('login-wrapper');
    const appSection = document.getElementById('register-form');
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        userSection.style.display = 'none';
        appSection.style.display = 'block';
    } else {
        userSection.style.display = 'block';
        appSection.style.display = 'none';
    }
}

