const openEl = document.getElementById("openEl");
const closeEl = document.getElementById("closeEl");
const navEl = document.querySelector("nav")

openEl.addEventListener("click", () => {
    navEl.style.display = "flex";
    openEl.style.display = "none";
    closeEl.style.display = "flex";
})

closeEl.addEventListener("click", () => {
    navEl.style.display = "none";
    openEl.style.display = "flex";
    closeEl.style.display = "none";
});

//getting tag elements
const orderBtnEls = document.querySelectorAll("#order-btn");
const cartItems = [];


orderBtnEls.forEach((orderBtn) => {
    orderBtn.addEventListener("click", () => {
        const parentEl = orderBtn.parentElement;
        const item = {
            image: parentEl.querySelector("img").src,
            price: parentEl.querySelector("#price").innerHTML.replace(/[#,]/g,''),
            name: parentEl.querySelector("#name").innerHTML,
            quantity: 1,
            id: Math.floor(Date.now() + Math.random()),

        };
        console.log(cartItems);
        
        addItemTocart(item)
    });
});

function addItemTocart(item) {
    const cartItems = JSON.parse(localStorage.getItem("cart-items")) || [];
    cartItems.unshift(item);

    localStorage.getItem("cart-items", JSON.stringify(cartItems))
    // console.log(cartItems);
};