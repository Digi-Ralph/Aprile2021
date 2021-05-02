const close = document.querySelector('.close-mobile');
const open = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');

open.addEventListener('click', function () {
	menu.classList.add('active');
});
close.addEventListener('click', function () {
	menu.classList.remove('active');
});

const tl = gsap.timeline();
const tl_2 = gsap.timeline();
const tl_3 = gsap.timeline();

tl.to(document.querySelector('.nav'), 1, {
	// y: 5,
	opacity: 1,
	ease: Expo.easeInOut,
});
tl_2
	.to(document.querySelector('.img-wrapper > h1'), 1, {
		delay: 1,
		// x: 10,
		opacity: 1,
		ease: Expo.easeInOut,
	})
	.to(document.querySelector('.image'), 0.5, {
		delay: 0.5,
		// y: 20,
		opacity: 1,
		ease: Expo.easeInOut,
	});
tl_3
	.to(document.querySelector('.contact'), 1, {
		delay: 0.5,
		// x: -30,
		opacity: 1,
		ease: Expo.easeOut,
	})
	.to(document.querySelector('.title'), 0.5, {
		// x: -30,
		opacity: 1,
		ease: Expo.easeOut,
	});
