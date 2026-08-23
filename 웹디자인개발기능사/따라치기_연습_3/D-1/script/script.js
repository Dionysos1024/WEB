

/* D유형 시작 오늘은 수업때 배운거라 그냥 시작 했음!
        08월 23일 시작 : 18시 00분 / 종료 : 18시 20분 총 20분 소요 */

/* 선생님 코드 흝어본 뒤 수정 작업 시작 : 18시 20분 / 종료 : 18시 23분 총 03분 소요*/


$(function() {

    // 메뉴 각 개별로 슬라이드 됨! 나 이거 알음!! 이거 틀리면 나 당분간 잠수탄다!
    $(".main-menu li").on("mouseover", function() {
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function() {
        $(this).find(".sub-menu").stop().slideUp()
    })


    // 세로 슬라이드! 오늘 배운거임! 오늘도 생각 연결 못하면 난 시험볼 자격이 없다!
    const speed = 500
    const time = 2000
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.height()
    const count = $slide.length
    $container.height(size * count)

    setInterval(() => {
        $container.animate({
            top: -size
        }, speed, function() {
            $container.css('top','0')
            $container.append($(".slide").first())
        })
    }, time);


    // 탭 기능... 아까 한번 보긴했는데, 기억이 좀 흐릿하긴함...
    $(".menu-item").on("click", function() {
        $(".content-item").toggle()  // . 빼먹음...
        $(".menu-item").toggleClass("active") // Class 빼먹음...
    })


    // 팝업창 이건 처음부터 이해 다된 상태라 외우기 제일 만만했음..
    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })

})