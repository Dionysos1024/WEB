// 100% 메뉴 슬라이드
// 가로 이미지 슬라이드
// 탭 기능
// 팝업 창

/* 09월 01일 / 시작 : 21시 59분 / 종료 : 22시 10분 */

/* 확인 & 수정 / 틀린 부분 탭 기능: 선택자 또 반대로 쓰고, active 또 안씀... ㅠ ㅠ */

$(function() {

    $(".main, .sub").on("mouseenter", function() {
        $(".sub").stop().slideDown()
    })
    $(".main, .sub").on("mouseleave", function() {
        $(".sub").stop().slideUp()
    })


    const speed = 500
    const time = 2000
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.width()
    const count = $slide.length
    $container.width(size * count)

    setInterval(() => {
        $container.animate({
            left: -size
        }, speed, function() {
            $container.css('left','0')
            $container.append($(".slide").first())
        })
    }, time);


    $(".menu-item").on("click", function() {
        $(".content-item").toggle()
        $(".menu-item").toggleClass("active")
    })


    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
    
})