
document.addEventListener("DOMContentLoaded", () => {

    const movielist = document.getElementById('movielist')
    const list = document.createElement('p')
    const div = document.createElement('div')

    list.textContent = "라라 랜드"

    div.appendChild(list)
    movielist.appendChild(div)

})