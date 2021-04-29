const title1 = document.querySelector('.title-1');
const title2 = document.querySelector('.title-2');
const runner = document.querySelector('.runner');
const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const box3 = document.querySelector('.box-3');
const pattern = document.querySelector('.pattern');
const logo = document.querySelector('.logo > img');
const menu = document.querySelectorAll('.menu ul li');
// console.log(menu);
const cart = document.querySelector('.cart');
const media = document.querySelectorAll('.media ul li');
console.log(media);
const content = document.querySelector('.content p');
const button = document.querySelector('.content button');

gsap.to(title1, 2, {
	x: 30,
	opacity: 1,
	ease: Expo.easeInOut,
});
gsap.to(title2, 2, {
	delay: 0.2,
	x: -80,
	opacity: 1,
	ease: Expo.easeInOut,
});
gsap.from(runner, 2, {
	delay: 1.6,
	x: -80,
	opacity: 0,
	ease: Expo.easeInOut,
});
gsap.from(box1, 4, {
	delay: 0.5,
	rotation: 200,
	transformOrigin: '50% 50%',
	x: -180,
	opacity: 0,
	ease: Expo.easeInOut,
});
gsap.from(box2, 2, {
	delay: 1.2,
	rotation: 90,
	transformOrigin: '50% 50%',
	x: -180,
	opacity: 0,
	ease: Expo.easeInOut,
});
gsap.from(box3, 2, {
	delay: 1,
	rotation: 180,
	transformOrigin: '50% 50%',
	x: -180,
	opacity: 0,
	ease: Expo.easeInOut,
});

gsap.from(pattern, 2, {
	delay: 0.2,
	width: 0,
	opacity: 0,
	ease: Expo.easeInOut,
});
gsap.from(logo, 2, {
	delay: 1.6,
	y: 20,
	opacity: 0,
	ease: Expo.easeInOut,
});

gsap.from(
	menu,
	2,
	{
		delay: 1.6,
		y: 20,
		opacity: 0,
		ease: Expo.easeInOut,
	},
	0.1
);

gsap.from(cart, 2, {
	delay: 1.7,
	y: 20,
	opacity: 0,
	ease: Expo.easeInOut,
});

gsap.from(
	media,
	2,
	{
		delay: 1.6,
		y: 20,
		opacity: 0,
		ease: Expo.easeInOut,
	},
	0.1
);
gsap.from(content, 2, {
	delay: 2.4,
	y: 20,
	opacity: 0,
	ease: Expo.easeInOut,
});
gsap.from(button, 2, {
	delay: 2.6,
	y: 20,
	opacity: 0,
	ease: Expo.easeInOut,
});
