var myFullpage = new fullpage('#fullpage', {
    menu:'#menu',
    anchors:['section1', 'section2', 'section3', 'section4', 'section5', 'section6','section7'],
    sectionsColor: ['#fff','#f2f2f2', '#f2f2f2', '#ffe3bc', '#c8d7f0', '#fdfdfd','#fff'],
    autoScrolling:true, //스크롤 바를 스크롤하면 한 페이지씩 넘어감(true가 기본)
    slidesNavigation:true, 
});

function winOpen() {
    window.open("https://mong0000.github.io/seewe","popup","width=500, height=850, scrollbars=no, resizable=no")
}
function winOpen2() {
    window.open("https://mong0000.github.io/postofficem/","popup","width=520, height=850, scrollbars=no, resizable=no")
}

$('.left').mouseover(function(){
    $(this).addClass('ani');
});

$('.right').mouseover(function(){
    $(this).addClass('aniR');
});