$(document).on("ready",function(){$.when(!function(t,e,n){var i,o=t.getElementsByTagName(e)[0],s=document.location.protocol;t.getElementById(n)||(i=t.createElement(e),i.id=n,i.src=s+"//platform.twitter.com/widgets.js",o.parentNode.insertBefore(i,o))}(document,"script","twitter-wjs")).then(function(){var t=1500;setTimeout(function(){try{var t=$("#twitter-widget-0"),e=t.contents().find(".e-entry-content")[0].innerHTML;document.getElementById("tweet1").innerHTML=e}catch(n){document.getElementById("tweet1").innerHTML='<a href="https://twitter.com/flatironschool">Flatiron School Twitter</a>'}},t)})});