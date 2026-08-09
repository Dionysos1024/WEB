
$(function() {

    $(".main-menu li").on("mouseover", function() {
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function() {
        $(this).find(".sub-menu").stop().slideUp()
    })


    let index = 0;
    const speed = 500;
    const time = 2000;
    const $slide = $(".slide")
    const count = $(".slide").length;
    $slide.not(":first").hide()

    setInterval(function() {
        index = (index + 1) % count;
        $slide.fadeOut(speed)
        $slide.eq(index).fadeIn(speed)
    }, time);
    // 여전히 F 1 슬라이드 끊어지는 듯한 현상이 일어남 이미지가 부드럽게 안변함


    $(".menu-item").on("click", function() {
        $(".content-item").toggle()
        $(".menu-item").toggleClass("active")
    })



    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
})