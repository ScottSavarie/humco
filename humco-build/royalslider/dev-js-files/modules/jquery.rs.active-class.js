(function(e){e.rsProto._initActiveClass=function(){var e,t=this;if(t.st.addActiveClass){t.ev.on("rsBeforeMove",function(){n()}),t.ev.on("rsAfterInit",function(){n()});function n(){e&&clearTimeout(e),e=setTimeout(function(){t._oldHolder&&t._oldHolder.removeClass("rsActiveSlide"),t._currHolder&&t._currHolder.addClass("rsActiveSlide"),e=null},50)}}},e.rsModules.activeClass=e.rsProto._initActiveClass})(jQuery);