(function(e){e.extend(e.rsProto,{_initAnimatedBlocks:function(){function r(){var e=t.currSlide;if(!t.currSlide||!t.currSlide.isLoaded)return;if(t._slideWithBlocks!==e){if(t._animatedBlockTimeouts.length>0){for(n=0;n<t._animatedBlockTimeouts.length;n++)clearTimeout(t._animatedBlockTimeouts[n]);t._animatedBlockTimeouts=[]}if(t._blockAnimProps.length>0){var r;for(n=0;n<t._blockAnimProps.length;n++)r=t._blockAnimProps[n],r&&(t._useCSS3Transitions?(r.block.css(t._vendorPref+t._TD,"0s"),r.block.css(r.css)):r.running?r.block.stop(!0,!0):r.block.css(r.css),t._slideWithBlocks=null,e.animBlocksDisplayed=!1);t._blockAnimProps=[]}e.animBlocks&&(e.animBlocksDisplayed=!0,t._slideWithBlocks=e,t._animateBlocks(e.animBlocks))}}var t=this,n;t._blockDefaults={fadeEffect:!0,moveEffect:"top",moveOffset:20,speed:400,easing:"easeOutSine",delay:200},t.st.block=e.extend({},t._blockDefaults,t.st.block),t._blockAnimProps=[],t._animatedBlockTimeouts=[],t.ev.on("rsAfterInit",function(){r()}),t.ev.on("rsBeforeParseNode",function(t,n,r){n=e(n),r.animBlocks=n.find(".rsABlock").css("display","none"),r.animBlocks.length||(n.hasClass("rsABlock")?r.animBlocks=n.css("display","none"):r.animBlocks=!1)}),t.ev.on("rsAfterContentSet",function(e,n){n.id===t.currSlideId&&setTimeout(function(){r()},t.st.fadeinLoadedSlide?300:0)}),t.ev.on("rsAfterSlideChange",function(){r()})},_updateAnimBlockProps:function(e,t){setTimeout(function(){e.css(t)},6)},_animateBlocks:function(t){var n=this,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w;n._animatedBlockTimeouts=[],t.each(function(t){r=e(this),i={},s={},o=null;var u=r.data("move-offset");isNaN(u)&&(u=n.st.block.moveOffset);if(u>0){var a=r.data("move-effect");a?(a=a.toLowerCase(),a==="none"?a=!1:a!=="left"&&a!=="top"&&a!=="bottom"&&a!=="right"&&(a=n.st.block.moveEffect,a==="none"&&(a=!1))):a=n.st.block.moveEffect;if(a){var f;a==="right"||a==="left"?f=!0:f=!1;var l,c,h;isOppositeProp=!1,n._useCSS3Transitions?(l=0,c=n._xProp):(f?isNaN(parseInt(r.css("right"),10))?c="left":(c="right",isOppositeProp=!0):isNaN(parseInt(r.css("bottom"),10))?c="top":(c="bottom",isOppositeProp=!0),c="margin-"+c,isOppositeProp&&(u=-u),l=parseInt(r.css(c),10)),a==="top"||a==="left"?h=l-u:h=l+u,s[c]=n._getCSS3Prop(h,f),i[c]=n._getCSS3Prop(l,f)}}var p=r.attr("data-fade-effect");if(!p)p=n.st.block.fadeEffect;else if(p.toLowerCase()==="none"||p.toLowerCase()==="false")p=!1;p&&(s.opacity=0,i.opacity=1);if(p||a)o={},o.hasFade=Boolean(p),Boolean(a)&&(o.moveProp=c,o.hasMove=!0),o.speed=r.data("speed"),isNaN(o.speed)&&(o.speed=n.st.block.speed),o.easing=r.data("easing"),o.easing||(o.easing=n.st.block.easing),o.css3Easing=e.rsCSS3Easing[o.easing],o.delay=r.data("delay"),isNaN(o.delay)&&(o.delay=n.st.block.delay*t);var d={};n._useCSS3Transitions&&(d[n._vendorPref+n._TD]="0ms"),d.moveProp=i.moveProp,d.opacity=i.opacity,d.display="none",n._blockAnimProps.push({block:r,css:d}),n._updateAnimBlockProps(r,s),n._animatedBlockTimeouts.push(setTimeout(function(e,t,r,i){return function(){e.css("display","block");if(r){var s={};if(!n._useCSS3Transitions)setTimeout(function(){e.animate(t,r.speed,r.easing)},16);else{var o="";r.hasMove&&(o+=r.moveProp),r.hasFade&&(r.hasMove&&(o+=", "),o+="opacity"),s[n._vendorPref+n._TP]=o,s[n._vendorPref+n._TD]=r.speed+"ms",s[n._vendorPref+n._TTF]=r.css3Easing,e.css(s),setTimeout(function(){e.css(t)},24)}}delete n._animatedBlockTimeouts[i]}}(r,i,o,t),o.delay<=6?12:o.delay))})}}),e.rsModules.animatedBlocks=e.rsProto._initAnimatedBlocks})(jQuery);