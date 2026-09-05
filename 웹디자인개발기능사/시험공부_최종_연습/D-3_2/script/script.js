// 가로 100% 메뉴
// 페이드 이미지 슬라이드
// 탭 기능
// 모달 팝업창

/* 09월05일 시작 : 22시13분 / 종료 : 22시 25분 */

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
        $slide.fadeOut(speed)
        $slide.eq(index).fadeIn(speed)
    }, time);


    $(".menu-item").on("click", function() {
        $(".content-item").toggle()
        $(".menu-item").toggleClass()
    })


    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })

})