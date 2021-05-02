gsap.to(document.querySelector('.nav'), 1, {
	delay: 1.5,
	opacity: 1,
	y: -10,
	Expo: Power2.easeInOut,
});
gsap.to(document.querySelector('.scroll-down'), 1, {
	delay: 1,
	opacity: 1,
	bottom: 15 + '%',
	Expo: Power2.easeInOut,
});
gsap.to(document.querySelector('.left '), 1, {
	width: 50 + '%',
	Expo: Power1.easeInOut,
});
gsap.to(document.querySelector('.right'), 1, {
	width: 50 + '%',
	Expo: Power1.easeInOut,
});
gsap.to(document.querySelector('.img-wrapper'), 1, {
	opacity: 1,
	top: 50 + '%',
	Expo: Power2.easeInOut,
});
gsap.to(document.querySelector('.title'), 1, {
	delay: 1.5,
	opacity: 1,
	top: 15 + '%',
	Expo: Circ.easeInOut,
});
gsap.to(document.querySelector('.year'), 1, {
	delay: 1.5,
	opacity: 1,
	bottom: 20 + '%',
	Expo: Circ.easeInOut,
});

document.querySelector('.close-mobile').addEventListener('click', function () {
	document.querySelector('.menu').classList.remove('active');
});
document.querySelector('.mobile-menu').addEventListener('click', function () {
	document.querySelector('.menu').classList.add('active');
});
