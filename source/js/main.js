/* =Modernizer replace SVG with PNG
============================================================================== */


if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png');
    });
}




/* =Parallax Shit
============================================================================== */




map_range = function(value, low1, high1, low2, high2) {
 if (value < low1) { return low2; }
 else if (value > high1) { return high2; }
 else return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}



 // var prefix = Modernizr.prefixed('transform');

$(window).scroll(function(event) {
  var scrollTop = $(document).scrollTop();

  if (window.innerWidth >= 870 && scrollTop <= 1000){
    $("#header-img").css({"-webkit-transform": "translate3d" + "(0, " + map_range(scrollTop, 1, 1000, 1, 400) + "px" + ", 0" + ")"});

    }

    else {
      
    }
});



// var models = $("#models-img").offset().top;

// $(window).scroll(function(event) {
//   var scrollTop = $(document).scrollTop();

//   if (window.innerWidth >= 870 && scrollTop <= models + 1000){
//     $("#models-img").css(prefix , "translate3d(0,"+(scrollTop/3)+"px,0)");

//     }

//     else {
      
//     }
// });











// var pti = $("#pti-img").offset().top;

// $(window).scroll(function(event) {
//   var scrollTop = $(document).scrollTop();

//   if (window.innerWidth >= 870 && scrollTop <= pti + 1000){
//     $("#pti-img").css({"top": map_range(scrollTop, pti, pti + 1000, 1, 400) + "px"});

//     }

//     else {
      
//     }
// });













