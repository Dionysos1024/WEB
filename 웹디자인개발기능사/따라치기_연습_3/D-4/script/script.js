


/* 페이드 슬라이드 강제로 외워보려고 매일 시도하는데,
이해못한 부분은 그냥 아무리 난리쳐도 안외워짐! 이해하려고 발악해봤는데, 잘 안됨...*/

/* 시작 : 08월 26일 22시 10분 / 종료 : 22시 27분 / 수정 완료 22시 29분 */

$(function() {

    // 내 기억속 메뉴 - 가로 100% 멀티 메뉴, 메뉴가 나타나고 사라지고 (페이드)
    $(".main, .sub").on("mouseenter", function() {
        $(".sub").stop().fadeIn()
    })
    $(".main, .sub").on("mouseleave", function() {
        $(".sub").stop().fadeOut()
    })

    // 내 기억속 페이드 슬라이드 몇줄 안됨....
    let index = 0
    const speed = 500
    const time = 2000
    const $slide = $(".slide")
    const count = $slide.length
    $slide.not(":first").hide() // 여기 줄 오래걸림.. 기억 흐릿...

    setInterval(() => {
        index = (index + 1) % count // 여기서 부터는 그냥... 간신히 한두 단어만 기억 나머지 기억 상실...
        $slide.fadeOut(speed)
        $slide.eq(index).fadeIn(speed)
    }, time);

    // 내 기억속 레이어 팝업 창 제일 만만하게 외워짐...
    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
})