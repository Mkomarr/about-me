/*---------------- scrolllTo, skrypt z gitHub--------------------*/

$().ready (function () {
	
	$('#about-nav').click (function (event){
		// event.preventDefault();
		var goTop = $('#about').offset().top;
		$("html, body").animate({
			scrollTop: goTop
		}, 500);
	});
	$('#projects-nav').click (function (event){
		// event.preventDefault();
		var goTop = $('#projects').offset().top;
		$("html, body").animate({
			scrollTop: goTop
		}, 500);
	});
	
	$('#contact-nav').click (function (event){
		event.preventDefault();
		var goTop = $('#contact').offset().top;
		$("html, body").animate({
			scrollTop: goTop
		}, 500);
	});
});

/*---------------------- dropdownMenu -------------------------*/

const icon = document.querySelector('.dropdownIcon');
const menu = document.querySelector('.menu')
const hideMenu = document.querySelectorAll('.desktopMenu')

icon.addEventListener('click', function() {
	if (menu.className === 'menu') {
		menu.className = 'mobileMenu';
	} else {
		menu.className = 'menu';
	}	
});
//na kiedyś - jak zmienić archit, żeby działało tylko na wersji mob

/*------- schowaj menu po kliknięciu w inny element niż hamburger menu ----------*/

hideMenu.forEach(singleLi => singleLi.addEventListener('click', () => {
		menu.className = 'menu';
}));
