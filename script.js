const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartCount = document.getElementById("cart-count")
const cartItems = document.getElementById("cart-items")
const cartModal = document.getElementById("modal-cart")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const addressInput = document.getElementById("address")
const addressErorr = document.getElementById("address-error")

cartBtn.addEventListener("click", ()=>{
    cartModal.style.display = "flex"
})

cartModal.addEventListener("click", (event)=>{
    if(event.target == cartModal){
        cartModal.style.display = "none"
    }
    console.log(event)
})

closeModalBtn.addEventListener("click", ()=>{
    cartModal.style.display = "none"
})
