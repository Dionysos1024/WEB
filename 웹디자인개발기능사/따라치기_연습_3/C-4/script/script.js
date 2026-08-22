

/* html + css + js 시험지만 보고 작성 총 시간 1시간 17분 28초 */

/* css 서브 메뉴 박스 넓이 수정 40초 */

/*  js 슬라이드 ($(".slide").first()) 계속 잘못씀...
        수정 8분 지나도 제대로 못써서 그냥 선생님꺼 보고함;; */

$(function() {


    $(".main-menu li").on("mouseover", function() {
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function() {
        $(this).find(".sub-menu").stop().slideUp()
    })



    const speed = 500
    const time = 2000
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.width()
    const count = $slide.length
    $container.width(size * count)

    setInterval(function() {
        $container.animate({
            left: -size
        }, speed, function() {
            $container.css('left','0')
            $container.append($(".slide").first())
        })
    }, time)



    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
})