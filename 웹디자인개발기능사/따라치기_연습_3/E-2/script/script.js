
/* 08월 28일 / 시작 : 17시 05분 / 종료 : 17시 13분 */

/* 확인 및 수정 : 틀린 부분 00개 */
/* 메뉴 슬라이드가 동작 안됨, css 문제로 판단, css 검토 후 다시 확인 할것! */

$(function() {

    $(".main-menu li").on("mouseover", function() {
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function() {
        $(this).find(".sub-menu").stop().slideUp()
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