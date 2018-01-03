// FLOATING ELEMENTS
let circle = document.querySelector(".circle");
let triangle_L = document.querySelector(".triangle_L");
let triangle_S =document.querySelector(".triangle_S");
let circle_S = document.querySelector(".circle_S");
let hex_L = document.querySelector(".hex_L");
let hex_S = document.querySelector(".hex_S");
let circle_M = document.querySelector(".circle_M");
let logo= document.querySelector(".logo");
let scroll_logo= document.querySelector("#scroll_logo");
let nav_bar= document.querySelector("#nav");

window.onload = onLoad();

function onLoad() {
    logo.addEventListener("click", showNav);
    scroll_logo.addEventListener("click", showNav);
    floatElements();
}

function floatElements() {

    circle.classList.add("moveCircle");
    triangle_L.classList.add("moveTriangle_L");
    triangle_S.classList.add("moveTriangle_S");
    circle_S.classList.add("moveCircle_S");
    hex_L.classList.add("moveHex_L");
    hex_S.classList.add("moveHex_S");
    circle_M.classList.add("moveCircle_M");

    console.log('floating elements');
}

function showNav() {
    console.log("show nav");
    nav_bar.style.display = "flex";

}


// SCROLL LOGO APPEAR
window.onscroll = function() {scrollFunction()};
//window.onscroll = scrollFunction();
//window.addEventListener("scroll", scrollFunction());
//scrollFunction();

function scrollFunction() {

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("scroll_logo").style.top = "0";
  } else {
    document.getElementById("scroll_logo").style.top = "-100px";
  }
}





// Close the dropdown menu if the user clicks outside of it

/*
window.onclick = function(event) {
  if (!event.target.matches('#scroll_logo')) {

    var dropdowns = document.getElementsById("navbar");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/




// ROTATING QUOTES
jQuery(document).ready(function($) {
		if (  $('.quote-loop').length ){
		(function loop() {
			$('.quote-loop').each(function() {
				var $self = $(this);
				$self.parent().queue(function (n) {
					$self.fadeIn(1000).delay(5000).fadeOut(1000, n);
				});
			}).parent().promise().done(loop);
		}());
	}
});
