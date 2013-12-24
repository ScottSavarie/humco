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





/* =Header resize
============================================================================== */

var windowHeight = window.innerHeight
var windowWidth = window.innerWidth

resizeHeader = function(){
  if (windowWidth >= windowHeight*1.5){
    $("#header-wrap").height(windowHeight);
    }
  else {

    }  
}

$(document).ready(function() {
  resizeHeader();
}); 


$(window).resize(function() {
    $("#header-wrap").removeAttr('style');
});



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

    // $(".humco-type").css({opacity : 1});
    // $(".nav-links").css({opacity : 1});      
      
    }
});


// $(window).resize(function() {
    
//     if (window.innerWidth <= 766){

//     $(".humco-type").css({opacity : 1});
//     $(".nav-links").css({opacity : 1});   

//   }
  
// });










/* =Parallax Shit
============================================================================== */

// var prefix = Modernizr.prefixed("transform");






var header = $("#header-img").offset().top;

$(window).scroll(function(event) {
  var scrollTop = $(document).scrollTop();

  if (window.innerWidth >= 769 && scrollTop <= header + 1000){

    $("#header-img").css({transform : "translate3d" + "(0, " + map_range(scrollTop, header, header + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#header-img").css({MozTransform : "translate3d" + "(0, " + map_range(scrollTop, header, header + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#header-img").css({WebkitTransform : "translate3d" + "(0, " + map_range(scrollTop, header, header + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#header-img").css({msTransform : "translate3d" + "(0, " + map_range(scrollTop, header, header + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#header-img").css({OTransform : "translate3d" + "(0, " + map_range(scrollTop, header, header + 1000, 0, 400) + "px" + ", 0" + ")"});

    }

    else {
      
    }
});



var models = $("#models-img").offset().top;

$(window).scroll(function(event) {
  var scrollTop = $(document).scrollTop();

  if (window.innerWidth >= 769 && scrollTop <= models + 1000){

    $("#models-img").css({transform : "translate3d" + "(0, " + map_range(scrollTop, models, models + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#models-img").css({Moztransform : "translate3d" + "(0, " + map_range(scrollTop, models, models + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#models-img").css({Webkittransform : "translate3d" + "(0, " + map_range(scrollTop, models, models + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#models-img").css({mstransform : "translate3d" + "(0, " + map_range(scrollTop, models, models + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#models-img").css({Otransform : "translate3d" + "(0, " + map_range(scrollTop, models, models + 1000, 0, 400) + "px" + ", 0" + ")"});


    }

    else {
      
    }
});



var pti = $("#pti-img").offset().top;

$(window).scroll(function(event) {
  var scrollTop = $(document).scrollTop();

  if (window.innerWidth >= 769 && scrollTop <= pti + 1000){

    $("#pti-img").css({transform : "translate3d" + "(0, " + map_range(scrollTop, pti, pti + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#pti-img").css({Moztransform : "translate3d" + "(0, " + map_range(scrollTop, pti, pti + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#pti-img").css({Webkittransform : "translate3d" + "(0, " + map_range(scrollTop, pti, pti + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#pti-img").css({mstransform : "translate3d" + "(0, " + map_range(scrollTop, pti, pti + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#pti-img").css({Otransform : "translate3d" + "(0, " + map_range(scrollTop, pti, pti + 1000, 0, 400) + "px" + ", 0" + ")"});


    }

    else {
      
    }
});





var lil = $("#lil-img").offset().top;

$(window).scroll(function(event) {
  var scrollTop = $(document).scrollTop();

  if (window.innerWidth >= 769 && scrollTop <= lil + 1000){

    $("#lil-img").css({transform : "translate3d" + "(0, " + map_range(scrollTop, lil, lil + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#lil-img").css({Moztransform : "translate3d" + "(0, " + map_range(scrollTop, lil, lil + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#lil-img").css({Webkittransform : "translate3d" + "(0, " + map_range(scrollTop, lil, lil + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#lil-img").css({mstransform : "translate3d" + "(0, " + map_range(scrollTop, lil, lil + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#lil-img").css({Otransform : "translate3d" + "(0, " + map_range(scrollTop, lil, lil + 1000, 0, 400) + "px" + ", 0" + ")"});


    }

    else {
      
    }
});



var old = $("#old-img").offset().top;

$(window).scroll(function(event) {
  var scrollTop = $(document).scrollTop();

  if (window.innerWidth >= 769 && scrollTop <= old + 1000){

    $("#old-img").css({transform : "translate3d" + "(0, " + map_range(scrollTop, old, old + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#old-img").css({Moztransform : "translate3d" + "(0, " + map_range(scrollTop, old, old + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#old-img").css({Webkittransform : "translate3d" + "(0, " + map_range(scrollTop, old, old + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#old-img").css({mstransform : "translate3d" + "(0, " + map_range(scrollTop, old, old + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#old-img").css({Otransform : "translate3d" + "(0, " + map_range(scrollTop, old, old + 1000, 0, 400) + "px" + ", 0" + ")"});


    }

    else {
      
    }
});














