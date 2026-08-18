
$(function() {

    $(".main, .sub").on("mouseenter", function(){
        $(".sub").stop().slideDown()
    })
    $(".main, .sub").on("mouseleave", function(){
        $(".sub").stop().slideUp()
    })

   
    const speed = 500
    const time = 2000
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.height()
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

   

    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })

})




/* 스스로 치기 22시 30분 시작 /  22시 45분 종료 */
/* 틀린 부분 슬라이드 기억 상실된거 2줄 수정 2줄 */

/* $(function() {

    $(".main, .sub").on("mouseenter", function() {
        $(".sub-menu").stop().slideDown()
    })
    $(".main, .sub").on("mouseleave", function() {
        $(".sub-menu").stop().slideUp()
    })


    const speed = 500
    const time = 2000
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.height()
    const count = $container.length
    $container.height(size * count)

    setInterval(function() {
        $container.animate({
            top: -size
        }, speed, function() {
            $container. 기억상실...
            $container. 기억상실....
        })
    }, time)


    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
}) */