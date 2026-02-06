document.getElementById('addProductForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get values from inputs
    const product_name = document.getElementById("product_name").value.trim();
    const description  = document.getElementById("description").value.trim();
    const quantity     = document.getElementById("quantity").value.trim();
    const price        = document.getElementById("price").value.trim();

    // Validate inputs
    if (!product_name || !description || !quantity || !price) {
        alert("Please fill all fields");
        return;
    }

    try {
        const response = await fetch('/product/addProduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // send cookies for auth
            body: JSON.stringify({ product_name, description, quantity, price })
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.message || 'Failed to add product');

        if (!data.product) throw new Error('Product data missing from response');

        alert("Product added to the database successfully!");
        // Optional: reset form
        document.getElementById('addProductForm').reset();

    } catch (err) {
        console.error(err);
        alert(err.message);
    }
});
