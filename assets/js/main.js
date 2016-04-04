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
     * Function to scroll the screen to the target element
     */
    (function(){
      footer = document.getElementById("footer");
      if (footer){
        xhr("../footer.html", function(data){
          footer.innerHTML = data;
        });
      }
    }());

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



  /**
   * Function to scroll the screen to the target element
   */
  function slideTo(event, id) {
     if (event.preventDefault) { 
        event.preventDefault();
     } else {
        event.returnValue = false; 
     }
      time = 500;
      x = 0;
      if(id == "top") {
          y = 0;
      } else {
          console.log( document.getElementById(id).offsetTop);
          y = document.getElementById(id).offsetTop;
          y = y;
      }
      decelRate = 1;
      interval = 25;
      slideTo_h(x, y, time, decelRate, interval, (new Date()).getTime());

      function slideTo_h(x, y, time, decelRate, interval, dateTime) {
          if (time <= 0) {
              window.scrollTo(x, y);
              return;
          }
          var delay = interval + dateTime - (new Date()).getTime();
          setTimeout(function() { slideTo_h(x, y, time - interval * decelRate, decelRate, interval, dateTime + interval); }, (delay > 0 ? delay : 0));
          var m = interval / time;
          var rateX = (x - (document.documentElement.scrollLeft || document.body.scrollLeft)) * m;
          var rateY = (y - (document.documentElement.scrollTop || document.body.scrollTop)) * m;
          window.scrollBy(rateX, rateY);
      }
  }
  function xhr(url, cb) {
    request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400){
        // Success!
        cb(request.responseText);
      } else {
        // We reached our target server, but it returned an error
        cb("");
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      cb("");
    };

    request.send();
  }
}());