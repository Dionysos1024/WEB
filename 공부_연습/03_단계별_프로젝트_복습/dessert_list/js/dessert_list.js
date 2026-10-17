document.addEventListener("DOMContentLoaded", () => {

    const dessertInput = document.getElementById('dessertInput');
    const addBtn = document.getElementById('addBtn');
    const dessertList = document.getElementById('dessertList');

    addBtn.addEventListener("click", () => {

        const dessertName = dessertInput.value
        
        if ( dessertName !== "" ) {
            const dessertItem = document.createElement('li')
            const dessertBtn = document.createElement('button')
        
            dessertItem.textContent = (dessertName);
            dessertItem.appendChild(dessertBtn)
            dessertList.appendChild(dessertItem)
            dessertInput.value = ""
            dessertInput.focus()
            dessertBtn.textContent = '삭제'

            dessertBtn.addEventListener("click", () => {

                dessertItem.remove()

            })
        }
    })


        dessertInput.addEventListener("keydown", (event) => {

        if ( event.key === "Enter" ) {
            addBtn.click()
        }
    })

})