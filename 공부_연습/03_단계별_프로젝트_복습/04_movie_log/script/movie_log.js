
document.addEventListener("DOMContentLoaded", () => {

    const movielist = document.getElementById('movielist')
    const movies = [
    { title: '라라 랜드',
        image: 'https://placehold.co/180x240?text=La+La+Land' },
    { title: '기생충',
        image: 'https://placehold.co/180x240?text=Parasite' },
    { title: '인사이드 아웃',
        image: 'https://placehold.co/180x240?text=Inside+Out' }
    ]
    const list = document.createElement('p')
    const div = document.createElement('div')
    const img = document.createElement('img')

    div.className = 'movie-card'
    list.textContent = "라라 랜드"
    img.src = 'https://placehold.co/180x240?text=La+La+Land'
    img.alt = '라라 랜드 포스터'

    div.appendChild(img)
    div.appendChild(list)
    movielist.appendChild(div)

})