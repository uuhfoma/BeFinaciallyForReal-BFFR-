document.addEventListener('DOMContentLoaded', function () {
    loadUserData();
});

function continueToApp() {
    const usernameInput = document.getElementById('username-input');
    const emailInput = document.getElementById('email-input');

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();

    if (!username || !email) {
        alert("Please enter your name and email to continue.");
        return;
    }

    const user = {
        username,
        email,
        savingsGoal: 0,
        savingsDuration: 0,
        savingsFrequency: '',
        savingsLog: [],
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert(`Welcome, ${username}! You can now use the app.`);
    loadUserData();
}

function trackSavings() {
    const savingsAmountInput = document.getElementById('savings-amount');
    const frequencySelect = document.getElementById('savings-frequency');

    const savingsAmount = parseFloat(savingsAmountInput.value);
    const frequency = frequencySelect.value;

    if (isNaN(savingsAmount) || savingsAmount <= 0) {
        alert("Please enter a valid savings amount.");
        return;
    }

    const user = JSON.parse(localStorage.getItem('user'));

    const currentDate = new Date().toLocaleDateString();

    // Track savings based on frequency
    if (frequency === 'daily') {
        user.savingsLog.push({ date: currentDate, amount: savingsAmount });
    } else if (frequency === 'weekly') {
        user.savingsLog.push({ date: currentDate, amount: savingsAmount * 7 });
    }

    localStorage.setItem('user', JSON.stringify(user));
    loadSavingsLog();
    alert(`Savings of $${savingsAmount.toFixed(2)} tracked successfully!`);
}

function loadSavingsLog() {
    const user = JSON.parse(localStorage.getItem('user'));
    const savingsLogContainer = document.getElementById('savings-log');

    savingsLogContainer.innerHTML = "<strong>Savings Log:</strong>";

    user.savingsLog.forEach(entry => {
        savingsLogContainer.innerHTML += `<p>${entry.date}: $${entry.amount.toFixed(2)}</p>`;
    });
}

function loadUserData() {
    const userSection = document.getElementById('user-section');
    const appSection = document.getElementById('app-section');
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        userSection.style.display = 'none'; // Hide user section if an account exists
        appSection.style.display = 'block'; // Show app section

        // Populate savings section with user data
        document.getElementById('savings-amount').value = ''; // Clear input field
        document.getElementById('savings-frequency').value = 'daily'; // Reset frequency to default

        loadSavingsLog(); // Load savings log based on existing data
    } else {
        userSection.style.display = 'block'; // Show user section if no account exists
        appSection.style.display = 'none'; // Hide app section
    }
}

function loadSavingsLog() {
    const user = JSON.parse(localStorage.getItem('user'));
    const savingsLogContainer = document.getElementById('savings-log');

    savingsLogContainer.innerHTML = "<strong>Savings Log:</strong>";

    user.savingsLog.forEach(entry => {
        savingsLogContainer.innerHTML += `<p>${entry.date}: $${entry.amount.toFixed(2)}</p>`;
    });
}

// Additional functions can be added based on your app's requirements

document.addEventListener('DOMContentLoaded', function () {
    loadUserData();
});

function continueToApp() {
    const usernameInput = document.getElementById('username-input');
    const emailInput = document.getElementById('email-input');

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();

    if (!username || !email) {
        alert("Please enter your name and email to continue.");
        return;
    }

    const user = {
        username,
        email,
        savingsGoal: 0,
        savingsDuration: 0,
        savingsFrequency: '',
        savingsLog: [],
    };

    localStorage.setItem(`user_${email}`, JSON.stringify(user));
    alert(`Welcome, ${username}! You can now use the app.`);
    loadUserData();
}

function trackSavings() {
    const savingsAmountInput = document.getElementById('savings-amount');
    const frequencySelect = document.getElementById('savings-frequency');

    const savingsAmount = parseFloat(savingsAmountInput.value);
    const frequency = frequencySelect.value;

    if (isNaN(savingsAmount) || savingsAmount <= 0) {
        alert("Please enter a valid savings amount.");
        return;
    }

    const user = getCurrentUser();

    const currentDate = new Date().toLocaleDateString();

    if (frequency === 'daily') {
        user.savingsLog.push({ date: currentDate, amount: savingsAmount });
    } else if (frequency === 'weekly') {
        user.savingsLog.push({ date: currentDate, amount: savingsAmount * 7 });
    }

    localStorage.setItem(`user_${user.email}`, JSON.stringify(user));
    loadSavingsLog();
    alert(`Savings of $${savingsAmount.toFixed(2)} tracked successfully!`);
}

function loadUserData() {
    const userSection = document.getElementById('user-section');
    const appSection = document.getElementById('app-section');
    const user = getCurrentUser();

    if (user) {
        userSection.style.display = 'none';
        appSection.style.display = 'block';

        document.getElementById('savings-amount').value = '';
        document.getElementById('savings-frequency').value = 'daily';

        loadSavingsLog();
    } else {
        userSection.style.display = 'block';
        appSection.style.display = 'none';
    }
}

function getCurrentUser() {
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value.trim();

    return JSON.parse(localStorage.getItem(`user_${email}`));
}

function loadSavingsLog() {
    const user = getCurrentUser();
    const savingsLogContainer = document.getElementById('savings-log');

    savingsLogContainer.innerHTML = "<strong>Savings Log:</strong>";

    user.savingsLog.forEach(entry => {
        savingsLogContainer.innerHTML += `<p>${entry.date}: $${entry.amount.toFixed(2)}</p>`;
    });
}

// ... (previous JavaScript code)
