
$(function() {

    $(".main, .sub").on("mouseenter", function(){
        $(".sub").stop().slideDown()
    })
    $(".main, .sub").on("mouseleave", function(){
        $(".sub").stop().slideUp()
    })

    // 메뉴 슬라이드 이상해! 왜 이래! 이따가 다치고나서 찾아봐야지~


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
        });
    }, time);



    $(".btn-modal").on("click", function() {
        $("#modal").show();
    });

    $(".close").on("click", function() {
        $("#modal").hide();
    });
})