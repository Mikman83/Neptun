
$(document).ready(function() {
	// Бургер меню
	$('.burger').on('click', function(e) {
		e.preventDefault;
		$(this).toggleClass('burger_active');
		$('.menu-nav').toggleClass('menu-nav-active');
	});
	// Бургер услуги
	$('.burger-menu').on('click', function(e) {
		e.preventDefault;
		$(this).toggleClass('burger-menu-active');
		$('.nav__list').toggleClass('nav__list-active');
	});
	 // Аккардион
	$('.nav__list-link').click(function(e) {
		$('body').animate({
			scrollTop: $(this).offset().top
		}, 1000);
		e.preventDefault();
		$(this).toggleClass("nav__list-inner-active").parent().toggleClass("nav__list-inner-active");
		$(this).parent().children(".nav__list-inner").slideToggle();
	});

});