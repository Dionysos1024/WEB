
$(function() {
    $(".main, .sub").on("mouseenter", function(){
        $(".sub").stop().slideDown()
    })
    $(".main, .sub").on("mouseleave", function(){
        $(".sub").stop().slideUp()
    })



    let index = 0;
    const speed = 500;
    const time = 3000;
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.height();
    const count = $slide.length;
    $container.height(size * count)

    setInterval(function() {
        index = (index + 1) % count;
        $container.animate({
            top: -index * size
        }, speed);
    }, time);




    /* const speed = 500;
    const time = 3000;
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
    }, time); */



    /* $("#btn-notice").on(".click", function() {
        $("#container-notice").show()
        $("#content-gallery").hide()
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
    })
    $("#btn-gallery").on(".click", function() {
        $("#container-notice").hide()
        $("#container-gallery").show()
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
    }) */

        // 잉? 이거 문제지 탭 메뉴 아님... 흐잉~ 연습 잘했다앙~;;

    
        $(".btn-modal").on("click", function() {
            $("#modal").show();
        });

        $(".close").on("click", function() {
            $("#modal").hide();
        });

})