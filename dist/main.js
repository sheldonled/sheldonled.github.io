!function(){document.addEventListener("DOMContentLoaded",function(){arrow=document.getElementById("arrow"),arrow&&arrow.addEventListener("click",function(e){slideTo(e,"blogs")}),function(){function e(){var e=document.getElementsByClassName("aboutmenu")[0],n=[],t=0;if(e){for(var r in e.childNodes){var o=e.childNodes[r];1==o.nodeType&&(n[t]=o,t++)}return n}return null}function n(){var n=e();for(var t in n)n[t].className="",document.getElementById(n[t].id+"info").style.display="none"}function t(){n(),this.className="active",document.getElementById(this.id+"info").style.display="block"}var r=e();if(r){for(var o in r)r[o].addEventListener("click",t);n(),document.getElementById("resume").click()}}();var e=function(){var e=document.createElement("div"),n="Khtml Ms O Moz Webkit".split(" "),t=n.length;return function(r){if(r in e.style)return!0;for(r=r.replace(/^[a-z]/,function(e){return e.toUpperCase()});t--;)if(n[t]+r in e.style)return!0;return!1}}();e("boxShadow")||alert("You wouldn't see this site right! \n\nGet a modern browser like: Firefox or Chrome!")})}();
!function(){function e(){el=document.getElementById("prjDetails"),hiddenPos=(document.documentElement.scrollTop||document.body.scrollTop)+window.innerHeight,t(el,hiddenPos,5,!0),window.onscroll=""}function a(a){var o=document.getElementById("prjDetails"),n=document.getElementById("detail-prjName"),s=document.getElementById("detail-prjDesc"),i=document.getElementById("detail-prjUrl"),r=document.getElementById("detail-prjImg");if("block"==o.style.display)return void e();switch(n.textContent=a.name,r.src=a.img,r.alt=a.name,i.href=a.url,a.id){case"easygd":s.innerHTML="<p>Easy GD is a project that uses Google Drive API to manage files on your Google Drive Account. It's just a simple project, doesn't have special features. The main goal of this project is to show how simple is to work with Google Drive API.</p>";break;case"footnotes":s.innerHTML="<p>A piece of JavaScript/JQuery code that shows notes about something in your website. The best way to understand is to <a href='http://github.sheldonled.com/footnotes' target='_blank'>Take a look</a>.</p>";break;case"coplacar":s.innerHTML="<p>Coplacar is a webapp that shows the placar of the world cup games of 2014. It all started with a piece of code of professor Fernando Masanori called <a href='https://gist.github.com/fmasanori/1288160dad16cc473a53' target='_blank'>World Cup in six lines of Python 3</a>, I saw the link that retrieves the results of the matches in a json file, so I decided to make an app with it.</p>";break;case"fgsl":s.innerHTML="<p>A webapp that shows information about a local event in Goiânia - Goiás, called <a href=http://fgsl.net' target='_blank'>FGSL (Fórum Goiano de Software Livre)</a>.</p> ";break;case"playcompras":s.innerHTML="<p>A webapp that allows users to add items in a list and see the total money they'll waste.</p>";break;case"musicfun":s.innerHTML="<p>A webapp sample using oscilator from Web Audio API</p>";break;case"alfanotas":s.innerHTML="<p>A webapp that allows students from <a href='http://www.alfa.br' target='_blank'>Faculdade Alfa</a> calculate their grade.</p>";break;case"rap":s.innerHTML="<p>It's a kind of boilerplate, or Proof of Concept, of how to use REST with PHP and make an API to access using AngularJS</p><p>RAP extends for REST AngularJS and PHP</p>";break;case"boletocheck":s.innerHTML="<p>It's a piece of PHP code that checks the sequence of numbers code of a bank slip and output the values so that you can check if it's all right with the bank slip itself.</p>";break;case"eticaonline":s.innerHTML="<p>My work on this project was to develop a system that gets information from a bunch of web services, and retrieves financial information about a particular person. I also developed the website, in which I used only pure PHP to perform the server side and pure HTML, JS and CSS to perform the Front end.</p><div class='tech'><span>PHP</span><span>WordPress</span><span>MySQL</span><span>Interbase</span><span>HTML</span><span>JavaScript</span><span>CSS</span></div>";break;case"semed":s.innerHTML="<p>My work on this project was to develop a WordPress Theme, based on the desing created by the client ideas.</p><div class='tech'><span>PHP</span><span>WordPress</span><span>MySQL</span><span>HTML</span><span>JavaScript</span><span>JQuery</span><span>CSS</span></div>";break;case"flisol":s.innerHTML="<p>My work on this project was to develop the visual of the website using just CSS, based on the HTML structure provided by <a href='https://github.com/cercomp/weby' target='_blank'>Weby's</a> blank theme. Also I was responsible for all content management during the event.</p><div class='tech'><span>JavaScript</span><span>JQuery</span><span>CSS</span></div>";break;case"labsantaines":s.innerHTML="<p>My work on this project was first, to develop a Joomla Template, using the design developed by <a href='http://www.ederferreira.com.br/' target='_blank'>Eder Ferreira</a>. After, I developed 2 Joomla Components (Curriculum subscribe and Costumers subscribe) and one module (Disease Internacinal Code Searching).</p><div class='tech'><span>PHP</span><span>Joomla</span><span>MySQL</span><span>HTML</span><span>JavaScript</span><span>JQuery</span><span>CSS</span></div>";break;case"pt-easygd":s.innerHTML="<p>Easy GD é um projeto que usa a API do Google Drive para gerenciar arquivos na sua conta do Google Drive. Isto é um projeto simples, não tem características especiais. O principal objetivo deste projeto é mostrar o quão simples é trabalhar com a API Google Drive.</p>";break;case"pt-footnotes":s.innerHTML="<p>Um pedaço de código JavaScript/JQuery que mostra notas sobre alguma coisa no seu site. A melhor forma de entender este projeto é <a href='http://github.sheldonled.com/footnotes' target='_blank'>Ver uma demonstração online</a>.</p>";break;case"pt-coplacar":s.innerHTML="<p>Coplacar é uma WebApp que mostra o placar da Copa do Mundo de 2014. Tudo começou com um pequeno pedaço de código que o professor Fernando Masanori postou como <a href='https://gist.github.com/fmasanori/1288160dad16cc473a53' target='_blank'>Jogos da Copa do Mundo em seis linhas de Python 3</a>, Eu vi que o link obtinha os resultados dos jogos em um arquivo JSON, então eu decidi fazer um App com isso.</p>";break;case"pt-fgsl":s.innerHTML="<p>Uma WebApp que mostra informação sobre um evento local em Goiânia - Goiás, chamado <a href=http://fgsl.net' target='_blank'>FGSL (Fórum Goiano de Software Livre)</a>.</p> ";break;case"pt-playcompras":s.innerHTML="<p>Uma WebApp que permite usuários adicionarem itens em uma lista e verem o valor total que eles irão gastar.</p>";break;case"pt-musicfun":s.innerHTML="<p>Um exemplo de WebApp usando oscilador da API Web Audio</p>";break;case"pt-alfanotas":s.innerHTML="<p>Uma WebApp que permite os estudantes da <a href='http://www.alfa.br' target='_blank'>Faculdade Alfa</a> calcularem suas notas.</p>";break;case"pt-rap":s.innerHTML="<p>É uma espécie de boilerplate, ou Prova de conceito de como usar REST com PHP e fazer uma API para ser acessada utilizando AngularJS</p><p>RAP é uma sigla para REST AngularJS and PHP</p>";break;case"pt-boletocheck":s.innerHTML="<p>É um pedaço de código em PHP que checa a linha digitável de um boleto e mostra os valores possíveis de serem extraídos, para que você possa checar a informação e verificar se a linha digitável está correta.</p>";break;case"pt-eticaonline":s.innerHTML="<p>Meu trabalho neste projeto foi desenvolver um sistema que obtem informação de vários web services, e retorna informações financeiras sobre uma pessoa ou empresa. Eu também desenvolvi o site, no qual foi usado apenas PHP puro no servidor e HTML, JS and CSS puro para o Front end. Ambas as partes sem nenhum framework ou biblioteca.</p><div class='tech'><span>PHP</span><span>MySQL</span><span>Interbase</span><span>HTML</span><span>JavaScript</span><span>CSS</span></div>";break;case"pt-semed":s.innerHTML="<p>Meu trabalho neste projeto foi desenvoler um tema para WordPress, baseado no design que eu criei de acordo com as ideias do cliente.</p><div class='tech'><span>PHP</span><span>WordPress</span><span>MySQL</span><span>HTML</span><span>JavaScript</span><span>JQuery</span><span>CSS</span></div>";break;case"pt-flisol":s.innerHTML="<p>Meu trabalho neste projeto foi desenvolver a parte visual do site usando apenas CSS, baseado na estrutura HTML provida pelo tema 'blank' do CMS <a href='https://github.com/cercomp/weby' target='_blank'>Weby's</a>. Eu também fui responsável por todo o gerenciamento de conteúdo durante o evento.</p><div class='tech'><span>JavaScript</span><span>JQuery</span><span>CSS</span></div>";break;case"pt-labsantaines":s.innerHTML="<p>Meu trablho neste projeto foi, primeiramente desenvolver um Template Joomla, usando o design desenvolvido por <a href='http://www.ederferreira.com.br/' target='_blank'>Eder Ferreira</a>. Depois, eu desenvolvi 2 componentes Joomla (inscrição de Curriculo e inscrição de Clientes) e 1 módulo (Busca de Código International de Doenças).</p><div class='tech'><span>PHP</span><span>Joomla</span><span>MySQL</span><span>HTML</span><span>JavaScript</span><span>JQuery</span><span>CSS</span></div>";break;default:s.innerHTML="<p>=)</p>"}hiddenPos=(document.documentElement.scrollTop||document.body.scrollTop)+window.innerHeight,o.style.display="block",o.style.top=hiddenPos+"px",t(o,document.documentElement.scrollTop||document.body.scrollTop,5),window.onscroll=function(){var e=parseInt(document.getElementById("prjDetails").style.top),a=document.documentElement.scrollTop||document.body.scrollTop,t=document.getElementById("prjDetails").offsetHeight,o=window.innerHeight;e>=a?document.getElementById("prjDetails").style.top=(document.documentElement.scrollTop||document.body.scrollTop)+"px":(diffBottom=Math.abs(e-a)-Math.abs(t-o),diffBottom>0&&(document.getElementById("prjDetails").style.top=e+diffBottom+"px"))}}function t(e,a,o,n){return elTop=parseInt(e.style.top),elTop==a?void(n&&(e.style.display="none")):Math.abs(elTop-a)<25?(e.style.top=a+"px",void(n&&(e.style.display="none"))):(e.style.top=(elTop>a?elTop-20:elTop<a?elTop+20:a)+"px",void setTimeout(function(){t(e,a,o,n)},o))}document.querySelectorAll("#prjDetails .close")[0].addEventListener("click",function(a){e()});try{document.querySelectorAll(".easygd img")[0].addEventListener("click",function(e){a({id:"easygd",name:"Easy GD",img:"assets/img/easygd.png",url:"http://github.sheldonled.com/easygd/"})})}catch(e){}try{document.querySelectorAll(".footnotes img")[0].addEventListener("click",function(e){a({id:"footnotes",name:"FootNotes",img:"assets/img/footnotes.png",url:"http://github.sheldonled.com/footnotes"})})}catch(e){}try{document.querySelectorAll(".coplacar img")[0].addEventListener("click",function(e){a({id:"coplacar",name:"Coplacar",img:"assets/img/coplacar.png",url:"http://github.sheldonled.com/coplacar"})})}catch(e){}try{document.querySelectorAll(".fgsl img")[0].addEventListener("click",function(e){a({id:"fgsl",name:"FGSL",img:"assets/img/fgsl.png",url:"http://github.sheldonled.com/fgslwebapp"})})}catch(e){}try{document.querySelectorAll(".playcompras img")[0].addEventListener("click",function(e){a({id:"playcompras",name:"Play Compras",img:"assets/img/playcompras.png",url:"http://github.sheldonled.com/playcompras"})})}catch(e){}try{document.querySelectorAll(".musicfun img")[0].addEventListener("click",function(e){a({id:"musicfun",name:"Music Fun",img:"assets/img/musicfun.png",url:"http://github.sheldonled.com/musicfun"})})}catch(e){}try{document.querySelectorAll(".alfanotas img")[0].addEventListener("click",function(e){a({id:"alfanotas",name:"Alfa Notas",img:"assets/img/alfanotas.png",url:"http://github.sheldonled.com/alfanotas"})})}catch(e){}try{document.querySelectorAll(".rap img")[0].addEventListener("click",function(e){a({id:"rap",name:"RAP",img:"assets/img/rap.png",url:"http://github.com/sheldonled/rap"})})}catch(e){}try{document.querySelectorAll(".boletocheck img")[0].addEventListener("click",function(e){a({id:"boletocheck",name:"Boleto Check",img:"assets/img/boletocheck.png",url:"http://github.com/sheldonled/boletocheck"})})}catch(e){}try{document.querySelectorAll(".semed img")[0].addEventListener("click",function(e){a({id:"semed",name:"SEMED",img:"assets/img/semed.png",url:"http://projetos.sheldonled.com/semed"})})}catch(e){}try{document.querySelectorAll(".eticaonline img")[0].addEventListener("click",function(e){a({id:"eticaonline",name:"DGI - Etica Online",img:"assets/img/eticaonline.png",url:"http://www.eticaonline.com.br/novo"})})}catch(e){}try{document.querySelectorAll(".flisol img")[0].addEventListener("click",function(e){a({id:"flisol",name:"FLISOL 2016",img:"assets/img/flisol.png",url:"http://gyn.flisol.fgsl.net/"})})}catch(e){}try{document.querySelectorAll(".labsantaines img")[0].addEventListener("click",function(e){a({id:"labsantaines",name:"Laboratório Santa Inês",img:"assets/img/labsantaines.png",url:"http://www.labsantaines.com/novosite/"})})}catch(e){}try{document.querySelectorAll(".pt-easygd img")[0].addEventListener("click",function(e){a({id:"pt-easygd",name:"Easy GD",img:"../assets/img/easygd.png",url:"http://github.sheldonled.com/easygd"})})}catch(e){}try{document.querySelectorAll(".pt-footnotes img")[0].addEventListener("click",function(e){a({id:"pt-footnotes",name:"FootNotes",img:"../assets/img/footnotes.png",url:"http://github.sheldonled.com/footnotes"})})}catch(e){}try{document.querySelectorAll(".pt-coplacar img")[0].addEventListener("click",function(e){a({id:"pt-coplacar",name:"Coplacar",img:"../assets/img/coplacar.png",url:"http://github.sheldonled.com/coplacar"})})}catch(e){}try{document.querySelectorAll(".pt-fgsl img")[0].addEventListener("click",function(e){a({id:"pt-fgsl",name:"FGSL",img:"../assets/img/fgsl.png",url:"http://github.sheldonled.com/fgslwebapp"})})}catch(e){}try{document.querySelectorAll(".pt-playcompras img")[0].addEventListener("click",function(e){a({id:"pt-playcompras",name:"Play Compras",img:"../assets/img/playcompras.png",url:"http://github.sheldonled.com/playcompras"})})}catch(e){}try{document.querySelectorAll(".pt-musicfun img")[0].addEventListener("click",function(e){a({id:"pt-musicfun",name:"Music Fun",img:"../assets/img/musicfun.png",url:"http://github.sheldonled.com/musicfun"})})}catch(e){}try{document.querySelectorAll(".pt-alfanotas img")[0].addEventListener("click",function(e){a({id:"pt-alfanotas",name:"Alfa Notas",img:"../assets/img/alfanotas.png",url:"http://github.sheldonled.com/alfanotas"})})}catch(e){}try{document.querySelectorAll(".pt-rap img")[0].addEventListener("click",function(e){a({id:"pt-rap",name:"RAP",img:"../assets/img/rap.png",url:"http://github.com/sheldonled/rap"})})}catch(e){}try{document.querySelectorAll(".pt-boletocheck img")[0].addEventListener("click",function(e){a({id:"pt-boletocheck",name:"Boleto Check",img:"../assets/img/boletocheck.png",url:"http://github.com/sheldonled/boletocheck"})})}catch(e){}try{document.querySelectorAll(".pt-semed img")[0].addEventListener("click",function(e){a({id:"pt-semed",name:"SEMED",img:"../assets/img/semed.png",url:"http://projetos.sheldonled.com/semed"})})}catch(e){}try{document.querySelectorAll(".pt-eticaonline img")[0].addEventListener("click",function(e){a({id:"pt-eticaonline",name:"DGI - Etica Online",img:"../assets/img/eticaonline.png",url:"http://www.eticaonline.com.br/novo"})})}catch(e){}try{document.querySelectorAll(".pt-flisol img")[0].addEventListener("click",function(e){a({id:"pt-flisol",name:"FLISOL 2016",img:"../assets/img/flisol.png",url:"http://gyn.flisol.fgsl.net/"})})}catch(e){}try{document.querySelectorAll(".pt-labsantaines img")[0].addEventListener("click",function(e){a({id:"pt-labsantaines",name:"Laboratório Santa Inês",img:"../assets/img/labsantaines.png",url:"http://www.labsantaines.com/novosite/"})})}catch(e){}document.onkeyup=function(a){27==a.keyCode&&e()}}();