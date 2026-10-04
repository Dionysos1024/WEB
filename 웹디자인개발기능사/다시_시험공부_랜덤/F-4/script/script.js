$(function() {

    $(".main, .sub").on("mouseover", function() {
        $(".sub").stop().slideDown()
    })
    $(".main, .sub").on("mouseout", function() {
        $(".sub").stop().slideUp()
    })


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