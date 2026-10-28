
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

    movies.forEach(Element => {
        const list = document.createElement('p')
        const div = document.createElement('div')
        const img = document.createElement('img')

        div.className = 'movie-card'
        list.textContent = Element.title
        img.src = Element.image

        div.appendChild(img)
        div.appendChild(list)
        movielist.appendChild(div)
    });
    
})