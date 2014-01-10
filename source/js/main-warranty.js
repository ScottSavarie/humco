/* =Modernizer replace SVG with PNG
============================================================================== */


if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png');
    });
}


/* =Map Range Function
============================================================================== */


map_range = function(value, low1, high1, low2, high2) {
 if (value < low1) { return low2; }
 else if (value > high1) { return high2; }
 else return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}






/* =Nav / Logo show
============================================================================== */

$(document).ready(function() {
  $(".logo-wrap").addClass("logo-wrap-slide");
}); 

$(document).ready(function() {
  $(".nav-wrap").addClass("nav-wrap-show");
}); 





$(window).scroll(function(event) {
  var scrollTop = $(document).scrollTop();

  if (window.innerWidth >= 767){

    $(".humco-type").css({opacity : map_range(scrollTop, 1, 500, 0, 1)});
    $(".nav-links").css({opacity : map_range(scrollTop, 1, 500, 0, 1)});
  

    }

    else {
    
      
    }
});





/* =Parallax Shit
============================================================================== */


$(window).load(function(){
  var artImg = $("#art-img").offset().top;

$(window).scroll(function(event) {
  var scrollTop = $(document).scrollTop();

  if (window.innerWidth >= 769 && scrollTop <= artImg + 1000){

    $("#art-img").css({transform : "translate3d" + "(0, " + map_range(scrollTop, artImg, artImg + 800, 0, 400) + "px" + ", 0" + ")"});
    $("#art-img").css({Moztransform : "translate3d" + "(0, " + map_range(scrollTop, artImg, artImg + 800, 0, 400) + "px" + ", 0" + ")"});
    $("#art-img").css({Webkittransform : "translate3d" + "(0, " + map_range(scrollTop, artImg, artImg + 800, 0, 400) + "px" + ", 0" + ")"});
    $("#art-img").css({mstransform : "translate3d" + "(0, " + map_range(scrollTop, artImg, artImg + 800, 0, 400) + "px" + ", 0" + ")"});
    $("#art-img").css({Otransform : "translate3d" + "(0, " + map_range(scrollTop, artImg, artImg +800, 0, 400) + "px" + ", 0" + ")"});
    
    }

    else {
      
    }
});
});





