$(function() {

    // 1. 슬라이드 시간 : 2초씩, 넘김 0.5초
    // 2. 슬라이드 높이 : 300px
    // 3. 컨테이너 높이 : 슬라이드 높이 x 3장
    // 4. 타이머 동작 : 
    //   - 2초마다 동작
    //   - 0.5초 동안 슬라이드 높이만큼 위로 올라감
    //   - 동작 후, 맨 앞의 슬라이드가 맨 뒤로 넘어감

    // 세로 슬라이드

    const time = 2000
    const speed = 500
    const $slide = $(".slide")  // class="slide" 인 요소들을 선택
    const $container = $(".slide-container")  // class="slide-container" 인 요소들을 선택
    const size = $slide.height()  // 슬라이드 높이
    const count = $slide.length() // 슬라이드 개수
    $container.height( size * count)  // 컨테이너 높이 지정

    // 타이머 함수
    setInterval(function() {
        $container.animate({
            top: -size  // 300px 만큼 위로 슬라이드
        }, speed, function() { //0.5초 동안
            $container.css('top','0')  // 원위치
            $container.append($())
        })
    })
})