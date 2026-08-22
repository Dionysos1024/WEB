

/* 시험지 보고 스스로 치기 시작 18시 36분 / 종료 18시 49분 */

/* 선생님 코드 보고 확인 작업 완료 18시 52분 */

/* 틀린 부분 1 : 슬라이드 ($(".slide").first()) 빼먹음 */


$(function () {


    $(".main-menu li").on("mouseover", function() {
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function() {
        $(this).find(".sub-menu").stop().slideUp()
    })
    // 메뉴 슬라이드 뭔가 이상함... 살짝 맛이감... css 에서 잘못했나봄(?)



    const speed = 500
    const time = 2000
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.width()
    const count = $slide.length
    $container.width(size * count)

    setInterval(function() {
        $container.animate({
            left: -size
        }, speed, function() {
            $container.css('left','0')
            $container.append($(".slide").first())
        })
    }, time)
    // 슬라이드 한계다... 제발 이번에는 안틀렸길 바라는 마음인데.. 얘도 살짝 좀... 불안하다



    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
})