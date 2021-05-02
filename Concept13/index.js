gsap.to(document.querySelector('.left'), 2, {
	delay: 0.8,
	width: 50 + '%',
	ease: Power2.easeInOut,
});
gsap.to(document.querySelector('.right'), 2, {
	delay: 0.6,
	width: 50 + '%',
	ease: Power3.easeInOut,
});
gsap.to(document.querySelector('.nav'), 2, {
	delay: 0.8,
	opacity: 1,
	ease: Expo.easeInOut,
});
gsap.to(document.querySelector('.text h1'), 2, {
	delay: 0.6,
	x: -200 + '%',
	ease: Circ.easeInOut,
});
gsap.to(document.querySelector('.text p'), 2, {
	delay: 0.7,
	x: -200 + '%',
	ease: Circ.easeInOut,
});
gsap.to(document.querySelector('.image'), 2, {
	delay: 1.5,
	width: 800 + 'px',
	ease: Power2.easeInOut,
});
gsap.to(document.querySelectorAll('.bottomnav ul li'), 2, {
	delay: 1,
	x: -400 + 'px',
	ease: Circ.easeInOut,
	stagger: 0.08,
});
gsap.to(document.querySelector('.info'), 2, {
	delay: 1.5,
	y: -100,
	ease: Circ.easeInOut,
});
gsap.to(document.querySelector('.name'), 2, {
	delay: 1.5,
	x: 800 + 'px',
	ease: Circ.easeInOut,
});
