const loading = document.querySelector('.loading');
const body = document.querySelector('body');
const bg = document.querySelector('.bg');
const lorem = document.querySelector('.header');

var tl = gsap.timeline();
tl.from(loading, {
	delay: 0.5,
	duration: 1,
	transformOrigin: 'left',
	scaleX: 0,
	ease: 'exp.Out',
})
	.to(loading, {
		duration: 0.9,
		delay: 0.2,
		scaleX: 0,
		transformOrigin: 'right',
		ease: 'exp.In',
	})
	.from(bg, {
		duration: 2,
		delay: 0.2,
		y: 200,
		opacity: 0,
		transformOrigin: 'right',
		ease: 'Power4.easeOut',
	})
	.to(lorem, {
		y: -10,
		opacity: 1,
	});

// swiper
const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.next',
		prevEl: '.prev',
	},
	slidesPerView: 3,
	spaceBetween: 30,
});

// slider
const slider = document.querySelector('.slider');
const sliderbutton = document.querySelector('.slider-button');
sliderbutton.addEventListener('click', function (e) {
	if (slider.style.transform === 'translateX(-100%)') {
		slider.style.transform = 'translateX(0%)';
	} else {
		slider.style.transform = 'translateX(-100%)';
	}
});
