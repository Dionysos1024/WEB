
document.addEventListener("DOMContentLoaded", () => {

    const wantList = document.getElementById('wantList')
    const watchedList = document.getElementById('watchedList')
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
        const button = document.createElement('button')

        div.className = 'movie-card'
        list.textContent = Element.title
        img.src = Element.image
        button.textContent = "보고 싶어요"

        div.appendChild(img)
        div.appendChild(list)
        movielist.appendChild(div)
        div.appendChild(button)

        button.addEventListener("click", () => {

        const li = document.createElement('li')
        const Btn = document.createElement('button')
        const deletBtn = document.createElement('button')

        li.textContent = Element.title
        Btn.textContent = "감상 완료"
        deletBtn.textContent = "삭제"

        wantList.appendChild(li)
        li.appendChild(Btn)
        li.appendChild(deletBtn)

        deletBtn.addEventListener("click", () => {

            li.remove()
            
            })
        })
    });
    
})