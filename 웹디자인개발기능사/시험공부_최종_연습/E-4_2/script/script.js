// 개별 메뉴 슬라이드
// 가로 이미지 슬라이드
// 모달 팝업 창

/* 09월 06일 / 시작 : 15시 05분 / 종료 : 15시 16분 */

/* 메뉴 슬라이드 위치 이상함 css 문제인가봄(?) */

$(function () {

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
    const size = $slide.width()
    const count = $slide.length
    $container.width(size * count)

    setInterval(() => {
        $container.animate({
            left: -size
        }, speed, function() {
            $container.css('left','0')
            $container.append($(".slide").first())
        })
    }, time);


    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
})