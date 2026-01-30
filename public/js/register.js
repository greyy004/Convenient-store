document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const terms = document.getElementById('terms').checked;

    // --- Validation ---
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    if (!terms) {
        alert('You must agree to the Terms & Conditions');
        return;
    }

    try {
        const response = await fetch('/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: name, email, password, confirmPassword })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Registration failed');

        alert('Registration successful! Please log in.');
        window.location.href = '/html/login.html';

    } catch (err) {
        console.error(err);
        alert(err.message);
    }
});
