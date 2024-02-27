let cartItems = [];

function addToCart(productName, price) {
    const item = { productName, price };
    cartItems.push(item);

    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - $${item.price}`;
        cartItemsElement.appendChild(li);
    });
}

function checkout() {
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
    alert(`Total Amount: $${totalAmount}\nThank you for your purchase!`);
    cartItems = [];
    updateCart();
}
