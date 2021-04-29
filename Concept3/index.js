const h1 = document.querySelector('.overlay > h1');
const span = document.querySelector('.overlay > span');
const overlay = document.querySelector('.overlay');
const ellipse = document.querySelector('.ellipse-container');
const yellow = document.querySelector('.yellow');
const logo = document.querySelector('.logo');
const menu = document.querySelector('.menu-links');
const scrolldown = document.querySelector('.scrolldown');
const title = document.querySelector('.text .title');
const p = document.querySelector('.text p');
const watch = document.querySelector('.watchnow');
const media = document.querySelector('.media');
// console.log(text);

gsap.to(h1, 2, {
	opacity: 0,
	y: -60,
	ease: Expo.easeInOut,
});
gsap.to(span, 2, {
	delay: 0.3,
	opacity: 0,
	y: -60,
	ease: Expo.easeInOut,
});
gsap.to(overlay, 2, {
	delay: 1,
	top: '-100%',
	ease: Expo.easeInOut,
});
gsap.from(ellipse, 1, {
	delay: 2,
	opacity: 0,
	ease: Expo.easeInOut,
});
gsap.from(yellow, 1, {
	delay: 3.5,
	opacity: 0,
	ease: Expo.easeInOut,
});
gsap.from(logo, 1, {
	delay: 3,
	opacity: 0,
	y: -100,
	ease: Expo.easeInOut,
});
gsap.from(
	menu,
	1,
	{
		delay: 3.2,
		opacity: 0,
		x: -100,
		ease: Expo.easeInOut,
	},
	0.08
);
gsap.from(scrolldown, 1, {
	delay: 3.4,
	opacity: 0,
	x: -100,
	ease: Expo.easeInOut,
});

gsap.from(title, 1, {
	delay: 3,
	opacity: 0,
	x: -200,
	ease: Expo.easeInOut,
});
gsap.from(p, 1, {
	delay: 3.4,
	opacity: 0,
	x: -200,
	ease: Expo.easeInOut,
});
gsap.from(watch, 1, {
	delay: 3.4,
	opacity: 0,
	x: 200,
	ease: Expo.easeInOut,
});
gsap.from(
	media,
	1,
	{
		delay: 3.4,
		opacity: 0,
		y: 100,
		ease: Expo.easeInOut,
	},
	0.08
);
