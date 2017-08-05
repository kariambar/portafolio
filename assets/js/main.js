document.getElementById("toggle").addEventListener("click", function(event){
	event.preventDefault();
	document.getElementById("header").classList.toggle("open");
	document.getElementById("body").classList.toggle("overflow-hidden");
});

// portfolio
 $('.gallery ul li a').click(function() {
     var itemID = $(this).attr('href');
     $('.gallery ul').addClass('item_open');
     $(itemID).addClass('item_open');
     return false;
 });
 $('.close').click(function() {
     $('.port, .gallery ul').removeClass('item_open');
     return false;
 });

