window.addEventListener("scroll", function() {
    var nav = document.getElementById("navbar");
  
    if (window.pageYOffset > 0) {
      nav.style.position = "fixed";
    } else {
      nav.style.position = "static";
    }
  });
  
  