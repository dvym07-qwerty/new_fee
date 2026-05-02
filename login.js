function login(){
    let email=document.getElementById("email").value.trim()
    let password=document.getElementById("pass").value.trim()
    // let  error = document.getElementById('error');
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email=== '' || pass === ''){
        document.getElementById('error').style.display = 'block';
        return;
}
    if (!emailFormat.test(email)) {
    error.textContent = '⚠️ Please enter a valid email like: you@example.com';
    error.style.display = 'block';
    return;
    
}
localStorage.setItem('userEmail', email);
localStorage.setItem('userPassword', password);

window.location.href = 'home.html'; 
}
