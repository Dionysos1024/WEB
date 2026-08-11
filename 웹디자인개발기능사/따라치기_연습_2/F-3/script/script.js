
$(function() {

    $(".main, .sub").on("mouseenter", function() {
        $(".sub").stop().slideDown()
    })
    $(".main, .sub").on("mouseleave", function() {
        $(".sub").stop().slideUp()
    })


    const speed = 500;
    const time = 2000;
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.width();
    const count = $slide.length;
    $container.width(size * count)

    setInterval(function() {
        $container.animate({
            left: -size
        }, speed, function() {
            $container.css('left','0')
            $container.append($(".slide").first());
        } );
    }, time);



    $(".menu-item").on("click", function() {
        $(".content-item").toggle()
        $(".menu-item").toggleClass("active")
    })



    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
})