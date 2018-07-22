
$('.burger').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('burger_active');
	$('.menu-nav').toggleClass('menu-nav-active');
});