const tl_1 = gsap.timeline();
const tl_2 = gsap.timeline();
const tl_3 = gsap.timeline();

tl_1.to(document.querySelector('.wrapper'), 1, {
	width: 100 + '%',
	ease: Power2.easeOut,
});
tl_1.from(document.querySelectorAll('.img-mask'), 1, {
	scaleX: 0,
	transformOrigin: 'left',
	stagger: 0.3,
});
tl_1.to(
	document.querySelectorAll('.img-mask'),
	1,
	{ scaleX: 0, transformOrigin: 'right', stagger: 0.3 },
	'reveal'
);
tl_1.from(document.querySelector('.img-hero'), 1, { opacity: 0 }, 'reveal');
tl_1.from(document.querySelector('.img-main'), 1, { opacity: 0 }, 'reveal');

// // nav
tl_2
	.to(document.querySelector('.block-1 .logo'), 1, {
		delay: 3,
		opacity: 1,
		y: 25 + 'px',
		ease: Power3.easeInOut,
	})
	.to(document.querySelectorAll('.block-1 .menu ul li'), 0.5, {
		opacity: 1,
		y: 25 + 'px',
		ease: Power3.easeInOut,
		stagger: 0.3,
	})
	.to(document.querySelectorAll('.block-2 ul li'), 0.5, {
		opacity: 1,
		y: 25 + 'px',
		ease: Power3.easeInOut,
		stagger: 0.3,
	})
	.to(document.querySelectorAll('.social ul li'), 0.5, {
		opacity: 1,
		ease: Power3.easeInOut,
		stagger: 0.5,
	})
	.to(document.querySelector('.scrolldown'), 0.5, {
		opacity: 1,
		ease: Power3.easeInOut,
	});

tl_3
	.to(document.querySelector('.title h1 span '), 1, {
		delay: 3.5,
		bottom: 0,
		ease: Power3.easeInOut,
	})
	.to(document.querySelector('.title h4 span '), 1, {
		bottom: 0,
		ease: Power3.easeInOut,
	});
