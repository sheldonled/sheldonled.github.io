!function(){function e(e,t){function n(e,t,o,r,i,u){if(0>=o)return window.scrollTo(e,t),void 0;var l=i+u-(new Date).getTime();setTimeout(function(){n(e,t,o-i*r,r,i,u+i)},l>0?l:0);var c=i/o,s=(e-(document.documentElement.scrollLeft||document.body.scrollLeft))*c,d=(t-(document.documentElement.scrollTop||document.body.scrollTop))*c;window.scrollBy(s,d)}e.preventDefault?e.preventDefault():e.returnValue=!1,time=500,x=0,"top"==t?y=0:(console.log(document.getElementById(t).offsetTop),y=document.getElementById(t).offsetTop,y=y),decelRate=1,interval=25,n(x,y,time,decelRate,interval,(new Date).getTime())}function t(e,t){request=new XMLHttpRequest,request.open("GET",e,!0),request.onload=function(){request.status>=200&&request.status<400?t(request.responseText):t("")},request.onerror=function(){t("")},request.send()}document.addEventListener("DOMContentLoaded",function(){arrow=document.getElementById("arrow"),arrow&&arrow.addEventListener("click",function(t){e(t,"blogs")}),function(){footer=document.getElementById("footer"),footer&&t("../footer.html",function(e){footer.innerHTML=e})}(),function(){function e(){var e=document.getElementsByClassName("aboutmenu")[0],t=[],n=0;if(e){for(var o in e.childNodes){var r=e.childNodes[o];1==r.nodeType&&(t[n]=r,n++)}return t}return null}function t(){var t=e();for(var n in t)t[n].className="",document.getElementById(t[n].id+"info").style.display="none"}function n(){t(),this.className="active",document.getElementById(this.id+"info").style.display="block"}var o=e();if(o){for(var r in o)o[r].addEventListener("click",n);t(),document.getElementById("resume").click()}}();var n=function(){var e=document.createElement("div"),t="Khtml Ms O Moz Webkit".split(" "),n=t.length;return function(o){if(o in e.style)return!0;for(o=o.replace(/^[a-z]/,function(e){return e.toUpperCase()});n--;)if(t[n]+o in e.style)return!0;return!1}}();n("boxShadow")||alert("You wouldn't see this site right! \n\nGet a modern browser like: Firefox or Chrome!")})}();