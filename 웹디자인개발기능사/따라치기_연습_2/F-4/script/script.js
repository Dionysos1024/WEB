
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
    const $container = $(".slide-container")
    const size = $slide.height()
    const count = $slide.length
    $container.height(size * count)

    setInterval(function() {
        index = (index + 1) % count
        $container.animate({
            top: -index * size
        }, speed)
    }, time)


    $(".btn-modal").on("click", function() {
        $(".close btn-modal").toggle()
    })
})