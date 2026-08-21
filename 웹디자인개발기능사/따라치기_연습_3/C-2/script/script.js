

/* 시험지 보고 스스로 치기 시작 17시 13분 / 종료 17시 23분 */

/* 확인 및 수정 작업 퇴근후 집에서 할것! */

/* 선생님 코드 보고, 다시 따라치기 시작 21시 16분 완료 21시 24분 */


/* $(function() {

    $(".main-menu li").on("mouseover", function() {
        $(this).find(".sub-menu").slideDown()
    })
    $(".main-menu li").on("mouseout", function() {
        $(this).find(".sub-menu").slideUp()
    })


    let index = 0
    const speed = 500
    const time = 2000
    const $slide = $(".slide")
    const count = $.slide.length
    $slide.not(":first"). // 이해력 부족... 연결 못하겠음... 기억 상실...

    setInterval(function() {
        index = (index + 1) % count
        // 이해력 부족... 연결 못함 기억 안남....
    })


    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
}) */



$(function() {

    $(".main-menu li").on("mouseover", function(){
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function(){   
        $(this).find(".sub-menu").stop().slideUp()
    })
    


    let index = 0;
    const speed = 500;
    const time = 2000;
    const $slide = $(".slide")
    const count = $(".slide").length
    $slide.not(":first").hide()
    
    setInterval(function() {
        index = (index + 1) % count;
        $slide.fadeOut(speed)
        $slide.eq(index).fadeIn(speed)
        $slide.css("z-index", "-1")
    }, time)
    


    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })

})