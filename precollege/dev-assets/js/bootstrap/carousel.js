/* ========================================================================
 * Bootstrap: carousel.js v3.2.0
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.carousel"),s=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e),r="string"==typeof e?e:s.slide;o||i.data("bs.carousel",o=new n(this,s)),"number"==typeof e?o.to(e):r?o[r]():s.interval&&o.pause().cycle()})}var n=function(e,n){this.$element=t(e).on("keydown.bs.carousel",t.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};n.VERSION="3.2.0",n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},n.prototype.keydown=function(t){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()},n.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},n.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},n.prototype.to=function(e){var n=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){n.to(e)}):i==e?this.pause().cycle():this.slide(e>i?"next":"prev",t(this.$items[e]))},n.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},n.prototype.next=function(){return this.sliding?void 0:this.slide("next")},n.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},n.prototype.slide=function(e,n){var i=this.$element.find(".item.active"),o=n||i[e](),s=this.interval,r="next"==e?"left":"right",a="next"==e?"first":"last",l=this;if(!o.length){if(!this.options.wrap)return;o=this.$element.find(".item")[a]()}if(o.hasClass("active"))return this.sliding=!1;var c=o[0],u=t.Event("slide.bs.carousel",{relatedTarget:c,direction:r});if(this.$element.trigger(u),!u.isDefaultPrevented()){if(this.sliding=!0,s&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=t(this.$indicators.children()[this.getItemIndex(o)]);h&&h.addClass("active")}var p=t.Event("slid.bs.carousel",{relatedTarget:c,direction:r});return t.support.transition&&this.$element.hasClass("slide")?(o.addClass(e),o[0].offsetWidth,i.addClass(r),o.addClass(r),i.one("bsTransitionEnd",function(){o.removeClass([e,r].join(" ")).addClass("active"),i.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(p)},0)}).emulateTransitionEnd(1e3*i.css("transition-duration").slice(0,-1))):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(p)),s&&this.cycle(),this}};var i=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=n,t.fn.carousel.noConflict=function(){return t.fn.carousel=i,this},t(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(n){var i,o=t(this),s=t(o.attr("data-target")||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var r=t.extend({},s.data(),o.data()),a=o.attr("data-slide-to");a&&(r.interval=!1),e.call(s,r),a&&s.data("bs.carousel").to(a),n.preventDefault()}}),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var n=t(this);e.call(n,n.data())})})}(jQuery);