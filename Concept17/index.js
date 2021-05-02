window.addEventListener('DOMContentLoaded', function () {
	const tl_1 = gsap.timeline();
	const tl_2 = gsap.timeline();
	const tl_3 = gsap.timeline();

	tl_1.from(document.querySelectorAll('.mask'), 0.5, {
		scaleX: 0,
		transformOrigin: 'left',
		ease: 'Power3.easeOut',
		// stagger: 0.5,
	});
	tl_1.to(
		document.querySelectorAll('.mask'),
		1,
		{ scaleX: 0, transformOrigin: 'right', stagger: 0.5 },
		'reveal'
	);
	tl_1.from(document.querySelector('img'), 0.5, { opacity: 1 }, 'reveal');
	tl_1.from(
		document.querySelector('.text-container > h1'),
		1,
		{ opacity: 0 },
		'reveal'
	);
	tl_1.from(
		document.querySelector('.title-container > h1'),
		0.5,
		{ opacity: 0 },
		'reveal'
	);

	tl_2.to(document.querySelector('.logo'), 1, {
		delay: 1,
		opacity: 1,
	});
	tl_2.to(document.querySelectorAll('.social > ion-icon'), 0.5, {
		y: -50,
		opacity: 1,
		stagger: 0.5,
	});
	tl_2.to(document.querySelector('.hamberger'), 0.5, {
		// x: -20,
		opacity: 1,
	});
	tl_2.to(document.querySelectorAll('.search-cart > ion-icon'), 1, {
		x: -50,
		opacity: 1,
		stagger: 1,
	});
	tl_3.to(document.querySelector('nav + a'), 1, {
		delay: 1.5,
		y: -50,
		opacity: 1,
	});
	tl_3
		.from(document.querySelector('.comment'), 1, {
			x: -500,
			opacity: 0,
		})
		.to(document.querySelector('.comment'), 1, {
			x: 0,
			opacity: 1,
		});
});
