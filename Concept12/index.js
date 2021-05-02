const textWrapper_1 = document.querySelector('.header-1');
// replace spaces with another character /\S/g
// take text break it into letters in put them in sperate span
textWrapper_1.innerHTML = textWrapper_1.textContent.replace(
	/\S/g,
	"<span class='letter'>$&</span>"
);

anime.timeline().add({
	targets: document.querySelectorAll('.header-1 .letter'),
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	easing: 'easeOutExpo',
	duration: 2000,
	delay: (el, i) => 4800 + 50 * i,
});
const textWrapper_2 = document.querySelector('.header-2');
// replace spaces with another character /\S/g
textWrapper_2.innerHTML = textWrapper_2.textContent.replace(
	/\S/g,
	"<span class='letter'>$&</span>"
);

anime.timeline().add({
	targets: document.querySelectorAll('.header-2 .letter'),
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	easing: 'easeOutExpo',
	duration: 2000,
	delay: (el, i) => 4800 + 50 * i,
});

gsap.to(document.querySelector('.wrapper'), 2, {
	top: -100 + '%',
	ease: Expo.easeInOut,
	delay: 3.6,
});

var tl = gsap.timeline();

tl.from(document.querySelector('.loader'), 1.6, {
	scaleY: 0,
	y: 80,
	ease: Expo.easeInOut,
	delay: 1,
	transformOrigin: '50% 100%',
});

tl.to('.loader', 1.6, {
	height: 20 + 'vh',
	scaleY: 0,
	ease: Expo.easeInOut,
	transformOrigin: '0% -100%',
});

gsap.to(document.querySelector('.box'), 2.4, {
	y: -100 + '%',
	ease: Expo.easeInOut,
	delay: 3.8,
});

// console.log(document.querySelectorAll('.menu > div'));
const tl_1 = new gsap.to(
	document.querySelectorAll('.menu > div'),
	2,
	{
		opacity: 1,
		y: 10,
		ease: Expo.easeInOut,
		delay: 4.2,
		stagger: 0.3,
	},
	0.1
);
const tl_2 = new gsap.to(
	document.querySelectorAll('.hero-container > div'),
	2,
	{
		opacity: 1,
		y: 30,
		ease: Expo.easeInOut,
		delay: 4.2,
		stagger: 0.3,
	},
	0.1
);
