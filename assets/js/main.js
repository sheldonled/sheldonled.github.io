(function() {
  document.addEventListener('DOMContentLoaded', function(){
    /**
     * Adding listeners to the page
     */
    arrow = document.getElementById("arrow");
    if (arrow){
        arrow.addEventListener("click",function(e){
            slideTo(e, "blogs");
        });
    }

    /**
     * Handling the view in about page
     */
    (function(){
      var items = getList();
      if (items){
        for (var i in items){
          items[i].addEventListener('click',toggleActive);
        }
        removeInfoClass();
        document.getElementById("resume").click();
      }
      function getList(){
        var items = document.getElementsByClassName("aboutmenu")[0];
        var list= [], j = 0;
        if (items){
          for(var i in items.childNodes) {
            var item = items.childNodes[i];
            if (item.nodeType == 1) {
              list[j] = item;
              j++;
            }
          }
          return list;
        } else {
          return null;
        }
      }

      function removeInfoClass(){
        var items = getList();
        for (var i in items){
          items[i].className = "";
          document.getElementById(items[i].id+"info").style.display = "none";
        }
      }
      function toggleActive(){
        removeInfoClass();
        this.className = "active";
        document.getElementById(this.id+"info").style.display = "block";
      }
    }());
    
    /**
     * Alerting if the browser doesn't support box-shaddow
     */
    var supports = (function() {
      var div = document.createElement('div'),
        vendors = 'Khtml Ms O Moz Webkit'.split(' '),
        len = vendors.length;
      return function(prop) {
        if (prop in div.style) {
          return true;
        }
        prop = prop.replace(/^[a-z]/, function(val) {
          return val.toUpperCase();
        });
        while (len--) {
          if (vendors[len] + prop in div.style) {
            // browser supports box-shadow. Do what you need.
            // Or use a bang (!) to test if the browser doesn't.
            return true;
          } 
        }
        return false;
     };
    }());
    if (!supports('boxShadow')) { 
       alert("You wouldn't see this site right! \n\nGet a modern browser like: Firefox or Chrome!");
    }
  });
}());