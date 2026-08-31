// 개별 메뉴 슬라이드
// 페이드 이미지 슬라이드
// 레이어 팝업창

/* 09월 01일 / 시작 : 06시 36분 / 종료 : 06시 46분 */
/* 확인 01분 소요 / 틀린 부분 0개 */

$(function() {

    $(".main-menu li").on("mouseover", function() {
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function() {
        $(this).find(".sub-menu").stop().slideUp()
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


    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
})