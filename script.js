const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorDiv = document.getElementById('error-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    errorDiv.textContent = '';
    errorDiv.style.display = 'none';

    if (username.trim() === '') {
        showError('Username required');
        return;
    }


    if (password.trim() === '') {
        showError('Password required');

        return;
    }



    console.log('Form Submitted');
    alert('Login successful!');
    
    form.reset();
});

function showError(message) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}
usernameInput.addEventListener('focus', function() {
    errorDiv.style.display = 'none';
});

passwordInput.addEventListener('focus', function() {
    errorDiv.style.display = 'none';
});
