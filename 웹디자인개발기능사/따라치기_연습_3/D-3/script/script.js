


/* 시험지만 보고 스스로 치기 도전! 모든 어려운 요소 총 집합! 제일 짜증나는 시험문제! */

/* 최대한 시간 안따지고 천천히 생각해서 해볼생각임, 목표 틀리거나 빼먹은거 10개 이하 */

/* 시작 시간 : 08월 25일 22시 30분 / 종료 시간 : 22시 40분 */

/* 틀린 부분 : 04줄 / 수정 완료 22시 58분 */


$(function() {

    $(".main, .sub").on("mouseenter", function() {
        $(".sub").stop().fadeIn()
    })
    $(".main, .sub").on("mouseleave", function() {
        $(".sub").stop().fadeOut()
    })


    let index = 0
    const speed = 500
    const time = 2000
    const $slide = $(".slide")
    const count = $(".slide").length
    $slide.not(":first").hide()
    
    setInterval(function() {
        index = (index + 1) % count;
        $slide.fadeOut(speed)
        $slide.eq(index).fadeIn(speed)
    }, time)


    $(".menu-item").on("click", function() {
        $(".content-item").toggle()
        $(".menu-item").toggleClass("active")
    })


    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })

})