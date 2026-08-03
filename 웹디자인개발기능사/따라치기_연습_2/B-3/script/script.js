
$(function() {

    $(".main-menu li").on("mouseover", function(){
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function(){
        $(this).find(".sub-menu").stop().slideUp()
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


    $("#btn-notice").on("click", function() {
        $("#contant-notice").show()
        $("#content-gallery").hide()
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
    })
    $("#btn-gallery").on("click", function() {
        $("#contant-notice").hide()
        $("#content-gallery").show()
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
    })


    $(".btn-modal").on("click", function() {
        $("#modal").show();
    });

    $(".close").on("click", function() {
        $("#modal").hide();
    });

})