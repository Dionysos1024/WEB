

/* 시험지 보고 스스로 치기 시작 19시 10분 / 종료 19시 23분 */
/* 페이드 슬라이드는 아예 거의 모르는 상태로 시작함 */

/* 선생님 코드 보고 확인 및 수정 완료 19시 31분 */

/* 틀린 부분 : 9개 / 어후... 페이드 슬라이드 8줄 . 탭 메뉴 1줄 통으로 기억상실... */



/* $(function() {

    // 각 개별 슬라이드 내려와야함... 아직 조금 헷갈리긴함...
    $("main-menu li").on("mouseover", function() {
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function() {
        $(this).find(".sub-menu").stop().slideUp()
    })

    // 페이드 슬라이드 이해 못해서 아예 기억이 안남....
    let index = 0
    const speed = 500
    const time = 2000
    const $slide = (".slide")
    const //여기서 부터 생각 안이어짐... 여기 까지 기억 하는게 끝....

    // 탭 메뉴 도 기억이 흐릿하긴 함...
    $("menu-item").on("click", function() {
        $(".content-item").toggle()
        $("") // 여기서 부터 생각 안이어짐.. 기억 상실...
    })

    // 유일하게 얘만 매번 잘되네...
    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })
}) */



$(function() {

    $(".main-menu li").on("mouseover", function(){
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseout", function(){     
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
        $slide.css("z-index", "-1")
    }, time)
    


    $(".menu-item").on("click", function() {
        $(".content-item").toggle()
        $(".menu-item").toggleClass("active")
    })



    $(".btn-modal").on("click", function() {
        $("#modal").toggle()
    })

})