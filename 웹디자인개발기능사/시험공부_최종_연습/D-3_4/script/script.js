$(function() {

    $(".main, .sub").on("mouseover", function() {
        $(".sub").stop().slideDown()
    })
    $(".main, .sub").on("mouseout", function() {
        $(".sub").stop().slideUp()
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


    $(".menu-item").on("click", function() {
        $(".content-item").toggle()
        $(".menu-item").toggleClass("active")
    })

    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
    
})