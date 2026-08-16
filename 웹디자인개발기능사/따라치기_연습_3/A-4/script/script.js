
$(function() {

    $(".main, .sub").on("mouseenter", function() {
        $(".sub").stop().slideDown()
    })
    $(".main, .sub").on("mouseleave", function() {
        $(".sub").stop().slideUp()
    })


    let index = 0
    const speed = 500
    const time = 2000
    const $slide = $(".slide")
    const count = $(".slide").length
    $slide.not(":first").hide()
    setInterval(function() {
        index = (index + 1) % count
        $slide.fadeOut(speed)
        $slide.eq(index).fadeIn(speed)
    }, time)


    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
})


 /* 스스로 치기 : 17분 / 수정 작업 : 5분 */