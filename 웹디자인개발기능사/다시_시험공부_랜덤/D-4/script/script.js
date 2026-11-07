$(function () {


    $(".main, .sub").on("mouseover", function() {
        $(".sub").stop().fadeIn()
    })
    $(".main, .sub").on("mouseout", function() {
        $(".sub").stop().fadeOut()
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