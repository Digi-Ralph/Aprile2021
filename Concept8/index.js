//
const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	loop: true,
	effect: 'fade',
	speed: 1500,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const header = document.querySelector('.header');
const logo = document.querySelector('.logo img');
const li = document.querySelectorAll('.nav ul li');
const slideright = document.querySelector('.slide-right > img');
