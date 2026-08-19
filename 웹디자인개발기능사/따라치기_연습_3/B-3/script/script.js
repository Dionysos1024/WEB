
/* 스스로 치기 시작 21시 51분 / 22시 03분 종료  */
/* 선생님꺼 코드 흝어 보고 다시 치기 작업 22시 13분 종료 */


/* $(function() {

    $(".main-menu li").on("mouseover", function() {
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function() {
        $(this).find(".sub-menu").stop().slideUp()
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
            $container.('top','0')
            $container.().first()
        })
    }, time)



    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
}) */


$(function() {
  
    $(".main-menu li").on("mouseover", function() {
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function() {   
        $(this).find(".sub-menu").stop().slideUp()
    })


    const speed = 500;
    const time = 2000;
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
        });
    }, time)
    
   
    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })

})