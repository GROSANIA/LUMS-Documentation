function showNav() {
    var bNavElement = document.getElementById("bNav");
    var computedStyle = window.getComputedStyle(bNavElement);
    var Wval = parseFloat(computedStyle.getPropertyValue("width"));
    var Hval = parseFloat(computedStyle.getPropertyValue("height"));
  
    if (Wval === 0 && Hval === 0) {
      bNavElement.style.width = "50vw";
      bNavElement.style.height = "auto";
    } else {
      bNavElement.style.width = "0";
      bNavElement.style.height = "0";
    }
  }

