$(function() {
    //메뉴 슬라이드
    $(".main-menu li").on("mouseovr", function() {
        $(this).fine(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function() {
        $(this).fine(".sub-menu").stop().slideUp()
    })


    const speed = 1000
    const time = 2000
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.height()
    const count = $slide.length

    setInterval(function() {
        $container.animate({
            top: -size
        }, speed, function() {
            $container.css('top','0')
            $container.append($(".slide").first())
        })
    }, time)


    // 탭 기능
    $("#btn-notice").on("click", function() {
        $("#content-notice").show()
        $("#content-gallery").hide()
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
    })
    $("#btn-gallery").on("click", function() {
        $("#content-notice").hide()
        $("#content-gallery").show()
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
    })
})