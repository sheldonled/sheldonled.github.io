(function() {

  //Adding Listeners
  window.onload = function(){
    document.querySelectorAll("#prjDetails .close")[0].addEventListener('click',function(e){closeDetailProject();});

    //Easy GD
    document.querySelectorAll(".easygd img")[0].addEventListener('click',function(e){
      detailProject({"id":"easygd","name":"Easy GD","img":"assets/img/easygd.png","url":"https://github.com/sheldonled/easygd"});
    });
    //FootNotes
    document.querySelectorAll(".footnotes img")[0].addEventListener('click',function(e){
      detailProject({"id":"footnotes","name":"FootNotes","img":"assets/img/footnotes.png","url":"https://github.com/sheldonled/footnotes"});
    });
    //Coplacar
    document.querySelectorAll(".coplacar img")[0].addEventListener('click',function(e){
      detailProject({"id":"coplacar","name":"Coplacar","img":"assets/img/coplacar.png","url":"https://github.com/sheldonled/coplacar"});
    });
    //FGSL
    document.querySelectorAll(".fgsl img")[0].addEventListener('click',function(e){
      detailProject({"id":"fgsl","name":"FGSL","img":"assets/img/fgsl.png","url":"https://github.com/sheldonled/fgslwebapp"});
    });
    //Play Compras
    document.querySelectorAll(".playcompras img")[0].addEventListener('click',function(e){
      detailProject({"id":"playcompras","name":"Play Compras","img":"assets/img/playcompras.png","url":"https://github.com/sheldonled/playcompras"});
    });
    //Music Fun
    document.querySelectorAll(".musicfun img")[0].addEventListener('click',function(e){
      detailProject({"id":"musicfun","name":"Music Fun","img":"assets/img/musicfun.png","url":"https://github.com/sheldonled/musicfun"});
    });
    //Alfa Notas
    document.querySelectorAll(".alfanotas img")[0].addEventListener('click',function(e){
      detailProject({"id":"alfanotas","name":"Alfa Notas","img":"assets/img/alfanotas.png","url":"https://github.com/sheldonled/alfanotas"});
    });
    //RAP
    document.querySelectorAll(".rap img")[0].addEventListener('click',function(e){
      detailProject({"id":"rap","name":"RAP","img":"assets/img/rap.png","url":"https://github.com/sheldonled/rap"});
    });
    //Boleto Check
    document.querySelectorAll(".boletocheck img")[0].addEventListener('click',function(e){
      detailProject({"id":"boletocheck","name":"Boleto Check","img":"assets/img/boletocheck.png","url":"https://github.com/sheldonled/boletocheck"});
    });
    //SEMED
    document.querySelectorAll(".semed img")[0].addEventListener('click',function(e){
      detailProject({"id":"semed","name":"SEMED","img":"assets/img/semed.png","url":"http://projetos.ledlabs.com.br/semed"});
    });
    //FLISOL 2016
    document.querySelectorAll(".flisol img")[0].addEventListener('click',function(e){
      detailProject({"id":"flisol","name":"FLISOL 2016","img":"assets/img/flisol.png","url":"http://gyn.flisol.fgsl.net/"});
    });
    //Loboratório Santa Inês
    document.querySelectorAll(".labsantaines img")[0].addEventListener('click',function(e){
      detailProject({"id":"labsantaines","name":"Laboratório Santa Inês","img":"assets/img/labsantaines.png","url":"http://www.labsantaines.com/novosite/"});
    });

  };

  //Closing the detail view by ESC key
  document.onkeyup = function(e){
    if(e.keyCode == 27) {
      closeDetailProject();
    }
  };
  
  /**
   * Do the work of closing the detail view
   */
  function closeDetailProject(){
    el = document.getElementById("prjDetails");
    hiddenPos = (document.documentElement.scrollTop || document.body.scrollTop)+window.innerHeight;
    showDetail(el,hiddenPos,5,true);
    window.onscroll = "";
  }
  /**
   * Function that shows the detail view of a project
   */
  function detailProject(prj) {
    var view = document.getElementById("prjDetails"),
    prjName = document.getElementById("detail-prjName"),
    prjDesc = document.getElementById("detail-prjDesc"),
    prjUrl = document.getElementById("detail-prjUrl"),
    prjImg = document.getElementById("detail-prjImg");
    if(view.style.display == "block"){
      closeDetailProject();
      return;
    }
    //Adding content to the detail view
    prjName.textContent = prj.name;
    prjImg.src  = prj.img;
    prjImg.alt  = prj.name;
    prjUrl.href = prj.url;
    //Adding the description of each project
    switch(prj.id) {
      case "easygd":
        prjDesc.innerHTML = "<p>Easy GD is a project that uses Google Drive API "+
        "to manage files on your Google Drive Account. It's just a simple project, "+
        "doesn't have special features. The main goal of this project is to show "+
        "how simple is to work with Google Drive API.</p>";
        break;
      case "footnotes":
        prjDesc.innerHTML = "<p>A piece of JavaScript/JQuery code that shows notes about "+
        "something in your website. The best way to understand is to "+
        "<a href='https://github.com/sheldonled/footnotes' target='_blank'>Take a look</a>.</p>";
        break;
      case "coplacar":
        prjDesc.innerHTML = "<p>Coplacar is a webapp that shows the placar of the world cup games of 2014. "+
        "It all started with a piece of code of professor Fernando Masanori called "+
        "<a href='https://gist.github.com/fmasanori/1288160dad16cc473a53' target='_blank'>World Cup in six lines of Python 3</a>, "+
        "I saw the link that retrieves the results of the matches in a json file, so I decided to make an app with it.</p>";
        break;
      case "fgsl":
        prjDesc.innerHTML = "<p>A webapp that shows information about a local event in Goiânia - Goiás, called"+
        " <a href=http://fgsl.net' target='_blank'>FGSL (Fórum Goiano de Software Livre)</a>.</p> ";
        break;
      case "playcompras":
        prjDesc.innerHTML = "<p>A webapp that allows users to add items in a list and see the total "+
        "money they'll waste.</p>";
        break;
      case "musicfun":
        prjDesc.innerHTML = "<p>A webapp sample using oscilator from Web Audio API</p>";
        break;
      case "alfanotas":
        prjDesc.innerHTML = "<p>A webapp that allows students from "+
        "<a href='http://www.alfa.br' target='_blank'>Faculdade Alfa</a> calculate their grade.</p>";
        break;
      case "rap":
        prjDesc.innerHTML = "<p>It's a kind of boilerplate, or Proof "+
        "of Concept, of how to use REST with PHP and make an API to access using AngularJS</p>"+
        "<p>RAP extends for REST AngularJS and PHP</p>";
        break;
      case "boletocheck":
        prjDesc.innerHTML = "<p>It's a piece of PHP code that checks the sequence of numbers code "+
        "of a bank slip and output the values so that you can check if it's all right with the bank slip itself.</p>";
        break;
      case "semed":
        prjDesc.innerHTML = "<p>My work on this project was to develop a WordPress Theme, "+
        "based on the desing created by the client ideas.</p>"+
        "<div class='tech'><span>PHP</span><span>WordPress</span><span>MySQL</span><span>HTML</span>"+
        "<span>JavaScript</span><span>JQuery</span><span>CSS</span></div>";
        break;
      case "flisol":
        prjDesc.innerHTML = "<p>My work on this project was to develop the visual of the website "+
        "using just CSS, based on the HTML structure provided by "+
        "<a href='https://github.com/cercomp/weby' target='_blank'>Weby's</a> blank theme. Also I "+
        "was responsible for all content management during the event.</p>"+
        "<div class='tech'><span>JavaScript</span><span>JQuery</span><span>CSS</span></div>";
        break;
      case "labsantaines":
        prjDesc.innerHTML = "<p>My work on this project was first, to develop a Joomla Template, "+
        "using the design developed by <a href='http://www.ederferreira.com.br/' target='_blank'>Eder Ferreira</a>. "+
        "After, I developed 2 Joomla Components (Curriculum subscribe and Costumers subscribe) and one module "+
        "(Disease Internacinal Code Searching).</p>"+
        "<div class='tech'><span>PHP</span><span>Joomla</span><span>MySQL</span><span>HTML</span>"+
        "<span>JavaScript</span><span>JQuery</span><span>CSS</span></div>";
        break;
      default:
        prjDesc.innerHTML = "<p>=)</p>"; 
        break;
    }

    hiddenPos = (document.documentElement.scrollTop || document.body.scrollTop)+window.innerHeight;  
    view.style.display = "block";
    view.style.top = hiddenPos+"px";
    showDetail(view,(document.documentElement.scrollTop || document.body.scrollTop),5); 
    window.onscroll = function(){
      var detailTop     = parseInt(document.getElementById("prjDetails").style.top),
          windowTop     = (document.documentElement.scrollTop || document.body.scrollTop),
          detailHeight  = document.getElementById("prjDetails").offsetHeight,
          windowHeight  = window.innerHeight;

          if(detailTop >= windowTop) {
            document.getElementById("prjDetails").style.top = (document.documentElement.scrollTop || document.body.scrollTop)+"px";
          } else {
            diffBottom = Math.abs(detailTop - windowTop) - Math.abs(detailHeight - windowHeight);
            if(diffBottom > 0) {
              document.getElementById("prjDetails").style.top = (detailTop+diffBottom)+"px";
            }
          }
    };
  }


  function showDetail(el,y,interval,hide) {
    elTop = parseInt(el.style.top);
    if (elTop == y){
      if(hide)el.style.display="none";
      return;
    } else if(Math.abs(elTop-y) < 25) {
      el.style.top = y+"px";
      if(hide)el.style.display="none";
      return;
    }

    el.style.top = ((elTop > y) ? elTop-20 : ((elTop < y) ? elTop+20 : y))+"px";
    
    setTimeout(function() { showDetail(el, y, interval,hide); }, interval);
  }
}());