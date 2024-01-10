/*glopal $, alert, console*/

$(function(){

    'use strict';
    
    $('.carousel').carousel({
      interval: 3000
    });
    
    
    //trigger for nicescroll
    $("html").niceScroll({
        cursorcolor:"#99B728",
        cursorwidth:"12px",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorborder:"1px solid #99B728",
        cursorborderradius:0,
        autohidemode:'false'
    });
    
    // the links of navbar for home page = landing page
    $('.link1').click(function() {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        },1500);
    });
    
    $('.link2').click(function() {
        $('html, body').animate({
            scrollTop: $('#services').offset().top
        },1000);
    });
    
    $('.link3').click(function() {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        },1500);
    });
    
    // the bitton to top
    var scrollButton = $("#button-top");
    $(window).scroll(function(){
        if ( $(this).scrollTop() >= 700){
            scrollButton.show();
        }
        else{
            scrollButton.hide();
        }
    });
    scrollButton.click(function(){  
        $("html, body").animate({ scrollTop: 0}, 2000);
    });
    
    // menu bars at mobile screen
    $("header .container .row > div i").click(function(){
       
        $("header .container .row > div:nth-of-type(2)").slideToggle(500)
                
    });
    
    
});