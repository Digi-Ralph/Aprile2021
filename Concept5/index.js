document.addEventListener('DOMContentLoaded', function () {
	// code...

	let menuT1 = gsap.timeline({ pause: true });

	menuT1
		.from('nav ul li', 0, { display: 'none' })
		.staggerFrom('nav ul li', 0.3, { x: 40, opacity: 0 }, 0.1)
		.to('.toggler .open', 0.1, { opacity: 0 })
		.to('.toggler .close', 0.1, { opacity: 1 });

	menuT1.play();

	const toggle = document.querySelector('.toggler');
	toggle.addEventListener('click', function () {
		menuT1.reversed() ? menuT1.play() : menuT1.reverse();
	});

	window.addEventListener('scroll', function () {
		this.scrollY > 100 ? menuT1.reverse() : menuT1.play();
	});
});
