// 문서 준비 이벤트
$(function() {

    // 스타일 변경하기
    // $(선택자).css('스타일속성', '속성값')
    // ➡ 신규 회원 : 이름을 강조
    $("#member1 .name").css("color", "hotpink")

    // ➡ 인기 회원 : 뱃지를 기울여서 강조
    $("#member2 .badge").css("transform", "rotate(20deg)")

    // ➡ 휴면 회원 : 카드를 투명하게 비활성화 효과
    $("#member3").css("opacity", "0.5")

    /* 여러 개의 스타일 속성을 지정하기 */
    /* ➡ 객체 형태로 지정 */
    /* 
        {
            '스타일1' : '속성값1',
            '스타일2' : '속성값2',
            '스타일3' : '속성값3',
        }
    */
   /* ⭐따옴표를 붙이면, 케밥케이스('-') */
    $('#member4').css({
        'border' : '2px solid royalblue',
        'background-color' : 'rgba(0,100,200,0.4)',
        'box-shadow' : '0 10px 20px rgba(100,100,255,05)'
    })

   /* ⭐따옴표를 안 붙이면, 카멜케이스 */
    $('#member5').css({
        border : '2px solid royalblue',
        backgroundColor : 'rgba(0,100,200,0.4)',
        boxShadow : '0 10px 20px rgba(100,100,255,05)'
    })
})