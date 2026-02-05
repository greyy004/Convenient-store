document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    try {
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json(); // parse JSON first

        if (!response.ok) throw new Error(data.message || 'Login failed');

        console.log('Login successful', data);
        // redirect or do something with the token/data
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
});
