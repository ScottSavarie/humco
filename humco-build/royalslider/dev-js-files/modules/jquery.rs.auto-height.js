(function(e){e.extend(e.rsProto,{_initAutoHeight:function(){var e=this;if(e.st.autoHeight){var t,n,r;e.slider.addClass("rsAutoHeight"),e.ev.on("rsAfterInit",function(){setTimeout(function(){i(!1),setTimeout(function(){e.slider.append('<div id="clear" style="clear:both;"></div>'),e._useCSS3Transitions&&e._sliderOverflow.css(e._vendorPref+"transition","height "+e.st.transitionSpeed+"ms ease-in-out")},16)},16)}),e.ev.on("rsBeforeAnimStart",function(){i(!0)}),e.ev.on("rsBeforeSizeSet",function(){setTimeout(function(){i(!1)},16)});function i(s){var o=e.slides[e.currSlideId];t=o.holder;if(!o.isLoaded){e.ev.off("rsAfterContentSet.rsAutoHeight").on("rsAfterContentSet.rsAutoHeight",function(e,t){o===t&&i()});return}t&&(n=t.height(),n!==0&&n!==r&&(e._wrapHeight=n,e._useCSS3Transitions||!s?e._sliderOverflow.css("height",n):e._sliderOverflow.stop(!0,!0).animate({height:n},e.st.transitionSpeed)))}}}}),e.rsModules.autoHeight=e.rsProto._initAutoHeight})(jQuery);