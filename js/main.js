var myFullpage = new fullpage('#fullpage', {
    menu:'#menu',
    anchors:['section1', 'section2', 'section3', 'section4', 'section5', 'section6','section7'],
    sectionsColor: ['#f2f2f2', '#f2f2f2', '#ffe3bc', '#c8d7f0', '#fdfdfd','#fff'],
    autoScrolling:true, //스크롤 바를 스크롤하면 한 페이지씩 넘어감(true가 기본)
    slidesNavigation:true, 
});