
document.addEventListener("DOMContentLoaded", () => {

    const cartItems = document.getElementById('cartItems');
    const addBtns = document.querySelectorAll('.btn');

    addBtns.forEach((addBtn) => {

       addBtn.addEventListener("click", () => {

        const productBox = addBtn.parentElement
        const productName = productBox.querySelector('p').textContent

        console.log(productName);
        

    })


    })
    

})