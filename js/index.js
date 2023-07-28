let aboutoffset=$("#about").offset().top;
$(window).scroll(function(){
    let wscroll= $(window).scrollTop();
    if(wscroll > aboutoffset - 50){
        $("#main-nav").css('backgroundColor','rgba(0,0,0,0.7)');
        $("#btnUp").fadeIn(500);
    }
    else{
        $("#main-nav").css('backgroundColor','transparent');
        $("#btnUp").fadeOut(500);
    }
})

$("a[href^='#']").click(function(e){
    let Aref=$(e.target).attr('href');
    let sectionOffset=$(Aref).offset().top;
    $('html,body').animate({scrollTop:sectionOffset},1000);
})

$("#btnUp").click(function(){
    $("html,body").animate({scrollTop:0},1000)
})