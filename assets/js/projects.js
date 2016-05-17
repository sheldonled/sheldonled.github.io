(function() {

  //Adding Listeners
  window.onload = function(){
    //Easy GD
    document.querySelectorAll(".easygd img")[0].addEventListener('click',function(e){
      detailProject({"id":"easygd","name":"Easy GD","img":"assets/img/easygd.png","url":"https://github.com/sheldonled/easygd"});
    });
    //FootNotes
    document.querySelectorAll(".footnotes img")[0].addEventListener('click',function(e){
      detailProject({"id":"footnotes","name":"FootNotes","img":"assets/img/footnotes.png","url":"https://github.com/sheldonled/footnotes"});
    });
    //Easy GD
    document.querySelectorAll(".sss img")[0].addEventListener('click',function(e){
      detailProject({"id":"easygd","name":"Easy GD","img":"assets/img/easygd.png","url":"https://github.com/sheldonled/easygd"});
    });
    //Easy GD
    document.querySelectorAll(".sss img")[0].addEventListener('click',function(e){
      detailProject({"id":"easygd","name":"Easy GD","img":"assets/img/easygd.png","url":"https://github.com/sheldonled/easygd"});
    });
    //Easy GD
    document.querySelectorAll(".sss img")[0].addEventListener('click',function(e){
      detailProject({"id":"easygd","name":"Easy GD","img":"assets/img/easygd.png","url":"https://github.com/sheldonled/easygd"});
    });
    //Easy GD
    document.querySelectorAll(".sss img")[0].addEventListener('click',function(e){
      detailProject({"id":"easygd","name":"Easy GD","img":"assets/img/easygd.png","url":"https://github.com/sheldonled/easygd"});
    });
    //Easy GD
    document.querySelectorAll(".sss img")[0].addEventListener('click',function(e){
      detailProject({"id":"easygd","name":"Easy GD","img":"assets/img/easygd.png","url":"https://github.com/sheldonled/easygd"});
    });
    //Easy GD
    document.querySelectorAll(".sss img")[0].addEventListener('click',function(e){
      detailProject({"id":"easygd","name":"Easy GD","img":"assets/img/easygd.png","url":"https://github.com/sheldonled/easygd"});
    });
    //Easy GD
    document.querySelectorAll(".sss img")[0].addEventListener('click',function(e){
      detailProject({"id":"easygd","name":"Easy GD","img":"assets/img/easygd.png","url":"https://github.com/sheldonled/easygd"});
    });

    document.querySelectorAll("#prjDetails .close")[0].addEventListener('click',function(e){closeDetailProject();});
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
        prjDesc.innerHTML = "A piece of JavaScript/JQuery code that shows notes about "+
        "something in your website. The best way to understand is to "+
        "<a href='https://github.com/sheldonled/footnotes' target='_blank'>Take a look</a>.";
        break;
      default:
        prjDesc.innerHTML = "<p>=)</p>"; 
        break;
    }

    hiddenPos = (document.documentElement.scrollTop || document.body.scrollTop)+window.innerHeight;  
    view.style.display = "block";
    view.style.top = hiddenPos+"px";
    showDetail(view,(document.documentElement.scrollTop || document.body.scrollTop),5); 
    window.onscroll = function(){document.getElementById("prjDetails").style.top = (document.documentElement.scrollTop || document.body.scrollTop)+"px";};
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