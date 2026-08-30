$(function() {

    // 1. 슬라이드 시간 : 2초씩, 넘김 0.5초
    // 2. 슬라이드 높이 : 300px
    // 3. 컨테이너 높이 : 슬라이드 높이 x 3장
    // 4. 타이머 동작 : 
    //   - 2초마다 동작
    //   - 0.5초 동안 슬라이드 높이만큼 위로 올라감
    //   - 동작 후, 맨 앞의 슬라이드가 맨 뒤로 넘어감

    // 세로 슬라이드

    /* const time = 2000
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
            $container.append($(".slide").first())
        }, time)
    }) */

    // 페이드 슬라이드

    /* let index = 0;                      // 0번째 슬라이드부터
    const speed = 500;                  // 0.5초 동안 전환
    const time = 2000;                  // 2초 동안 페이드
    const $slide = $(".slide")          // 슬라이드 3장 가져오기
    $slide.not(":first").hide()         // 첫 슬라이드 빼고 나머지 숨기기

    setInterval(function() {            // 타이머 함수
        index = (index + 1) % 3;        // (0 1 2)번째 슬라이드 반복
        $slide.fadeOut(speed)           // 슬라이드 다 선택 -> 흐려지게
        $slide.eq(index).fadeIn(speed)  // 해당 슬라이드 -> 밝아지게
    }, time);                           // 2초마다 페이드 */





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
})