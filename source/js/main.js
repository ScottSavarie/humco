/* =Modernizer replace SVG with PNG
============================================================================== */


if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png');
    });
}


console.log($("#pti-img").height());
console.log($("#pti-img").offset().top);


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
    
      
    }
});


/* =Royal Slider
============================================================================== */


    $(document).ready(function($) {
        $(".royalSlider").royalSlider({
        controlsInside: false,
        slideSpacing: 0,
        autoScaleSliderHeight: 450,
        autoScaleSlider: true,
        imageScaleMode: 'fill',
        keyboardNavEnabled: true,
        numImagesToPreload: 1
        });  
    });








/* =Parallax Shit
============================================================================== */

// var prefix = Modernizr.prefixed("transform");




$(window).load(function(){

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

});


$(window).load(function(){
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

});



$(window).load(function(){

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
});



$(window).load(function(){
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

});


$(window).load(function(){
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

});



$(window).load(function(){
  var archy = $("#archy-img").offset().top;



$(window).scroll(function(event) {
  var scrollTop = $(document).scrollTop();

  if (window.innerWidth >= 769 && scrollTop <= archy + 1000){

    $("#archy-img").css({transform : "translate3d" + "(0, " + map_range(scrollTop, archy, archy + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#archy-img").css({Moztransform : "translate3d" + "(0, " + map_range(scrollTop, archy, archy + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#archy-img").css({Webkittransform : "translate3d" + "(0, " + map_range(scrollTop, archy, archy + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#archy-img").css({mstransform : "translate3d" + "(0, " + map_range(scrollTop, archy, archy + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#archy-img").css({Otransform : "translate3d" + "(0, " + map_range(scrollTop, archy, archy + 1000, 0, 400) + "px" + ", 0" + ")"});
    
    }

    else {
      
    }
});
});

$(window).load(function(){
  var archytwo = $("#archy-two-img").offset().top;


$(window).scroll(function(event) {
  var scrollTop = $(document).scrollTop();

  if (window.innerWidth >= 769 && scrollTop <= archytwo + 1000){

    $("#archy-two-img").css({transform : "translate3d" + "(0, " + map_range(scrollTop, archytwo, archytwo + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#archy-two-img").css({Moztransform : "translate3d" + "(0, " + map_range(scrollTop, archytwo, archytwo + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#archy-two-img").css({Webkittransform : "translate3d" + "(0, " + map_range(scrollTop, archytwo, archytwo + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#archy-two-img").css({mstransform : "translate3d" + "(0, " + map_range(scrollTop, archytwo, archytwo + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#archy-two-img").css({Otransform : "translate3d" + "(0, " + map_range(scrollTop, archytwo, archytwo + 1000, 0, 400) + "px" + ", 0" + ")"});
    
    }

    else {
      
    }
});
});


$(window).load(function(){
  var archythree = $("#archy-three-img").offset().top;


$(window).scroll(function(event) {
  var scrollTop = $(document).scrollTop();

  if (window.innerWidth >= 769 && scrollTop <= archythree + 1000){

    $("#archy-three-img").css({transform : "translate3d" + "(0, " + map_range(scrollTop, archythree, archythree + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#archy-three-img").css({Moztransform : "translate3d" + "(0, " + map_range(scrollTop, archythree, archythree + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#archy-three-img").css({Webkittransform : "translate3d" + "(0, " + map_range(scrollTop, archythree, archythree + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#archy-three-img").css({mstransform : "translate3d" + "(0, " + map_range(scrollTop, archythree, archythree + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#archy-three-img").css({Otransform : "translate3d" + "(0, " + map_range(scrollTop, archythree, archythree + 1000, 0, 400) + "px" + ", 0" + ")"});
    
    }

    else {
      
    }
});
});


$(window).load(function(){
  var archyfour = $("#archy-four-img").offset().top;


$(window).scroll(function(event) {
  var scrollTop = $(document).scrollTop();

  if (window.innerWidth >= 769 && scrollTop <= archyfour + 1000){

    $("#archy-four-img").css({transform : "translate3d" + "(0, " + map_range(scrollTop, archyfour, archyfour + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#archy-four-img").css({Moztransform : "translate3d" + "(0, " + map_range(scrollTop, archyfour, archyfour + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#archy-four-img").css({Webkittransform : "translate3d" + "(0, " + map_range(scrollTop, archyfour, archyfour + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#archy-four-img").css({mstransform : "translate3d" + "(0, " + map_range(scrollTop, archyfour, archyfour + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#archy-four-img").css({Otransform : "translate3d" + "(0, " + map_range(scrollTop, archyfour, archyfour + 1000, 0, 400) + "px" + ", 0" + ")"});
    
    }

    else {
      
    }
});
});

$(window).load(function(){
  var archyfive = $("#archy-five-img").offset().top;


$(window).scroll(function(event) {
  var scrollTop = $(document).scrollTop();

  if (window.innerWidth >= 769 && scrollTop <= archyfive + 1000){

    $("#archy-five-img").css({transform : "translate3d" + "(0, " + map_range(scrollTop, archyfive, archyfive + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#archy-five-img").css({Moztransform : "translate3d" + "(0, " + map_range(scrollTop, archyfive, archyfive + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#archy-five-img").css({Webkittransform : "translate3d" + "(0, " + map_range(scrollTop, archyfive, archyfive + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#archy-five-img").css({mstransform : "translate3d" + "(0, " + map_range(scrollTop, archyfive, archyfive + 1000, 0, 400) + "px" + ", 0" + ")"});
    $("#archy-five-img").css({Otransform : "translate3d" + "(0, " + map_range(scrollTop, archyfive, archyfive + 1000, 0, 400) + "px" + ", 0" + ")"});
    
    }

    else {
      
    }
});
});











