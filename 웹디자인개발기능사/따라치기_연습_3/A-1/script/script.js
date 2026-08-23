

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




   /* ------------------- ↕️ 세로 슬라이드      ------------------- */
    // 1. 슬라이드 시간 : 2초씩, 넘김 0.5초
    // 2. 슬라이드 높이, 개수 : 300px, 3개
    // 3. 컨테이너 높이 : 슬라이드 높이 x 3장
    // 4. 타이머 동작 :
    //  - 2초마다 동작
    //  - 0.5초 동안 슬라이드 높이 만큼 위로 올라감 - animiate
    //  - 동작 후 원 위치, 맨 앞의 슬라이드가 맨 뒤로 넘어감 

    const time = 2000
    const speed = 500
    const $slide = $(".slide")                 // class="slide" 인 요소들을 선택
    const $container = $(".slide-container")   // class="slide-container" 인 요소 선택
    const size = $slide.height()               // 슬라이드 높이
    const count = $slide.length                // 슬라이드 개수
    $container.height(size * count)            // 컨테이너 높이 지정
    // 타이머 함수
    setInterval(() => {
        $container.animate({
            top: -size                         // 300px 만큼 위로 슬라이드
        },speed, function() {                  // 0.5초 동안
            $container.css('top','0')          // 원위치
            $container.append($slide.first())  // 첫 슬라이드를 맨뒤로 넘김
        })
    }, time);





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