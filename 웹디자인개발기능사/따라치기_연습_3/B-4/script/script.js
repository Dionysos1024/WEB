
/* 시험지만 보고 스스로 치기 시작 14시 40분 / 종료 15시 08분  */
/* 선생님꺼 보고 확인 수정 작업 : 틀린 부분 2개 */

/* $(function() {

    $(".main, .sub").on("mouseenter", function() {
        $(".sub").stop().slideDown()
    })

    $(".main, .sub").on("mouseleave", function() {
        $(".sub").stop().slideUp()
    })


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
            $container.append(???).first()
        })
    }, time)


    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
}) */


$(function() {


    $(".main, .sub").on("mouseenter", function() {
        $(".sub").stop().slideDown()
    })

    $(".main, .sub").on("mouseleave", function() {
        $(".sub").stop().slideUp()
    })


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


    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
})