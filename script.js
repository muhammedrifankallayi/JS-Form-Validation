const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorDiv = document.getElementById('error-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    errorDiv.textContent = '';
    errorDiv.classList.remove('show');

    if (username.trim() === '') {
        showError('Username required');
        return;
    }


    if (password.trim() === '') {
        showError('Password required');

        return;
    }

    if (username.trim()  === ''|| password.trim() === '') {
        showError('Please fill in all fields!!!');
        return;
    }

    console.log('Form Submitted');
    alert('Login successful!');
    
    form.reset();
});

function showError(message) {
    errorDiv.textContent = message
    errorDiv.classList.add('show');
}
usernameInput.addEventListener('focus', function() {
    errorDiv.classList.remove('show');
});

passwordInput.addEventListener('focus', function() {
    errorDiv.classList.remove('show');
});
