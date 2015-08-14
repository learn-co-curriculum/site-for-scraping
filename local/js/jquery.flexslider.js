/*
 * jQuery FlexSlider v2.1
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 WooThemes
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Contributing author: Tyler Smith (@mbmufffin)
 */
!function(t){t.flexslider=function(e,n){var i=t(e),o=t.extend({},t.flexslider.defaults,n),r=o.namespace,s="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,a=s?"touchend":"click",l="vertical"===o.direction,c=o.reverse,u=o.itemWidth>0,h="fade"===o.animation,p=""!==o.asNavFor,d={};t.data(e,"flexslider",i),d={init:function(){i.animating=!1,i.currentSlide=o.startAt,i.animatingTo=i.currentSlide,i.atEnd=0===i.currentSlide||i.currentSlide===i.last,i.containerSelector=o.selector.substr(0,o.selector.search(" ")),i.slides=t(o.selector,i),i.container=t(i.containerSelector,i),i.count=i.slides.length,i.syncExists=t(o.sync).length>0,"slide"===o.animation&&(o.animation="swing"),i.prop=l?"top":"marginLeft",i.args={},i.manualPause=!1,i.transitions=!o.video&&!h&&o.useCSS&&function(){var t=document.createElement("div"),e=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in e)if(void 0!==t.style[e[n]])return i.pfx=e[n].replace("Perspective","").toLowerCase(),i.prop="-"+i.pfx+"-transform",!0;return!1}(),""!==o.controlsContainer&&(i.controlsContainer=t(o.controlsContainer).length>0&&t(o.controlsContainer)),""!==o.manualControls&&(i.manualControls=t(o.manualControls).length>0&&t(o.manualControls)),o.randomize&&(i.slides.sort(function(){return Math.round(Math.random())-.5}),i.container.empty().append(i.slides)),i.doMath(),p&&d.asNav.setup(),i.setup("init"),o.controlNav&&d.controlNav.setup(),o.directionNav&&d.directionNav.setup(),o.keyboard&&(1===t(i.containerSelector).length||o.multipleKeyboard)&&t(document).bind("keyup",function(t){var e=t.keyCode;if(!i.animating&&(39===e||37===e)){var n=39===e?i.getTarget("next"):37===e?i.getTarget("prev"):!1;i.flexAnimate(n,o.pauseOnAction)}}),o.mousewheel&&i.bind("mousewheel",function(t,e){t.preventDefault();var n=i.getTarget(0>e?"next":"prev");i.flexAnimate(n,o.pauseOnAction)}),o.pausePlay&&d.pausePlay.setup(),o.slideshow&&(o.pauseOnHover&&i.hover(function(){i.manualPlay||i.manualPause||i.pause()},function(){i.manualPause||i.manualPlay||i.play()}),o.initDelay>0?setTimeout(i.play,o.initDelay):i.play()),s&&o.touch&&d.touch(),(!h||h&&o.smoothHeight)&&t(window).bind("resize focus",d.resize),setTimeout(function(){o.start(i)},200)},asNav:{setup:function(){i.asNav=!0,i.animatingTo=Math.floor(i.currentSlide/i.move),i.currentItem=i.currentSlide,i.slides.removeClass(r+"active-slide").eq(i.currentItem).addClass(r+"active-slide"),i.slides.click(function(e){e.preventDefault();var n=t(this),r=n.index();t(o.asNavFor).data("flexslider").animating||n.hasClass("active")||(i.direction=i.currentItem<r?"next":"prev",i.flexAnimate(r,o.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){i.manualControls?d.controlNav.setupManual():d.controlNav.setupPaging()},setupPaging:function(){var e,n="thumbnails"===o.controlNav?"control-thumbs":"control-paging",l=1;if(i.controlNavScaffold=t('<ol class="'+r+"control-nav "+r+n+'"></ol>'),i.pagingCount>1)for(var c=0;c<i.pagingCount;c++)e="thumbnails"===o.controlNav?'<img src="'+i.slides.eq(c).attr("data-thumb")+'"/>':"<a>"+l+"</a>",i.controlNavScaffold.append("<li>"+e+"</li>"),l++;i.controlsContainer?t(i.controlsContainer).append(i.controlNavScaffold):i.append(i.controlNavScaffold),d.controlNav.set(),d.controlNav.active(),i.controlNavScaffold.delegate("a, img",a,function(e){e.preventDefault();var n=t(this),s=i.controlNav.index(n);n.hasClass(r+"active")||(i.direction=s>i.currentSlide?"next":"prev",i.flexAnimate(s,o.pauseOnAction))}),s&&i.controlNavScaffold.delegate("a","click touchstart",function(t){t.preventDefault()})},setupManual:function(){i.controlNav=i.manualControls,d.controlNav.active(),i.controlNav.live(a,function(e){e.preventDefault();var n=t(this),s=i.controlNav.index(n);n.hasClass(r+"active")||(i.direction=s>i.currentSlide?"next":"prev",i.flexAnimate(s,o.pauseOnAction))}),s&&i.controlNav.live("click touchstart",function(t){t.preventDefault()})},set:function(){var e="thumbnails"===o.controlNav?"img":"a";i.controlNav=t("."+r+"control-nav li "+e,i.controlsContainer?i.controlsContainer:i)},active:function(){i.controlNav.removeClass(r+"active").eq(i.animatingTo).addClass(r+"active")},update:function(e,n){i.pagingCount>1&&"add"===e?i.controlNavScaffold.append(t("<li><a>"+i.count+"</a></li>")):1===i.pagingCount?i.controlNavScaffold.find("li").remove():i.controlNav.eq(n).closest("li").remove(),d.controlNav.set(),i.pagingCount>1&&i.pagingCount!==i.controlNav.length?i.update(n,e):d.controlNav.active()}},directionNav:{setup:function(){var e=t('<ul class="'+r+'direction-nav"><li><a class="'+r+'prev" href="#">'+o.prevText+'</a></li><li><a class="'+r+'next" href="#">'+o.nextText+"</a></li></ul>");i.controlsContainer?(t(i.controlsContainer).append(e),i.directionNav=t("."+r+"direction-nav li a",i.controlsContainer)):(i.append(e),i.directionNav=t("."+r+"direction-nav li a",i)),d.directionNav.update(),i.directionNav.bind(a,function(e){e.preventDefault();var n=i.getTarget(t(this).hasClass(r+"next")?"next":"prev");i.flexAnimate(n,o.pauseOnAction)}),s&&i.directionNav.bind("click touchstart",function(t){t.preventDefault()})},update:function(){var t=r+"disabled";1===i.pagingCount?i.directionNav.addClass(t):o.animationLoop?i.directionNav.removeClass(t):0===i.animatingTo?i.directionNav.removeClass(t).filter("."+r+"prev").addClass(t):i.animatingTo===i.last?i.directionNav.removeClass(t).filter("."+r+"next").addClass(t):i.directionNav.removeClass(t)}},pausePlay:{setup:function(){var e=t('<div class="'+r+'pauseplay"><a></a></div>');i.controlsContainer?(i.controlsContainer.append(e),i.pausePlay=t("."+r+"pauseplay a",i.controlsContainer)):(i.append(e),i.pausePlay=t("."+r+"pauseplay a",i)),d.pausePlay.update(o.slideshow?r+"pause":r+"play"),i.pausePlay.bind(a,function(e){e.preventDefault(),t(this).hasClass(r+"pause")?(i.manualPause=!0,i.manualPlay=!1,i.pause()):(i.manualPause=!1,i.manualPlay=!0,i.play())}),s&&i.pausePlay.bind("click touchstart",function(t){t.preventDefault()})},update:function(t){"play"===t?i.pausePlay.removeClass(r+"pause").addClass(r+"play").text(o.playText):i.pausePlay.removeClass(r+"play").addClass(r+"pause").text(o.pauseText)}},touch:function(){function t(t){i.animating?t.preventDefault():1===t.touches.length&&(i.pause(),d=l?i.h:i.w,m=Number(new Date),p=u&&c&&i.animatingTo===i.last?0:u&&c?i.limit-(i.itemW+o.itemMargin)*i.move*i.animatingTo:u&&i.currentSlide===i.last?i.limit:u?(i.itemW+o.itemMargin)*i.move*i.currentSlide:c?(i.last-i.currentSlide+i.cloneOffset)*d:(i.currentSlide+i.cloneOffset)*d,s=l?t.touches[0].pageY:t.touches[0].pageX,a=l?t.touches[0].pageX:t.touches[0].pageY,e.addEventListener("touchmove",n,!1),e.addEventListener("touchend",r,!1))}function n(t){f=l?s-t.touches[0].pageY:s-t.touches[0].pageX,g=l?Math.abs(f)<Math.abs(t.touches[0].pageX-a):Math.abs(f)<Math.abs(t.touches[0].pageY-a),(!g||Number(new Date)-m>500)&&(t.preventDefault(),!h&&i.transitions&&(o.animationLoop||(f/=0===i.currentSlide&&0>f||i.currentSlide===i.last&&f>0?Math.abs(f)/d+2:1),i.setProps(p+f,"setTouch")))}function r(){if(e.removeEventListener("touchmove",n,!1),i.animatingTo===i.currentSlide&&!g&&null!==f){var t=c?-f:f,l=i.getTarget(t>0?"next":"prev");i.canAdvance(l)&&(Number(new Date)-m<550&&Math.abs(t)>50||Math.abs(t)>d/2)?i.flexAnimate(l,o.pauseOnAction):h||i.flexAnimate(i.currentSlide,o.pauseOnAction,!0)}e.removeEventListener("touchend",r,!1),s=null,a=null,f=null,p=null}var s,a,p,d,f,m,g=!1;e.addEventListener("touchstart",t,!1)},resize:function(){!i.animating&&i.is(":visible")&&(u||i.doMath(),h?d.smoothHeight():u?(i.slides.width(i.computedW),i.update(i.pagingCount),i.setProps()):l?(i.viewport.height(i.h),i.setProps(i.h,"setTotal")):(o.smoothHeight&&d.smoothHeight(),i.newSlides.width(i.computedW),i.setProps(i.computedW,"setTotal")))},smoothHeight:function(t){if(!l||h){var e=h?i:i.viewport;t?e.animate({height:i.slides.eq(i.animatingTo).height()},t):e.height(i.slides.eq(i.animatingTo).height())}},sync:function(e){var n=t(o.sync).data("flexslider"),r=i.animatingTo;switch(e){case"animate":n.flexAnimate(r,o.pauseOnAction,!1,!0);break;case"play":n.playing||n.asNav||n.play();break;case"pause":n.pause()}}},i.flexAnimate=function(e,n,a,f,m){if(p&&1===i.pagingCount&&(i.direction=i.currentItem<e?"next":"prev"),!i.animating&&(i.canAdvance(e,m)||a)&&i.is(":visible")){if(p&&f){var g=t(o.asNavFor).data("flexslider");if(i.atEnd=0===e||e===i.count-1,g.flexAnimate(e,!0,!1,!0,m),i.direction=i.currentItem<e?"next":"prev",g.direction=i.direction,Math.ceil((e+1)/i.visible)-1===i.currentSlide||0===e)return i.currentItem=e,i.slides.removeClass(r+"active-slide").eq(e).addClass(r+"active-slide"),!1;i.currentItem=e,i.slides.removeClass(r+"active-slide").eq(e).addClass(r+"active-slide"),e=Math.floor(e/i.visible)}if(i.animating=!0,i.animatingTo=e,o.before(i),n&&i.pause(),i.syncExists&&!m&&d.sync("animate"),o.controlNav&&d.controlNav.active(),u||i.slides.removeClass(r+"active-slide").eq(e).addClass(r+"active-slide"),i.atEnd=0===e||e===i.last,o.directionNav&&d.directionNav.update(),e===i.last&&(o.end(i),o.animationLoop||i.pause()),h)i.slides.eq(i.currentSlide).fadeOut(o.animationSpeed,o.easing),i.slides.eq(e).fadeIn(o.animationSpeed,o.easing,i.wrapup),s&&(i.slides.unbind("webkitTransitionEnd transitionend"),i.slides.eq(i.currentSlide).bind("webkitTransitionEnd transitionend",function(){o.after(i)}),i.animating=!1,i.currentSlide=i.animatingTo);else{var v,y,b,x=l?i.slides.filter(":first").height():i.computedW;u?(v=o.itemWidth>i.w?2*o.itemMargin:o.itemMargin,b=(i.itemW+v)*i.move*i.animatingTo,y=b>i.limit&&1!==i.visible?i.limit:b):y=0===i.currentSlide&&e===i.count-1&&o.animationLoop&&"next"!==i.direction?c?(i.count+i.cloneOffset)*x:0:i.currentSlide===i.last&&0===e&&o.animationLoop&&"prev"!==i.direction?c?0:(i.count+1)*x:c?(i.count-1-e+i.cloneOffset)*x:(e+i.cloneOffset)*x,i.setProps(y,"",o.animationSpeed),i.transitions?(o.animationLoop&&i.atEnd||(i.animating=!1,i.currentSlide=i.animatingTo),i.container.unbind("webkitTransitionEnd transitionend"),i.container.bind("webkitTransitionEnd transitionend",function(){i.wrapup(x)})):i.container.animate(i.args,o.animationSpeed,o.easing,function(){i.wrapup(x)})}o.smoothHeight&&d.smoothHeight(o.animationSpeed)}},i.wrapup=function(t){h||u||(0===i.currentSlide&&i.animatingTo===i.last&&o.animationLoop?i.setProps(t,"jumpEnd"):i.currentSlide===i.last&&0===i.animatingTo&&o.animationLoop&&i.setProps(t,"jumpStart")),i.animating=!1,i.currentSlide=i.animatingTo,o.after(i)},i.animateSlides=function(){i.animating||i.flexAnimate(i.getTarget("next"))},i.pause=function(){clearInterval(i.animatedSlides),i.playing=!1,o.pausePlay&&d.pausePlay.update("play"),i.syncExists&&d.sync("pause")},i.play=function(){i.animatedSlides=setInterval(i.animateSlides,o.slideshowSpeed),i.playing=!0,o.pausePlay&&d.pausePlay.update("pause"),i.syncExists&&d.sync("play")},i.canAdvance=function(t,e){var n=p?i.pagingCount-1:i.last;return e?!0:p&&i.currentItem===i.count-1&&0===t&&"prev"===i.direction?!0:p&&0===i.currentItem&&t===i.pagingCount-1&&"next"!==i.direction?!1:t!==i.currentSlide||p?o.animationLoop?!0:i.atEnd&&0===i.currentSlide&&t===n&&"next"!==i.direction?!1:i.atEnd&&i.currentSlide===n&&0===t&&"next"===i.direction?!1:!0:!1},i.getTarget=function(t){return i.direction=t,"next"===t?i.currentSlide===i.last?0:i.currentSlide+1:0===i.currentSlide?i.last:i.currentSlide-1},i.setProps=function(t,e,n){var r=function(){var n=t?t:(i.itemW+o.itemMargin)*i.move*i.animatingTo,r=function(){if(u)return"setTouch"===e?t:c&&i.animatingTo===i.last?0:c?i.limit-(i.itemW+o.itemMargin)*i.move*i.animatingTo:i.animatingTo===i.last?i.limit:n;switch(e){case"setTotal":return c?(i.count-1-i.currentSlide+i.cloneOffset)*t:(i.currentSlide+i.cloneOffset)*t;case"setTouch":return c?t:t;case"jumpEnd":return c?t:i.count*t;case"jumpStart":return c?i.count*t:t;default:return t}}();return-1*r+"px"}();i.transitions&&(r=l?"translate3d(0,"+r+",0)":"translate3d("+r+",0,0)",n=void 0!==n?n/1e3+"s":"0s",i.container.css("-"+i.pfx+"-transition-duration",n)),i.args[i.prop]=r,(i.transitions||void 0===n)&&i.container.css(i.args)},i.setup=function(e){if(h)i.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&i.slides.eq(i.currentSlide).fadeIn(o.animationSpeed,o.easing),o.smoothHeight&&d.smoothHeight();else{var n,s;"init"===e&&(i.viewport=t('<div class="'+r+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(i).append(i.container),i.cloneCount=0,i.cloneOffset=0,c&&(s=t.makeArray(i.slides).reverse(),i.slides=t(s),i.container.empty().append(i.slides))),o.animationLoop&&!u&&(i.cloneCount=2,i.cloneOffset=1,"init"!==e&&i.container.find(".clone").remove(),i.container.append(i.slides.first().clone().addClass("clone")).prepend(i.slides.last().clone().addClass("clone"))),i.newSlides=t(o.selector,i),n=c?i.count-1-i.currentSlide+i.cloneOffset:i.currentSlide+i.cloneOffset,l&&!u?(i.container.height(200*(i.count+i.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){i.newSlides.css({display:"block"}),i.doMath(),i.viewport.height(i.h),i.setProps(n*i.h,"init")},"init"===e?100:0)):(i.container.width(200*(i.count+i.cloneCount)+"%"),i.setProps(n*i.computedW,"init"),setTimeout(function(){i.doMath(),i.newSlides.css({width:i.computedW,"float":"left",display:"block"}),o.smoothHeight&&d.smoothHeight()},"init"===e?100:0))}u||i.slides.removeClass(r+"active-slide").eq(i.currentSlide).addClass(r+"active-slide")},i.doMath=function(){var t=i.slides.first(),e=o.itemMargin,n=o.minItems,r=o.maxItems;i.w=i.width(),i.h=t.height(),i.boxPadding=t.outerWidth()-t.width(),u?(i.itemT=o.itemWidth+e,i.minW=n?n*i.itemT:i.w,i.maxW=r?r*i.itemT:i.w,i.itemW=i.minW>i.w?(i.w-e*n)/n:i.maxW<i.w?(i.w-e*r)/r:o.itemWidth>i.w?i.w:o.itemWidth,i.visible=Math.floor(i.w/(i.itemW+e)),i.move=o.move>0&&o.move<i.visible?o.move:i.visible,i.pagingCount=Math.ceil((i.count-i.visible)/i.move+1),i.last=i.pagingCount-1,i.limit=1===i.pagingCount?0:o.itemWidth>i.w?(i.itemW+2*e)*i.count-i.w-e:(i.itemW+e)*i.count-i.w-e):(i.itemW=i.w,i.pagingCount=i.count,i.last=i.count-1),i.computedW=i.itemW-i.boxPadding},i.update=function(t,e){i.doMath(),u||(t<i.currentSlide?i.currentSlide+=1:t<=i.currentSlide&&0!==t&&(i.currentSlide-=1),i.animatingTo=i.currentSlide),o.controlNav&&!i.manualControls&&("add"===e&&!u||i.pagingCount>i.controlNav.length?d.controlNav.update("add"):("remove"===e&&!u||i.pagingCount<i.controlNav.length)&&(u&&i.currentSlide>i.last&&(i.currentSlide-=1,i.animatingTo-=1),d.controlNav.update("remove",i.last))),o.directionNav&&d.directionNav.update()},i.addSlide=function(e,n){var r=t(e);i.count+=1,i.last=i.count-1,l&&c?void 0!==n?i.slides.eq(i.count-n).after(r):i.container.prepend(r):void 0!==n?i.slides.eq(n).before(r):i.container.append(r),i.update(n,"add"),i.slides=t(o.selector+":not(.clone)",i),i.setup(),o.added(i)},i.removeSlide=function(e){var n=isNaN(e)?i.slides.index(t(e)):e;i.count-=1,i.last=i.count-1,isNaN(e)?t(e,i.slides).remove():l&&c?i.slides.eq(i.last).remove():i.slides.eq(e).remove(),i.doMath(),i.update(n,"remove"),i.slides=t(o.selector+":not(.clone)",i),i.setup(),o.removed(i)},d.init()},t.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}},t.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var n=t(this),i=e.selector?e.selector:".slides > li",o=n.find(i);1===o.length?(o.fadeIn(400),e.start&&e.start(n)):void 0==n.data("flexslider")&&new t.flexslider(this,e)});var n=t(this).data("flexslider");switch(e){case"play":n.play();break;case"pause":n.pause();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;default:"number"==typeof e&&n.flexAnimate(e,!0)}}}(jQuery);