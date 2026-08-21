

/* 시험지 보고 스스로 치기 시작 17시 13분 / 종료 17시 23분 */

/* 확인 및 수정 작업 퇴근후 집에서 할것! */


$(function() {

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
})