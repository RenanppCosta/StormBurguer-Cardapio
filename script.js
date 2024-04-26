const menu = document.getElementById("menu")
const menuDrinks = document.getElementById("menu-drinks")
const cartBtn = document.getElementById("cart-btn")
const cartCount = document.getElementById("cart-count")
const cartItems = document.getElementById("cart-items")
const cartModal = document.getElementById("modal-cart")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const addressInput = document.getElementById("address")
const addressErorr = document.getElementById("address-error")

let cart = []

cartBtn.addEventListener("click", ()=>{
    updateCardModal()
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

menu.addEventListener("click", (event)=>{
    console.log(event.target)

    let parentButton = event.target.closest(".add-to-cart-btn")

    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
        
        addToCart(name, price)
    }
})

menuDrinks.addEventListener("click", (event)=>{
    console.log(event.target)

    let parentButton = event.target.closest(".add-to-cart-btn")

    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
        
        addToCart(name, price)
    }
})

function addToCart(name, price){
    const existingTime = cart.find(item => item.name == name)

    if(existingTime){
        existingTime.quantity++
    }else{
        cart.push({
            name,
            price,
            quantity: 1
        })
    }

    updateCardModal()
    
}

function updateCardModal(){
    cartItems.innerHTML = ""
    let total = 0

    cart.forEach(item =>{
        const cartItemElement = document.createElement("div")
        cartItemElement.classList.add("flex", "justify-between", "mb-3", "flex-col")

        cartItemElement.innerHTML = `
            <div class="flex justify-between items-center">
                <div class="flex flex-col gap-3">
                    <p class="font-bold">${item.name}</p>
                    <p>(Quantidade: ${item.quantity})</p>
                    <p>R$ ${item.price.toFixed(2)}</p>
                </div>

                <div>
                    <button class="remove-btn" data-name="${item.name}">
                        Remover
                    </button>
                </div>
            </div>
        `

        total += item.price * item.quantity

        cartItems.appendChild(cartItemElement)
    })

    cartTotal.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
    
    cartCount.innerHTML = cart.length
}

cartItems.addEventListener("click", (event)=>{
    if(event.target.classList.contains("remove-btn")){
        const name = event.target.getAttribute("data-name")
        removeItemCart(name)
    }
    
})

function removeItemCart(name){
    const index = cart.findIndex(item => item.name == name)

    if(index != -1){
        const item = cart[index]

        if(item.quantity > 1){
            item.quantity -= 1
            updateCardModal()
            return
        }else{
            cart.splice(index, 1)
            updateCardModal()
        }
    }
}