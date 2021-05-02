gsap.from(document.querySelectorAll('.text-inner > *'), 2, {
	opacity: 0,
	delay: 2,
	stagger: 0.2,
});
gsap.from(document.querySelector('.toggle-btn'), 1, {
	x: -150,
	y: -150,
	delay: 3.4,
});
gsap.from(document.querySelectorAll('.stripe1 img'), 2, {
	y: 400,
	opacity: 0,
	stagger: 0.4,
	delay: 5,
});
gsap.from(document.querySelectorAll('.stripe2 img'), 2, {
	opacity: 0,
	stagger: 0.4,
	delay: 5,
});

const tl = gsap.timeline({ paused: true });

tl.to(document.querySelector('.menu-icon'), 1.6, {
	opacity: 0,
	rotation: 180,
});
tl.to(
	document.querySelector('.close-icon'),
	1.6,
	{
		opacity: 1,
		rotation: 180,
	},
	'-=0.9'
);
tl.to(
	document.querySelector('.menu'),
	1.6,
	{
		scale: 1,
	},
	'-=1'
);
tl.from(
	document.querySelectorAll('.menu li'),
	1.6,
	{
		opacity: 0,
		x: -100,
		stagger: 0.4,
	},
	'-=1'
);

tl.reverse();

const toggleBtn = document.querySelector('.toggle-btn');

// toggleBtn.onlick = function () {
// };

toggleBtn.addEventListener('click', function () {
	tl.reversed(!tl.reversed());
});
