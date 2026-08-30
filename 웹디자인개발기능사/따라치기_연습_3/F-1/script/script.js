// 개별 메뉴 슬라이드
// 페이드 이미지 슬라이드 (수업 후 첫 시도)
// 공지.갤러리 탭
// 레이어 팝업 창

/* 2026.08.30 시작 : 18시 55분 / 종료 : 19시 11분 */
/* 확인 및 수정 : 4부분 틀림 */


$(function() {

    $(".main-menu li").on("mouseover", function() {
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function() {
        $(this).find(".sub-menu").stop().slideUp()
    })
    // 메뉴 슬라이드 처음으로 html . css . js 한번에 완벽해짐! css 멘탈 털린 보람있네...

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
    // 페이드 슬라이드 수업 후 첫 시도, 이전보다는 더 연결되긴하는데, 두가지 헷갈림

    $(".menu-item").on("click", function() {
        $(".content-item").toggle()
        $(".menu-item").toggleClass("active")
    })
    // 탭 기능 에서 선택자 뒤바뀌어 씀...

    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
})