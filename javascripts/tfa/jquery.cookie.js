/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){function e(t){return a.raw?t:encodeURIComponent(t)}function n(t){return a.raw?t:decodeURIComponent(t)}function i(t){return e(a.json?JSON.stringify(t):String(t))}function s(t){0===t.indexOf('"')&&(t=t.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return t=decodeURIComponent(t.replace(r," ")),a.json?JSON.parse(t):t}catch(e){}}function o(e,n){var i=a.raw?e:s(e);return t.isFunction(n)?n(i):i}var r=/\+/g,a=t.cookie=function(s,r,l){if(arguments.length>1&&!t.isFunction(r)){if(l=t.extend({},a.defaults,l),"number"==typeof l.expires){var c=l.expires,u=l.expires=new Date;u.setTime(+u+864e5*c)}return document.cookie=[e(s),"=",i(r),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var h=s?void 0:{},p=document.cookie?document.cookie.split("; "):[],d=0,f=p.length;f>d;d++){var m=p[d].split("="),g=n(m.shift()),v=m.join("=");if(s&&s===g){h=o(v,r);break}s||void 0===(v=o(v))||(h[g]=v)}return h};a.defaults={},t.removeCookie=function(e,n){return void 0===t.cookie(e)?!1:(t.cookie(e,"",t.extend({},n,{expires:-1})),!t.cookie(e))}});