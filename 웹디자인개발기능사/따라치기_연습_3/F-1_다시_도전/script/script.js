// 개별 메뉴 슬라이드
// 페이드 이미지 슬라이드
// 탭 기능
// 레이어 팝업 창

/* 08월 31일 / 시작 : 12시 28분 / 종료 : 12시 41분 */
/* 확인 / 12시 41분 ~ 12시 43분 / 틀린 부분 1개 탭 기능 ("active") 빼먹음 */
/* 페이드 이미지 슬라이드 동작 안함, 맞게 했는데, 왜 안되는지 모르겠음!?
html 오타 없고, css 에서도 오타 나 선생님과 다른거 없음.. 왜 이래!? */
/* 이미지를 다 1번 으로 해둠... 수정 후 동작 잘되는거 확인 함 이상 없음! */

$(function() {

    $(".main-menu li").on("mouseover", function() {
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function() {
        $(this).find(".sub-menu").stop().slideUp()
    })

    let index = 0
    const speed = 500
    const time = 2000
    const $slide = $(".slide")
    const count = $slide.length
    $slide.not(":first").hide()

    setInterval(() => {
        index = (index + 1) % count
        $slide.fadeOut(speed)
        $slide.eq(index).fadeIn(speed)
    }, time);


    $(".menu-item").on("click", function() {
        $(".content-item").toggle()
        $(".menu-item").toggleClass("active")
    })


    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })

})