(function(e){e.extend(e.rsProto,{_initBullets:function(){var t=this;if(t.st.controlNavigation==="bullets"){var n='<div class="rsNavItem rsBullet"><span class=""></span></div>';t.ev.one("rsAfterPropsSetup",function(){t._controlNavEnabled=!0,t.slider.addClass("rsWithBullets");var r='<div class="rsNav rsBullets">';for(var i=0;i<t.numSlides;i++)r+=n;r+="</div>",r=e(r),t._controlNav=r,t._controlNavItems=r.children(),t.slider.append(r),t._controlNav.click(function(n){var r=e(n.target).closest(".rsNavItem");r.length&&t.goTo(r.index())})}),t.ev.on("rsOnAppendSlide",function(e,r,i){i>=t.numSlides?t._controlNav.append(n):t._controlNavItems.eq(i).before(n),t._controlNavItems=t._controlNav.children()}),t.ev.on("rsOnRemoveSlide",function(e,n){var r=t._controlNavItems.eq(n);r&&(r.remove(),t._controlNavItems=t._controlNav.children())}),t.ev.on("rsOnUpdateNav",function(){var n=t.currSlideId,r,i;t._prevNavItem&&t._prevNavItem.removeClass("rsNavSelected"),r=e(t._controlNavItems[n]),r.addClass("rsNavSelected"),t._prevNavItem=r})}}}),e.rsModules.bullets=e.rsProto._initBullets})(jQuery);