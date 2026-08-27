


/* 08월 27일 시작 : 22시 10분 / 종료 : 22시 27분 */
/* 틀린 부분 확인 및 수정 1개 : 제일 자주 하는 실수 를 또... */
/* 매번 자꾸만 . 를 빼먹음.. 한참 헤메임...ㅠ ㅠ */


$(function() {

    // 메뉴 슬라이드 각 개별 슬라이드 (조금 헷갈려서 쓰고 지우고 좀 함...)
    $(".main-menu li").on("mouseover", function() {
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function() {
        $(this).find(".sub-menu").stop().slideUp()
    })

    // 가로 슬라이드 (바로바로 아직 입력이 안되서 좀 오래 걸림...)
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
            $container.append($($slide).first())
        })
    }, time);

    // 레이어 팝업 창
    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
})