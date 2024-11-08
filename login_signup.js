let users = [
    { email: "testuser1@example.com", password: "password1" },
    { email: "testuser2@example.com", password: "password2" }
];

let currentUser = null;
let carts = {}; // Store cart items for each user

// Sample products
let products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 }
];

document.getElementById('showSignup').onclick = () => {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.remove('hidden');
};

document.getElementById('showLogin').onclick = () => {
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
};

document.getElementById('submitLogin').onclick = () => {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        if (!carts[email]) carts[email] = []; // Initialize empty cart for the user
        alert('Login successful! Redirecting to the store...');
        window.location.href = 'index.html'; // Redirect to the main e-commerce page
    } else {
        alert('Invalid credentials');
    }
};

document.getElementById('submitSignup').onclick = () => {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (users.find(u => u.email === email)) {
        alert('User already exists');
    } else {
        users.push({ email, password });
        carts[email] = []; // Initialize an empty cart for new user
        alert('Signup successful! You can now log in.');
        document.getElementById('signupForm').classList.add('hidden');
        document.getElementById('loginForm').classList.remove('hidden');
    }
};

// Function to add product to cart
function addToCart(productId) {
    if (!currentUser) {
        alert("Please login to add items to the cart.");
        return;
    }

    const email = currentUser.email;
    const product = products.find(p => p.id === productId);

    if (product) {
        carts[email].push(product);
        alert(`${product.name} added to your cart.`);
    }
}

// Function to view cart items
function viewCart() {
    if (!currentUser) {
        alert("Please login to view the cart.");
        return;
    }

    const email = currentUser.email;
    const userCart = carts[email];

    if (userCart.length > 0) {
        let cartItems = "Your Cart:\n";
        userCart.forEach((item, index) => {
            cartItems += `${index + 1}. ${item.name} - $${item.price}\n`;
        });
        alert(cartItems);
    } else {
        alert("Your cart is empty.");
    }
}

// Function to remove a product from the cart by index
function removeFromCart(index) {
    if (!currentUser) {
        alert("Please login to modify the cart.");
        return;
    }

    const email = currentUser.email;
    const userCart = carts[email];

    if (userCart && userCart[index]) {
        const removedItem = userCart.splice(index, 1);
        alert(`${removedItem[0].name} removed from your cart.`);
    } else {
        alert("Invalid item index.");
    }
}

// Example usage for adding products to cart
// addToCart(1); // Adds Product 1 to the cart
// viewCart();   // Views current user's cart
// removeFromCart(0); // Removes the first item in the cart
