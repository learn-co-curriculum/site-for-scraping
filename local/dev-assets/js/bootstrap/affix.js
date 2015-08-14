/* ========================================================================
 * Bootstrap: affix.js v3.2.0
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),s=i.data("bs.affix"),o="object"==typeof e&&e;s||i.data("bs.affix",s=new n(this,o)),"string"==typeof e&&s[e]()})}var n=function(e,i){this.options=t.extend({},n.DEFAULTS,i),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};n.VERSION="3.2.0",n.RESET="affix affix-top affix-bottom",n.DEFAULTS={offset:0,target:window},n.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(n.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},n.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},n.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=t(document).height(),i=this.$target.scrollTop(),s=this.$element.offset(),o=this.options.offset,r=o.top,a=o.bottom;"object"!=typeof o&&(a=r=o),"function"==typeof r&&(r=o.top(this.$element)),"function"==typeof a&&(a=o.bottom(this.$element));var l=null!=this.unpin&&i+this.unpin<=s.top?!1:null!=a&&s.top+this.$element.height()>=e-a?"bottom":null!=r&&r>=i?"top":!1;if(this.affixed!==l){null!=this.unpin&&this.$element.css("top","");var c="affix"+(l?"-"+l:""),u=t.Event(c+".bs.affix");this.$element.trigger(u),u.isDefaultPrevented()||(this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(n.RESET).addClass(c).trigger(t.Event(c.replace("affix","affixed"))),"bottom"==l&&this.$element.offset({top:e-this.$element.height()-a}))}}};var i=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=n,t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var n=t(this),i=n.data();i.offset=i.offset||{},i.offsetBottom&&(i.offset.bottom=i.offsetBottom),i.offsetTop&&(i.offset.top=i.offsetTop),e.call(n,i)})})}(jQuery);