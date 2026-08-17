$(function() {

    $(".main-menu").on("mouseover", function() {
        $(".sub-menu").stop().slideDown()
        })

    $(".main-menu").on("mouseout", function() {
        $(".sub-menu").stop().slideUp()
        })


    const speed = 500
    const time = 2000
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $(".slide").height()
    const count = $slide.length
    $container.height(size * count)

    setInterval(function() {
        $container.animate({
            top: -size
        }, speed, function() {
            $container.css('top','0')
            $container.append($(".slide").first())
        })
    }, time)


    $(".menu-item").on("click", function() {
        $(".content-item").toggle()
        $(".menu-item").toggleClass("active")
    })


    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
})

/* 22시 37분 시작 / 22시 59분 완료
        확인 및 수정 작업 23시 05분 완료 */


/* 앞전 보다 는 더 치긴했지만, 여전히 안되고 있음.... */