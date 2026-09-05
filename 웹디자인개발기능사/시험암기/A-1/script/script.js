$(function() {
  // 가로 멀티메뉴
  // - 메인메뉴 마우스 올렸을 때, 서브메뉴 슬라이드 다운
  $(".main-menu").on("mouseover", function() {
    $(".sub-menu").stop().slideDown()
  })
  // - 메인메뉴 마우스 벗어날 때, 서브메뉴 슬라이드 업
   $(".main-menu").on("mouseout", function() {
    $(".sub-menu").stop().slideUp()
  })
  // 세로 슬라이드
  // - 속도 500 시간 2000
  // - 슬라이드 선택
  // - 슬라이드 컨테이너 선택
  // - 슬라이드 크기
  // - 슬라이드 컨테이너 크기 = 슬라이드 크기 * 3
  // - 타이머 함수
  //    * 컨테이너에 애니메이션
  //    - animate( 1, 2, 3 )
  //    - 1. { top : -size }
  //    - 2. speed
  //    - 3. 종료 
  //      - 제자리
  //      - 첫 슬라이드를 맨 뒤에 추가
  //    * time
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

  // 탭
  // - 탭 메뉴 클릭 시,
  //  - 탭 컨텐츠 토글
  //  - 탭 메뉴 active 클래스 토글
  $(".menu-item").on("click", function() {
    $(".content-item").toggle()
    $(".menu-item").toggleClass("active")
  })

  // 레이어 팝업
  // - [공지사항 1번글]/[닫기] 클릭 시,
  //  - 레이어 팝업 토글
  $(".btn-modal").on("click", function() {
    $("#modal").toggle()
  })

});
