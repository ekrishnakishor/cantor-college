document.addEventListener("DOMContentLoaded", function() {
    var defaultSectionId = "campus";
    var defaultSection = document.getElementById(defaultSectionId);
    if (defaultSection) {
      defaultSection.style.display = "block";
    }
  });

function facilities(name) {
    var i;
    var x = document.getElementsByClassName("name");
    for(i=0; i< x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(name).style.display = "block";
}