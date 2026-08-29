// 개별 가로 메뉴 슬라이드
// 세로 이미지 슬라이드
// 레이어 팝업창

/* 08월 29일 시작 : 17시 25분 / 종료 : 17시 36분 */
/* 확인 및 수정 : 17시 36분 ~ 17시 37분 : 틀린 부분 00 */

$(function() {

    $(".main-menu li").on("mouseover", function() {
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function() {
        $(this).find(".sub-menu").stop().slideUp()
    })
    // 동작은 잘됨, 메뉴 부분 css 문제 있음.. 하.. 진짜 css ㅠ ㅡ ㅠ 계속 같은 걸로 애먹네...

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