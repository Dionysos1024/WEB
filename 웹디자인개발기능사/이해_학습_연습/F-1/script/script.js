
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
    const count = $(".slide").length
    $slide.not(":first").hide()

    setInterval(function() {
        index = (index + 1) % count;
        $slide.fadeOut(speed)
        $slide.eq(index).fadeIn(speed)
    }, time);




    $(".menu-item").on("click", function() {
        $("#content-item").toggle() //안보이는애 보여주고 보여지는애 숨기고
        $(".menu-item").toggleClass("active")
    })



    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })

})