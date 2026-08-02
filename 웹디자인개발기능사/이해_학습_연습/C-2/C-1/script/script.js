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
    const $slide = $(".slide");
    const count = $(".slide").length;
    $slide.not(":first").hide()

    setInterval(function() {
        index = (index + 1) % count
        $slide.fadeOut(speed)
        $slide.eq(index).fadeIn(speed)
        $slide.css("z-index", "-1")
    }, time);


    // $() : HTML 요소를 선택하는 코드
    // #id : id 속성으로 지정하는 선택자
    // 하고싶은것은?
    // 1. 공지사항 버튼을 클릭했을때
    //      - 공지사항은 보이고, 갤러리는 숨기고
    //          공지사항 탭버튼 활성화 (.active)
    // 2. 갤러리 버튼을 클릭 했을때
    //   - 갤러리는 보이고, 공지는 숨기고
    //$(this) 는 현재 이벤트가 발생한 요소
   /*  $("#btn-notice").on("click", function() {
        $("#content-notice").show() // 보임
        $("#content-gallery").hide() // 숨김
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
    })
    $("#btn-gallery").on("click", function() {
        $("#content-notice").hide() // 숨김
        $("#content-gallery").show() // 보임
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
    }) */


    $(".btn-modal").on("click", function() {
        $("#modal").show()
    })
    $(".close").on("click", function() {
        $("#modal").hide()
    })


})