// 개별 메뉴 슬라이드
// 가로 이미지 슬라이드
// 레이어 팝업 창

/* 08월 29일 / 시작 : 23시 10분 / 종료 : 23시 19분 */
/* html.css.script 다 끝낸뒤 확인 및 수정 시작 함 /
    시작: 23시 55분 . 종료 : 23시 56분 소요 시간 : 01분 / 틀린부분 00개 */

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