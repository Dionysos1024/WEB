// 가로 100% 메뉴 슬라이드
// 페이드 이미지 슬라이드
// 탭 기능
// 레이어 팝업 창

/* 09월 03일 시작 : 07시 25분 / 종료 : 07시 28분 */
/* 09월 03일 시작 : 12시 15분 / 종료 : 12시 28분 */
/* 팝업창 말고는 한번에 성공한게 없음, 슬프네... */

$(function() {

    $(".main, .sub").on("mouseenter", function() {
        $(".sub").stop().fadeIn()
    })
    $(".main, .sub").on("mouseleave", function() {
        $(".sub").stop().fadeOut()
    })
    // 어? 내가 생각한거랑 좀 다른데? 잘못한건가...
    // 곧 근무시작 이라, 마음 조급해지는데... 이따 다시 해야겠음 그냥!
    // 다시, 이거 아니면 fade 이거다... 제발 맞기를! 굳! 맞넹!
    // 위치가 좀 많이... 이건 이따가 css 가서 다시;;

    let index = 0
    const speed = 500
    const time = 2000
    const $slide = $(".slide")
    const count = $slide.length
    $slide.not(":first").hide()

    setInterval(() => {
        index = (index + 1) % count
        $slide.fadeOut(speed)
        $slide.eq(index).fadeIn(speed) // eq(index) 빼먹음...
    }, time);
    // 어... 뭔가 1번째 꺼 안나타남, 뭘 잘못적었는데... 일단 잠깐
    // 다른거 부터 적고 다시와서 해보자;;

    $(".menu-item").on("click", function() {
        $(".content-item").toggle()
        $(".menu-item").toggleClass("active")
    })
    // 아오...! 진짜! 탭 기능은 어째, 늘 안되지? 미치것네...
    // 선택자 바꾸니, 돼네... 왜 이 단순한게 안외워지는거지?

    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
})