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
    const accounts=JSON.parse(localStorage.getItem('accounts') || '[]');


    // const email_stored = localStorage.getItem('userEmail', email);
    // const pass_stored = localStorage.getItem('userPassword', password);  
    const account = accounts.find(acc => acc.email === email);
    
    if (!account){
        error.textContent='No Account Found. Please Sign Up First';
        error.style.display='block';
        return;
}
    if (account.password !== password){
        error.textContent="Invalid Password";
        error.style.display="block";
        return;
}
error.style.display='none';
window.location.href='home.html';   
}


function signup() {
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-pass').value.trim();
    const error = document.getElementById('signup-error');
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '' || email === '' || password === '') {
        error.textContent = ' Please fill in all fields!';
        error.style.display = 'block';
        return;
    }

    if (!emailFormat.test(email)) {
        error.textContent = ' Please enter a valid email like: you@example.com';
        error.style.display = 'block';
        return;
    }

    if (password.length < 7) {
        error.textContent = ' Password must be at least 7 characters!';
        error.style.display = 'block';
        return;
    }
    // Get existing accounts
    const accounts = JSON.parse(localStorage.getItem('accounts') || '[]');
 
    // Check if email already registered
    const exists = accounts.find(acc => acc.email === email);
    if (exists) {
        error.textContent = '⚠️ This email is already registered. Please log in!';
        error.style.display = 'block';
        return;
    }

    // Add new account to the list
    accounts.push({ name, email, password });
    localStorage.setItem('accounts', JSON.stringify(accounts));

    

    // Save to localStorage
    // localStorage.setItem('userEmail', email);
    // localStorage.setItem('userPassword', password);
    // localStorage.setItem('userName', name);
    alert('✅ Account created! Please log in.');
    showLogin();
}
