// 상품 추가 버튼
const $addBtn = document.getElementById('add')

// 상품 추가 버튼 클릭 이벤트
$addBtn.addEventListener("click", () => {
    const name = document.getElementById("productName").value
    const img = document.getElementById("productImg").value
    const price = document.getElementById("productPrice").value

    if ( !name || !img || !price ) {
        alert("상품명, 이미지URL, 가격을 모두 입력하세요")
        return
    }

    // 상품 리스트
    const $productList = document.getElementById("productList")

    // 카드 요소 생성
    const card = document.createElement("div")      // <div>
    card.className = "card"             // <div class="card">

    const imgTag = document.createElement("img")    // <img>
    imgTag.src = img                    // <img src="강아지.png" />

    const title = document.createElement("h3")      // <h3>
    title.textContent = name                    // <h3>상품명</h3>

    const priceTag = document.createElement("p")    // <p>
    priceTag.className = "price"
    priceTag.textContent = price + "원"
    // <p class="price">1000원</p>

    const deleteBtn = document.createElement("button")  // <button>
    deleteBtn.className = "delete-btn"  // <button class="delete-btn">
    deleteBtn.textContent = "삭제"
    // <button class="delete-btn">삭제</button>

    // 삭제 버튼 클릭시, 카드 제거
    deleteBtn.addEventListener("click", () => {
        $productList.removeChild(card)
    })

    // 카드 조립
    // img(이미지) , h3(상품명) , p(가격) , button(삭제)
    card.appendChild(imgTag)
    card.appendChild(title)
    card.appendChild(priceTag)
    card.appendChild(deleteBtn)

    // 상품 목록에 카드 추가
    $productList.appendChild(card)
})