!function(){function e(e,t,n){function o(e,t,n,r,u,i){if(0>=n)return void window.scrollTo(e,t);var c=u+i-(new Date).getTime();setTimeout(function(){o(e,t,n-u*r,r,u,i+u)},c>0?c:0);var s=u/n,l=(e-(document.documentElement.scrollLeft||document.body.scrollLeft))*s,d=(t-(document.documentElement.scrollTop||document.body.scrollTop))*s;window.scrollBy(l,d)}e.preventDefault?e.preventDefault():e.returnValue=!1,"top"==t?y=0:(y=document.getElementById(t).offsetTop,y=y),o(0,y,500,1,25,(new Date).getTime())}function t(e,t){request=new XMLHttpRequest,request.open("GET",e,!0),request.onload=function(){t(request.status>=200&&request.status<400?request.responseText:"")},request.onerror=function(){t("")},request.send()}document.addEventListener("DOMContentLoaded",function(){arrow=document.getElementById("arrow"),arrow&&arrow.addEventListener("click",function(t){e(t,"blogs")}),function(){footer=document.getElementById("footer"),footer&&t("../footer.html",function(e){footer.innerHTML=e})}(),function(){function e(){var e=document.getElementsByClassName("aboutmenu")[0],t=[],n=0;if(e){for(var o in e.childNodes){var r=e.childNodes[o];1==r.nodeType&&(t[n]=r,n++)}return t}return null}function t(){var t=e();for(var n in t)t[n].className="",document.getElementById(t[n].id+"info").style.display="none"}function n(){t(),this.className="active",document.getElementById(this.id+"info").style.display="block"}var o=e();if(o){for(var r in o)o[r].addEventListener("click",n);t(),document.getElementById("resume").click()}}();var n=function(){var e=document.createElement("div"),t="Khtml Ms O Moz Webkit".split(" "),n=t.length;return function(o){if(o in e.style)return!0;for(o=o.replace(/^[a-z]/,function(e){return e.toUpperCase()});n--;)if(t[n]+o in e.style)return!0;return!1}}();n("boxShadow")||alert("You wouldn't see this site right! \n\nGet a modern browser like: Firefox or Chrome!")})}();
!function(){function e(){el=document.getElementById("prjDetails"),hiddenPos=(document.documentElement.scrollTop||document.body.scrollTop)+window.innerHeight,n(el,hiddenPos,5,!0),window.onscroll=""}function t(t){var a=document.getElementById("prjDetails"),o=document.getElementById("detail-prjName"),s=document.getElementById("detail-prjDesc"),l=document.getElementById("detail-prjUrl"),i=document.getElementById("detail-prjImg");if("block"==a.style.display)return void e();switch(o.textContent=t.name,i.src=t.img,i.alt=t.name,l.href=t.url,t.id){case"easygd":s.innerHTML="<p>Easy GD is a project that uses Google Drive API to manage files on your Google Drive Account. It's just a simple project, doesn't have special features. The main goal of this project is to show how simple is to work with Google Drive API.</p>";break;case"footnotes":s.innerHTML="<p>A piece of JavaScript/JQuery code that shows notes about something in your website. The best way to understand is to <a href='https://github.com/sheldonled/footnotes' target='_blank'>Take a look</a>.</p>";break;case"coplacar":s.innerHTML="<p>Coplacar is a webapp that shows the placar of the world cup games of 2014. It all started with a piece of code of professor Fernando Masanori called <a href='https://gist.github.com/fmasanori/1288160dad16cc473a53' target='_blank'>World Cup in six lines of Python 3</a>, I saw the link that retrieves the results of the matches in a json file, so I decided to make an app with it.</p>";break;case"fgsl":s.innerHTML="<p>A webapp that shows information about a local event in Goiânia - Goiás, called <a href=http://fgsl.net' target='_blank'>FGSL (Fórum Goiano de Software Livre)</a>.</p> ";break;case"playcompras":s.innerHTML="<p>A webapp that allows users to add items in a list and see the total money they'll waste.</p>";break;case"musicfun":s.innerHTML="<p>A webapp sample using oscilator from Web Audio API</p>";break;case"alfanotas":s.innerHTML="<p>A webapp that allows students from <a href='http://www.alfa.br' target='_blank'>Faculdade Alfa</a> calculate their grade.</p>";break;case"rap":s.innerHTML="<p>It's a kind of boilerplate, or Proof of Concept, of how to use REST with PHP and make an API to access using AngularJS</p><p>RAP extends for REST AngularJS and PHP</p>";break;case"boletocheck":s.innerHTML="<p>It's a piece of PHP code that checks the sequence of numbers code of a bank slip and output the values so that you can check if it's all right with the bank slip itself.</p>";break;case"semed":s.innerHTML="<p>My work on this project was to develop a WordPress Theme, based on the desing created by the client ideas.</p><div class='tech'><span>PHP</span><span>WordPress</span><span>MySQL</span><span>HTML</span><span>JavaScript</span><span>JQuery</span><span>CSS</span></div>";break;case"flisol":s.innerHTML="<p>My work on this project was to develop the visual of the website using just CSS, based on the HTML structure provided by <a href='https://github.com/cercomp/weby' target='_blank'>Weby's</a> blank theme. Also I was responsible for all content management during the event.</p><div class='tech'><span>JavaScript</span><span>JQuery</span><span>CSS</span></div>";break;case"labsantaines":s.innerHTML="<p>My work on this project was first, to develop a Joomla Template, using the design developed by <a href='http://www.ederferreira.com.br/' target='_blank'>Eder Ferreira</a>. After, I developed 2 Joomla Components (Curriculum subscribe and Costumers subscribe) and one module (Disease Internacinal Code Searching).</p><div class='tech'><span>PHP</span><span>Joomla</span><span>MySQL</span><span>HTML</span><span>JavaScript</span><span>JQuery</span><span>CSS</span></div>";break;default:s.innerHTML="<p>=)</p>"}hiddenPos=(document.documentElement.scrollTop||document.body.scrollTop)+window.innerHeight,a.style.display="block",a.style.top=hiddenPos+"px",n(a,document.documentElement.scrollTop||document.body.scrollTop,5),window.onscroll=function(){document.getElementById("prjDetails").style.top=(document.documentElement.scrollTop||document.body.scrollTop)+"px"}}function n(e,t,a,o){return elTop=parseInt(e.style.top),elTop==t?void(o&&(e.style.display="none")):Math.abs(elTop-t)<25?(e.style.top=t+"px",void(o&&(e.style.display="none"))):(e.style.top=(elTop>t?elTop-20:elTop<t?elTop+20:t)+"px",void setTimeout(function(){n(e,t,a,o)},a))}window.onload=function(){document.querySelectorAll("#prjDetails .close")[0].addEventListener("click",function(t){e()}),document.querySelectorAll(".easygd img")[0].addEventListener("click",function(e){t({id:"easygd",name:"Easy GD",img:"assets/img/easygd.png",url:"https://github.com/sheldonled/easygd"})}),document.querySelectorAll(".footnotes img")[0].addEventListener("click",function(e){t({id:"footnotes",name:"FootNotes",img:"assets/img/footnotes.png",url:"https://github.com/sheldonled/footnotes"})}),document.querySelectorAll(".coplacar img")[0].addEventListener("click",function(e){t({id:"coplacar",name:"Coplacar",img:"assets/img/coplacar.png",url:"https://github.com/sheldonled/coplacar"})}),document.querySelectorAll(".fgsl img")[0].addEventListener("click",function(e){t({id:"fgsl",name:"FGSL",img:"assets/img/fgsl.png",url:"https://github.com/sheldonled/fgslwebapp"})}),document.querySelectorAll(".playcompras img")[0].addEventListener("click",function(e){t({id:"playcompras",name:"Play Compras",img:"assets/img/playcompras.png",url:"https://github.com/sheldonled/playcompras"})}),document.querySelectorAll(".musicfun img")[0].addEventListener("click",function(e){t({id:"musicfun",name:"Music Fun",img:"assets/img/musicfun.png",url:"https://github.com/sheldonled/musicfun"})}),document.querySelectorAll(".alfanotas img")[0].addEventListener("click",function(e){t({id:"alfanotas",name:"Alfa Notas",img:"assets/img/alfanotas.png",url:"https://github.com/sheldonled/alfanotas"})}),document.querySelectorAll(".rap img")[0].addEventListener("click",function(e){t({id:"rap",name:"RAP",img:"assets/img/rap.png",url:"https://github.com/sheldonled/rap"})}),document.querySelectorAll(".boletocheck img")[0].addEventListener("click",function(e){t({id:"boletocheck",name:"Boleto Check",img:"assets/img/boletocheck.png",url:"https://github.com/sheldonled/boletocheck"})}),document.querySelectorAll(".semed img")[0].addEventListener("click",function(e){t({id:"semed",name:"SEMED",img:"assets/img/semed.png",url:"http://projetos.ledlabs.com.br/semed"})}),document.querySelectorAll(".flisol img")[0].addEventListener("click",function(e){t({id:"flisol",name:"FLISOL 2016",img:"assets/img/flisol.png",url:"http://gyn.flisol.fgsl.net/"})}),document.querySelectorAll(".labsantaines img")[0].addEventListener("click",function(e){t({id:"labsantaines",name:"Laboratório Santa Inês",img:"assets/img/labsantaines.png",url:"http://www.labsantaines.com/novosite/"})})},document.onkeyup=function(t){27==t.keyCode&&e()}}();