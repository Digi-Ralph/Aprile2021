const logo = document.querySelector('.nav > .logo');
const subtitle = document.querySelector('.sub-title');
const spanContent = document.querySelectorAll('.content > h1 > span');
const content = document.querySelectorAll('.content > .title > span');
const p = document.querySelector('.content > p ');
const pspan = document.querySelector('.content > p  > span');
const img = document.querySelector('.img-wrapper');
const contenttext = document.querySelectorAll('.content-text > h1');
const contentp = document.querySelector('.content-text > p');
const loading = document.querySelectorAll('.loading');

gsap.to(loading, 0.5, {
	y: -100 + '%',
	duration: 0.2,
	stagger: 0.3,
});

gsap.to(content, 2, {
	delay: 0.5,
	left: 0,
	ease: Expo.easeInOut,
});
gsap.to(spanContent, 2, {
	delay: 0.5,
	left: 0,
	ease: Expo.easeInOut,
});
gsap.to(pspan, 2, {
	delay: 0.5,
	left: 0,
	ease: Expo.easeInOut,
});
gsap.to(subtitle, 3, {
	delay: 0.5,
	bottom: 0,
	ease: Expo.easeInOut,
});
gsap.to(contenttext, 3, {
	y: 10,
	opacity: 1,
	ease: Expo.easeInOut,
});
gsap.to(contentp, 3, {
	y: 5,
	opacity: 1,
	ease: Expo.easeInOut,
});
gsap.to(img, 5, {
	y: -50,
	opacity: 1,
	ease: Expo.easeInOut,
});
gsap.to(logo, 5, {
	opacity: 1,
	ease: Expo.easeInOut,
});
