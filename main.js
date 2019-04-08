/*---------------- scrolllTo--------------------*/

$().ready (function () {
	let windowWidth = $(window).width();

	$('#mk-home').click (function (event){
		event.preventDefault();
		let goTop = $('#mk-about').offset().top-200;
		$("html, body").animate({
			scrollTop: goTop
		}, 500);
	});
	
	$('#about-nav').click (function (event){
		event.preventDefault();
		let goTop = $('#about').offset().top;
		$("html, body").animate({
			scrollTop: goTop
		}, 500);
	});
	$('#projects-nav').click (function (event){
		event.preventDefault();
		let goTop = $('#projects').offset().top;
		$("html, body").animate({
			scrollTop: goTop
		}, 500);
	});
	
	$('#contact-nav').click (function (event){
		event.preventDefault();
		let goTop = $('#contact').offset().top;
		$("html, body").animate({
			scrollTop: goTop
		}, 500);

	});
});

/*---------------------- dropdownMenu -------------------------*/

const icon = document.querySelector('.dropdownIcon');
const menu = document.getElementById('top-menu')
const hideMenu = document.querySelectorAll('.desktopMenu')

icon.addEventListener('click', () => {
	menu.className = 'mobileMenu';
});

/*------- schowaj menu po kliknięciu w inny element niż hamburger menu ----------*/

hideMenu.forEach(singleLi => singleLi.addEventListener('click', () => {
		menu.className = 'menu';
}));

/*------------------------schowaj menu przy scrollowaniu---------*/
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    menu.style.top = "0";
  } else {
    menu.style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

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

