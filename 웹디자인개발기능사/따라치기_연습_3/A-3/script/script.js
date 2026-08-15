

/* 이건 진짜... 할때마다 자신 너무 없다... 에휴... 이해 다 못해서 기억 안나는데... ㅠ ㅠ 일단 시작해봄... */

/* 기억 나는게 별로 없어서... 11분 걸림... ㅠ ㅠ 아니.. 여기만 오면 머릿속이 비어지네... */

/* $(function() {

    $(".main-menu li").on("mouseover", function() {
        $(this).find(".sub-menu").slideDown()
    })
    $(".main-menu li").on("mouseout", function() {
        $(this).find(".sub-menu").slideUp()
    })  // 뭔가 이게 아닌거 같은데... 뭔가 빼먹은거 같은데... 기억 안난다...


    let index = 0
    const speed = 500
    const time = 2000
    const $slide = $(".slide")
    const count = $(".slide").????   //여기서 부터 기억 안남....



    $(".menu-item").on("click", function() {
        $(".content-item").toggle()
        $(".menu-item").????   //여기서 부터 기억 안남.... 뭔가 있고 마무리에 active 들어간거 같은데... ㅠ ㅠ
    })


    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
}) */


//  아무리 기억해 내려고해도 안됨, 이해를 너무 못했나봄... 연결 불가능... 그냥 보고 따라치기로 완성하기로....


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
        index = (index + 1) % count
        $slide.fadeOut(speed)
        $slide.eq(index).fadeIn(speed)
    }, time)


    $(".menu-item").on("click", function() {
        $(".content-item").toggle()
        $(".menu-item").toggleClass("active")
    })

    
    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
})