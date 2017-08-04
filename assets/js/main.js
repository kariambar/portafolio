document.getElementById("toggle").addEventListener("click", function(event){
	event.preventDefault();
	document.getElementById("header").classList.toggle("open");
	document.getElementById("body").classList.toggle("overflow-hidden");
});

window.addEventListener('scroll', function () {
  const distanciaVertical = window.pageYOffset || document.documentElement.scrollTop,
  toggle = getElementById('toggle');
  
  if (distanciaVertical > 30) {
    toggle.classList.add("navbar-color");
  } else {
    toggle.classList.remove("navbar-color");
  }
});