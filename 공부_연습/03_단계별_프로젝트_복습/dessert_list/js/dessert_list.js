document.addEventListener("DOMContentLoaded", () => {

    const dessertInput = document.getElementById('dessertInput');
    const addBtn = document.getElementById('addBtn');
    const dessertList = document.getElementById('dessertList');

    addBtn.addEventListener("click", () => {

        const dessertName = dessertInput.value
        const dessertItem = document.createElement('li')
        
        dessertItem.textContent = (dessertName);
        dessertList.appendChild(dessertItem)
    })

})