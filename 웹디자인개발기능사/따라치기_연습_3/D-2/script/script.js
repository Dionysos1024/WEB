

/* 시작 : 08월 24일 17시 05분 / 종료 : 17시 15분
        총 작성 시간 10분 / 확인 및 수정 00분 소요 */

/* 틀린 부분 : 00개 */


$(function() {

        // 개별 메뉴 슬라이드
        $(".main-menu li").on("mouseover", function() {
                $(this).find(".sub-menu").stop().slideDown()
        })
        $(".main-menu li").on("mouseout", function() {
                $(this).find(".sub-menu").stop().slideUp()
        })


        // 가로 슬라이드
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


        // 레이어 팝업
        $(".btn-modal").on("click", function() {
                $("#modal").toggle()
        })
})