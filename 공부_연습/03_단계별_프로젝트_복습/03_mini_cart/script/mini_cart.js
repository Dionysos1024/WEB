
document.addEventListener("DOMContentLoaded", () => {

    const cartItems = document.getElementById('cartItems');
    const addBtns = document.querySelectorAll('.btn');

    addBtns.forEach((addBtn) => {

       addBtn.addEventListener("click", () => {

            const productBox = addBtn.parentElement
            const productName = productBox.querySelector('p').textContent
            const cartItem = document.createElement('p')
            const emptyMessage = document.getElementById('emptyMessage')
            const productPrice = productBox.querySelector('span').textContent
            const productBtn = document.createElement('button')

            cartItem.textContent = productName + " " + productPrice
            productBtn.textContent = '삭제'
            cartItem.appendChild(productBtn)
            cartItems.appendChild(cartItem)
            emptyMessage.style.display = "none"

            productBtn.addEventListener("click", () => {

                cartItem.remove()

                if ( cartItems.children.length === 0 ) {

                    ( emptyMessage.style.display = "" )
                }
            })
        })
    })
})