// 개별 메뉴 슬라이드
// 가로 이미지 슬라이드
// 모달 팝업 창

/* 09월 04일 시작 : 06시 35분 / 종료 : 06시 44분 */
/* 동작은 잘됨, css 아니면 html 문제 있어서 확인 가야함;; */

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