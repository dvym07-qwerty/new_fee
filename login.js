function showSignup() {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('signup-box').style.display = 'flex';
}
function showLogin() {
    document.getElementById('signup-box').style.display = 'none';
    document.getElementById('login-box').style.display = 'flex';
}


function login() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('pass').value.trim();
    const error = document.getElementById('error');
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '' || password === '') {
        error.textContent = '⚠️ Please fill in both fields!';
        error.style.display = 'block';
        return;
    }

    if (!emailFormat.test(email)) {
        error.textContent = '⚠️ Please enter a valid email like: you@example.com';
        error.style.display = 'block';
        return;
    }

    if (password.length < 7) {
        error.textContent = '⚠️ Password must be at least 7 characters!';
        error.style.display = 'block';
        return;
    }
localStorage.setItem('userEmail', email);
localStorage.setItem('userPassword', password);    
window.location.href = 'home.html';

    
}
function signup() {
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-pass').value.trim();
    const error = document.getElementById('signup-error');
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '' || email === '' || password === '') {
        error.textContent = '⚠️ Please fill in all fields!';
        error.style.display = 'block';
        return;
    }

    if (!emailFormat.test(email)) {
        error.textContent = '⚠️ Please enter a valid email like: you@example.com';
        error.style.display = 'block';
        return;
    }

    if (password.length < 7) {
        error.textContent = '⚠️ Password must be at least 7 characters!';
        error.style.display = 'block';
        return;
    }

    // Save to localStorage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    localStorage.setItem('userName', name);

    alert('✅ Account created! Please log in.');
    showLogin();
}
