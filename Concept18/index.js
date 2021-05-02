var slider = new Swiper('.swiper-container', {
	slidesPerView: 'auto',
	spaceBetween: 150,
	centeredSlides: true,
	mousewheel: true,
});

slider.on('slideChange', function () {
	gsap.to(document.querySelectorAll('.slide-text span'), 0.2, {
		y: -100 + 'px',
	});
	gsap.to(document.querySelectorAll('.slide-number span'), 0.2, {
		x: -100 + 'px',
	});
	gsap.to(document.querySelectorAll('.swiper-slide-active'), 0.5, {
		scale: 0.85,
		ease: Power4.easeOut,
	});
});

slider.on('slideChangeTransitionEnd', function () {
	gsap.to(document.querySelectorAll('.slide-text span'), 0.2, {
		y: 0 + 'px',
		delay: 0.5,
	});
	gsap.to(document.querySelectorAll('.slide-text span'), 0, {
		y: -100 + 'px',
	});
	gsap.to(document.querySelectorAll('.slide-number span'), 0.2, {
		x: 0,
		delay: 0.7,
	});
	gsap.to(document.querySelectorAll('.swiper-slide-active'), 0, {
		scale: 1,
		ease: Power3.easeOut,
	});
	gsap.to(document.querySelectorAll('.swiper-slide-active .slide-text'), 0, {
		autoAlpha: 1,
	});
	gsap.to(document.querySelectorAll('.swiper-slide-active .slide-number'), 0, {
		autoAlpha: 1,
	});
	gsap.to(document.querySelectorAll('.swiper-slide-next .slide-text'), 0, {
		autoAlpha: 0,
	});
	gsap.to(document.querySelectorAll('.swiper-slide-prev .slide-text'), 0, {
		autoAlpha: 0,
	});
	gsap.to(document.querySelectorAll('.swiper-slide-next .slide-number'), 0, {
		autoAlpha: 0,
	});
	gsap.to(document.querySelectorAll('.swiper-slide-prev .slide-number'), 0, {
		autoAlpha: 0,
	});
});

gsap.to(document.querySelectorAll('.swiper-slide-next .slide-text '), 0, {
	autoAlpha: 0,
});
gsap.to(document.querySelectorAll('.swiper-slide-prev .slide-text '), 0, {
	autoAlpha: 0,
});
gsap.to(document.querySelectorAll('.swiper-slide-next .slide-number '), 0, {
	autoAlpha: 0,
});
gsap.to(document.querySelectorAll('.swiper-slide-prev .slide-number '), 0, {
	autoAlpha: 0,
});
gsap.to(document.querySelectorAll('.swiper-slide'), 0, {
	scale: 0.85,
	ease: Power3.easeOut,
});
gsap.to(document.querySelectorAll('.swiper-slide-active '), 0, {
	scale: 1,
	ease: Power3.easeOut,
});
