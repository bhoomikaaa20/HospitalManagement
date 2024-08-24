const products = [
    {
        id: 0,
        image: 'cart_imgs/insulin.jpg',
        title: 'Insulin',
        price: 200,
    },
    {
        id: 1,
        image: 'cart_imgs/syrup.jpg',
        title: 'Cough Syrup',
        price: 50,
    },
    {
        id: 2,
        image: 'cart_imgs/dolo.jpg',
        title: 'Dolo 650',
        price: 300,
    },
    {
        id: 3,
        image: 'cart_imgs/moov.jpg',
        title: 'Moov',
        price: 200,
    },
];

let cart = [];

// Function to add product to cart
function addProductToCart(index) {
    const selectedProduct = products[index];
    cart.push(selectedProduct);
    updateCartUI();
}

// Function to remove item from cart
function removeProductFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Function to update the cart sidebar
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cartitem');
    const totalPriceElement = document.getElementById('total');
    const countElement = document.getElementById('count');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = 'Your cart is empty';
        totalPriceElement.textContent = '$0.00';
    } else {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;
        cart.forEach((product, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <div class="item-details">
                    <h4>${product.title}</h4>
                    <p>$${product.price.toFixed(2)}</p>
                </div>
                <i class="delete-item fas fa-trash-alt" onclick="removeProductFromCart(${index})"></i>
            `;
            cartItemsContainer.appendChild(cartItem);
            totalPrice += product.price;
        });
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    countElement.textContent = cart.length;
}

// Function to display products
function displayProducts() {
    const productContainer = document.getElementById('product-container');

    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('box');
        productDiv.innerHTML = `
            <div class="img-box">
                <img class="images" src="${product.image}" alt="${product.title}">
            </div>
            <div class="bottom">
                <p>${product.title}</p>
                <p>$${product.price}</p>
                <button onclick="addProductToCart(${index})">Add to Cart</button>
            </div>
        `;
        productContainer.appendChild(productDiv);
    });
}

// Call the function to display products when the page loads
window.onload = function() {
    displayProducts();
};
