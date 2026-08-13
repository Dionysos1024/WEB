

/* 하는김에 제일 못하는 js 도 한번 도전 해봄!
        13일 22시 10분 도전 시작! */

/* 22시 20분 종료! 틀리고 빼먹은게 너무 많아서... 수정작업 함! */


$(function() {

    $(".main-menu").on("mouseover", function() {
        $(".sub-menu").stop().slideDown()
    })

    $(".main-menu").on("mouseout", function() {
        $(".sub-menu").stop().slideUp()
    })

    /* 이건 js 보다는... css 나 html이 잘못된듯... 왜 이러는걸까요? 현타 심하게 오는중... */




    const speed = 500
    const time = 2000
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.height()
    const count = $slide.length
    $container.height(size * count)
    /* .height(size * count) 여기서 부터 기억 못함....*/

    setInterval(function() {
        $container.animate({
        /* .animate({ 여기서 부터 아래 전부다 기억 못함....*/
            top: -size
        }, speed, function() {
            $container.css('top','0')
            $container.append($(".slide").first())
    })
    }, time)





        /* 탭 부분은 바뀐걸 아직 못외움;; 기존에 계속 쓰던거만 기억나서 그냥 통으로 안써버림.... */
     $(".menu-item").on("click", function() {
        $(".content-item").toggle()
        $(".menu-item").toggleClass("active")
     })
        /* 얘가 새로 나온애... 더 간단한데, 익숙해지지 않아서 그런지 생각이 바로 안나옴... 큰일... */




    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
})