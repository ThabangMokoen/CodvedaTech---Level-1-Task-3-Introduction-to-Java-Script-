// Elements
const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginCard = document.getElementById("loginCard");
const dashboard = document.getElementById("dashboard");
const logoutBtn = document.getElementById("logoutBtn");
const userDisplay = document.getElementById("userDisplay");

// Modal
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");


// ========== FORM VALIDATION ==========
loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let valid = true;

    if (username.value.trim() === "") {
        showError(username, "Username required");
        valid = false;
    } else {
        showSuccess(username);
    }

    if (password.value.trim().length < 6) {
        showError(password, "Minimum 6 characters");
        valid = false;
    } else {
        showSuccess(password);
    }

    if (valid) {
        userDisplay.textContent = username.value.trim();
        loginCard.classList.add("hidden");
        dashboard.classList.remove("hidden");
    }
});

function showError(input, message) {
    const small = input.nextElementSibling;
    small.textContent = message;
    input.classList.add("error-border");
    input.classList.remove("success-border");
}

function showSuccess(input) {
    const small = input.nextElementSibling;
    small.textContent = "";
    input.classList.remove("error-border");
    input.classList.add("success-border");
}

// ========== LOGOUT ==========
logoutBtn.addEventListener("click", function() {
    dashboard.classList.add("hidden");
    loginCard.classList.remove("hidden");
    loginForm.reset();
    username.classList.remove("success-border");
    password.classList.remove("success-border");
});

// Dropdown
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

// Toggle dropdown menu
dropdownBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden"); // show/hide menu
    // Update button text without removing HTML structure
    if (!dropdownMenu.classList.contains("hidden")) {
        dropdownBtn.innerHTML = 'Close Menu ▲';
    } else {
        dropdownBtn.innerHTML = 'Select Role ▼';
    }
});

// Select role from dropdown
dropdownMenu.querySelectorAll("p").forEach(option => {
    option.addEventListener("click", function() {
        dropdownBtn.innerHTML = this.textContent + " ▼"; // keep arrow
        dropdownMenu.classList.add("hidden");
    });
});

