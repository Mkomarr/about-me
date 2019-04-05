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

icon.addEventListener('click', () => {
	if (menu.className === 'menu') {
		menu.className = 'mobileMenu';
	} else {
		menu.className = 'menu';
	}	
});
//na kiedyś - co zmienić (archit?), żeby działało tylko na wersji mob

/*------- schowaj menu po kliknięciu w inny element niż hamburger menu ----------*/

hideMenu.forEach(singleLi => singleLi.addEventListener('click', () => {
		menu.className = 'menu';
}));

/*--------------------------licznik dni-----------------------------*/

const endTime = new Date('2019-05-06 22:34:00').getTime();
const counter = document.querySelector('.countdown');
const countdown = () => {
	const nowTime = new Date().getTime();
	const days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));
	counter.textContent = days;
	//console.log('działa')
}
window.onload = countdown();

/*---------------------pokaż cień pod menu gdy scroll--------------*/

const addShadow = () => {

}
