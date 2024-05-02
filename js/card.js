const cartIcon = document.getElementById("cartIcon");
const cartTab = document.getElementById("cartTab");
const closeBtn = document.querySelector(".close");
const addCartBtns = document.querySelectorAll(".addcart");

function toggleCartTab() {
    document.body.classList.toggle("showcart");
}

cartIcon.addEventListener("click", toggleCartTab);


closeBtn.addEventListener("click", toggleCartTab);

closeBtn.addEventListener("click", toggleCartTab);

function addItemToCart(item) {

    const name = item.querySelector("h2").textContent;
    const price = item.querySelector(".price").textContent;

    const newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `
        <div class="image">
            <img src="${item.querySelector("img").src}" alt="${name}">
        </div>
        <div class="name">${name}</div>
        <div class="totalprice">${price}</div>
        <div class="quantity">
            <span class="minus"><</span>
            <span>1</span>
            <span class="plus">></span>
        </div>
    `;

    const listcart = document.querySelector(".listcart");
    listcart.appendChild(newItem);

    const cartCounter = document.querySelector(".icon-cart span");
    cartCounter.textContent = parseInt(cartCounter.textContent) + 1;
}

addCartBtns.forEach((button) => {
    button.addEventListener("click", function () {
        addItemToCart(button.closest(".item"));
    });
});

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("minus")) {
        const button = event.target;
        const quantitySpan = button.nextElementSibling;
        let quantity = parseInt(quantitySpan.textContent);
        if (quantity > 0) {
            quantity--;
            quantitySpan.textContent = quantity;
            if (quantity === 0) {
                const listItem = button.closest(".item");
                listItem.remove();

                const cartCounter = document.querySelector(".icon-cart span");
                cartCounter.textContent = parseInt(cartCounter.textContent) - 1;

                if (cartCounter.textContent === "0") {
                    toggleCartTab();
                }
            }
        }
    }
});

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("plus")) {
        const button = event.target;
        const quantitySpan = button.previousElementSibling;
        let quantity = parseInt(quantitySpan.textContent);
        quantity++;
        quantitySpan.textContent = quantity;
    }
});  