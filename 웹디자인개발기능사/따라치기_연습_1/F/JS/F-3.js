
$(function() {

    $(".main, .sub").on("mouseenter", function(){
        $(".sub").stop().slideDown()
    })
    $(".main, .sub").on("mouseleave", function(){
        $(".sub").stop().slideUp()
    })




    let index = 0;
    const speed = 500;
    const time = 3000;
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.width();
    const count = $slide.length;
    $container.width(size * count)

    setInterval(function() {
        index = (index + 1) % count;
        $container.animate({
            left: -index * size
        }, speed);
    }, time);

    // 잉? 어... 뭐지? 뭔가 다른데;; 어? 앞에서 본거랑 코드가 다른데?;; 갑자기?? 얘도 가로 슬라이드가 돼넹;
    // 음... 몇가지만 바꾸면 다 될거같은데; 이걸 외울까; 앞에꺼 어떻하지;


    $("#btn-notice").on("click", function() {
        $("#content-notice").show()
        $("#content-gallery").hide()
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
    })
    $("#btn-gallery").on("click", function() {
        $("#content-notice").hide()
        $("#content-gallery").show()
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
    })



    $(".btn-modal").on("click", function() {
        $("#modal").show();
    });

    $(".close").on("click", function() {
        $("#modal").hide();
    });

})