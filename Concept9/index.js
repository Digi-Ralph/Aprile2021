gsap.from(document.querySelector('.logo'), 1, {
	opacity: 0,
	x: -20,
	ease: Expo.easeInOut,
});

gsap.from(document.querySelectorAll('.menu-links ul li'), 1, {
	opacity: 0,
	x: -20,
	ease: Expo.easeInOut,
});
gsap.from(document.querySelectorAll('.media ion-icon'), 1, {
	delay: 0.5,
	opacity: 0,
	x: -20,
	ease: Expo.easeInOut,
});
gsap.from(document.querySelector('.coca'), 1, {
	delay: 1.5,
	opacity: 0,
	y: -800,
	ease: Expo.easeInOut,
});
gsap.from(document.querySelector('#scene li:nth-child(1)'), 2, {
	delay: 2,
	opacity: 0,
	y: -800,
	ease: Expo.easeInOut,
});
gsap.from(document.querySelector('#scene li:nth-child(2)'), 2, {
	delay: 2.1,
	opacity: 0,
	y: -800,
	ease: Expo.easeInOut,
});
gsap.from(document.querySelector('#scene li:nth-child(3)'), 2, {
	delay: 2.2,
	opacity: 0,
	y: -800,
	ease: Expo.easeInOut,
});
gsap.from(document.querySelector('#scene li:nth-child(4)'), 2, {
	delay: 2.3,
	opacity: 0,
	y: -800,
	ease: Expo.easeInOut,
});
gsap.from(document.querySelector('.title'), 1, {
	delay: 1,
	opacity: 0,
	y: 20,
	ease: Expo.easeInOut,
});
gsap.from(document.querySelector('.pages'), 1, {
	delay: 1.3,
	opacity: 0,
	y: 20,
	ease: Expo.easeInOut,
});
gsap.from(document.querySelector('.more'), 1, {
	delay: 1.4,
	opacity: 0,
	y: 20,
	ease: Expo.easeInOut,
});
