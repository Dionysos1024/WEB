
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
    const size = $slide.height();
    const count = $slide.length;
    $container.height(size * count)

    setInterval(function() {
        $container.animate({
            top: -size
        }, speed, function() {
            $container.css('top','0')
            $container.append($(".slide").first());
        });
    }, time);



    $("#btn-modal").on("click", function() {
        $("#modal").show();
    });

    $(".close").on("click", function() {
        $("#modal").hide();
    });
})