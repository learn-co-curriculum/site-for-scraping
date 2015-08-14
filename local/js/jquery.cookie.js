/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(t){return a.raw?t:encodeURIComponent(t)}function n(t){return a.raw?t:decodeURIComponent(t)}function i(t){return e(a.json?JSON.stringify(t):String(t))}function o(t){0===t.indexOf('"')&&(t=t.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{t=decodeURIComponent(t.replace(s," "))}catch(e){return}try{return a.json?JSON.parse(t):t}catch(e){}}function r(e,n){var i=a.raw?e:o(e);return t.isFunction(n)?n(i):i}var s=/\+/g,a=t.cookie=function(o,s,l){if(void 0!==s&&!t.isFunction(s)){if(l=t.extend({},a.defaults,l),"number"==typeof l.expires){var c=l.expires,u=l.expires=new Date;u.setDate(u.getDate()+c)}return document.cookie=[e(o),"=",i(s),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var h=o?void 0:{},p=document.cookie?document.cookie.split("; "):[],d=0,f=p.length;f>d;d++){var m=p[d].split("="),g=n(m.shift()),v=m.join("=");if(o&&o===g){h=r(v,s);break}o||void 0===(v=r(v))||(h[g]=v)}return h};a.defaults={},t.removeCookie=function(e,n){return void 0!==t.cookie(e)?(t.cookie(e,"",t.extend({},n,{expires:-1})),!0):!1}});