// 100% 메뉴 슬라이드
// 세로 이미지 슬라이드
// 레이어 팝업창

/* 09월 02일 시작 : 12시 16분 / 종료 : 12시 25분 */
/* 확인 / 동작 메뉴 슬라이드 만 안먹힘, css 메뉴 손보기만 잘 돼면 끝날듯(?) */

$(function() {

    $(".main, .sub").on("mouseenter", function() {
        $(".sub").stop().slideDown()
    })
    $(".main, .sub").on("mouselengave", function() {
        $(".sub").stop().slideUp()
    })


    const speed = 500
    const time = 2000
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.height()
    const count = $slide.length
    $container.height(size * count)

    setInterval(() => {
        $container.animate({
            top: -size
        }, speed, function() {
            $container.css('top','0')
            $container.append($(".slide").first())
        })
    }, time);


    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
})