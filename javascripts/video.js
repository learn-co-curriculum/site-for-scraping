$(document).on("ready",function(){if($("#school-video").length){var t=$("#school-video").get(0);document.getElementById("school-video").removeAttribute("controls"),$(".play-video").on("click",function(){return t.play(),$(this).css("visibility","hidden"),document.getElementById("school-video").setAttribute("controls","controls"),!1}),navigator.userAgent.indexOf("Android")>=0&&($("#android-play-video-container").css("visibility","visible"),document.getElementById("android-play-video-container").addEventListener("click",function(){$("#android-play-video-container").css("visibility","hidden"),document.getElementById("school-video").setAttribute("controls","controls"),t.paused||t.ended?t.play():t.pause()},!1))}else if($("#employer-video").length){var e=$("#employer-video").get(0);document.getElementById("employer-video").removeAttribute("controls"),$(".play-video").on("click",function(){return e.play(),$(this).css("visibility","hidden"),document.getElementById("employer-video").setAttribute("controls","controls"),!1}),navigator.userAgent.indexOf("Android")>=0&&($("#android-play-video-container").css("visibility","visible"),document.getElementById("android-play-video-container").addEventListener("click",function(){$("#android-play-video-container").css("visibility","hidden"),document.getElementById("employer-video").setAttribute("controls","controls"),e.paused||e.ended?e.play():e.pause()},!1))}else if($("#marketing-video").length){var n=$("#marketing-video").get(0);document.getElementById("marketing-video").removeAttribute("controls"),$(".play-video").on("click",function(){return n.play(),$(this).css("visibility","hidden"),$(".video-text-overlay").css("visibility","hidden"),document.getElementById("marketing-video").setAttribute("controls","controls"),!1}),navigator.userAgent.indexOf("Android")>=0&&($("#android-play-video-container").css("visibility","visible"),document.getElementById("android-play-video-container").addEventListener("click",function(){$("#android-play-video-container").css("visibility","hidden"),document.getElementById("marketing-video").setAttribute("controls","controls"),n.paused||n.ended?n.play():n.pause()},!1))}});