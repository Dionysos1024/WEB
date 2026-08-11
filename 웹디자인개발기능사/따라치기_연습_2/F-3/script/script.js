
$(function() {

    $(".main, .sub").on("mouseenter", function() {
        $(".sub").stop().slideDown()
    })
    $(".main, .sub").on("mouseleave", function() {
        $(".sub").stop().slideUp()
    })


    let index = 0
    const speed = 500
    const time = 2000;
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.width()
    const count = $slide.length
    $container.width(size * count)

    setInterval(function() {
        index = (index + 1) % count
        $container.animate({
            left: -index * size
        }, speed)
    }, time)



    $(".menu-item").on("click", function() {
        $(".container-item").toggle()
        $(".menu-item").toggleClass("active")
    })



    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
})