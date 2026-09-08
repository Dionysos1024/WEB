// 세로 메뉴 슬라이드 100%
// 페이드 이미지 슬라이드
// 탭 기능
// 모달 팝업 창

/* js : 21:28 ~ 21:40 / 12분 소요 */

$(function() {

    $(".main, .sub").on("mouseover", function() {
        $(".sub").stop().slideDown()
    })
    $(".main, .sub").on("mouseout", function() {
        $(".sub").stop().slideUp()
    })

    let index = 0
    const speed = 500
    const time = 2000
    const $slide = $(".slide")
    const count = $slide.length
    $slide.not(":first").hide()

    setInterval(() => {
        index = (index + 1) % count
        $slide.fadeOut(speed) // OUT 대문자로 써서 안돼서 찾는데 30초 정도 소요됨
        $slide.eq(index).fadeIn(speed)
    }, time);

    $(".menu-item").on("click", function() {
        $(".content-item").toggle()
        $(".menu-item").toggleClass("active")
    })

    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
})