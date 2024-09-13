document.addEventListener('DomContentLoaded', () => {
    renderitems();
});

function renderitems() {
    const cartItems = getItems();
    // const cartItems_el = document.querySelector(".cart-items");

    // LocalStorage
    // const cartItems = JSON.parse(localStorage.getItem("cart-items"))
    const cartItemsEl = document.querySelector('.food-list')

    // Clear DOM
    // cartItems_el.innerHTML = "";

    cartItems.forEach((items) => {
        const cartContainer = document.createElement('div')
        cartContainer.classList.add('food');

        const cartItemEl = `
        <div class="image">
            <img src="${items?.image}">
        </div>

        <div class="text">
            <h2>${items?.name}</h2>
        </div>

        <div class="amount">
            <h2>${items?.price}</h2>
        </div>

        <div class="amount-plus">
            <i class="fas fa-minus" id="substract"></i>
            <h3>${items?.quantity}</h3>
            <i class="fas fa-plus" id="add"></i>
        </div>

        <i class="fas fa-xmark " id="deleteBtn"></i> `;

        const increamentBtn = cartContainer.querySelector('#add');
        const decreamentBtn = cartContainer.querySelector('#substract');
        const deleteBtn = cartContainer.querySelector("#deletBtn")

        increamentBtn.addEventListener('click', handleIncreament(item));
        decreamentBtn.addEventListener('click', handleDecreament(item));
        deleteBtn.addEventListener('click', handleDelete(item));

        cartItemEl.append(divEl);

        cartContainer.innerHTML = cartItemEl;
        cartItemsEl.prepend(cartContainer);
    });

}


// Item Increament
function handleIncreament(item) {
    const cartItems = getItems();
    const newCartItems = cartItems.map((cart_item) => {
        if (cart_item.id == item.id) {
            return { ...cart_item, quantity: cart_item.quantity + 1 }
        } else {
            return cart_item;
        }
    });
    localStorage.setItem("cart-items", JSON.stringify(newCartItems));
    renderitems();
}

// Item Decreament
function handleDecreament(item) {
    const cart_items = getItems();
    const newCartItems = cart_items.map((cart_item) => {
        if (cart_item.id == item.id && cart_item.quantity > 1) {
            return { ...cart_item, quantity: cart_item.quantity - 1 }
        } else {
            return cart_item;
        }
    });
    localStorage.setItem("cart-items", JSON.stringify(newCartItems));
    renderitems();
}

function handleDelete(item) {
    const cart_items = getItems();
    localStorage.setItem("cart-items", JSON.stringify(newCartItems));
    renderitems();
}


// To getItem
function getItems() {
    const cart_items = JSON.parse(localStorage.getItem("cart-items"));
    return cart_items;
}

// To Total
function getTotal(items) {
    items.reduce((total, item) => {
        const newTotal = total + items.quantity * item.price;
        console.log(newTotal);
    }, 0);
}