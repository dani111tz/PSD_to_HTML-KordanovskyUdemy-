$(document).ready (function() {
    
    //initialising WOW always install animate.css as well
     new WOW().init();
    //set the click on the hamburger menu
    $(".burger-nav").on("click", function(){
        $(".container nav ul").toggleClass("open");
    });
    
    $('.js-wp-2').waypoint(function(direction) {
        
         $('.js-wp-2').addClass('animated slideInUp');
    }, {
        offset: '70%'
    });
      //shows appearing of iphone with black screen
    $('.js-wp-3').waypoint(function(direction) {
        
         $('.js-wp-3').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });
    
//  making button clickable
    $(".iphone-btn").delay(2300).animate({bottom: "+=-3"}, 300)
    $(".iphone-btn").delay(300).animate({top:"+=-3"},100)
    

    
});