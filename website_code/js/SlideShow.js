var slideShow = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i=0; i < x.length; i++) {
        x[i].style.display ="none";
    }
    slideShow++;
    if (slideShow > x.length){
        slideShow =1
    }
    x[slideShow-1].style.display = "block";
    setTimeout(carousel, 2000);
}