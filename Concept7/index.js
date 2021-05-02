const main = document.querySelector('.main');

// intersection observer setup
const observerOptions = {
	threshold: 0.15,
};

const observerCallback = function (entries, observer) {
	const nav = document.querySelector('.nav');
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			nav.classList.add('active');
			// console.log('nav is intersecting');
		} else if (!entry.isIntersecting) {
			nav.classList.remove('active');
			// console.log('nav is not intersecting');
		}
	});
};
const observer = new IntersectionObserver(observerCallback, observerOptions);

observer.observe(main);

// gsap
// content1
const h3 = document.querySelector('.content1 > h3');
const h1 = document.querySelector('.content1 > h1');
const p = document.querySelector('.content1 > p');
const div = document.querySelector('.content1 > div');
const numbers = document.querySelectorAll('.numbers');
// content2
const h1_2 = document.querySelector('.content2 > h1 ');
const ul_2 = document.querySelectorAll('.content2 > ul > li ');

// content3
const h1_3 = document.querySelector('.content3 > h1');
const img = document.querySelectorAll('.wrapper-content-img');
const imgContent = document.querySelectorAll('.content-img');
// subscribion
const containerSub = document.querySelector('.container-sub > h1');
const containerinput = document.querySelector(
	'.container-sub > .input-container'
);
//content4
const form_h2 = document.querySelector('.form-title > h2');
const form_p = document.querySelector('.form-title > p');
const label = document.querySelectorAll('.input-container > label');
const input = document.querySelectorAll('.input-container > input');

const tl_1 = gsap.timeline({
	scrollTrigger: h3,
	h1,
	p,
	div,
	numbers,
});
const tl_2 = gsap.timeline({
	scrollTrigger: h1_2,
	ul_2,
});
const tl_3 = gsap.timeline({
	scrollTrigger: h1_3,
	img,
	imgContent,
});
const tl_sub = gsap.timeline({
	scrollTrigger: containerSub,
	containerinput,
});
const tl_4 = gsap.timeline({
	scrollTrigger: form_h2,
	form_p,
	label,
	input,
});
tl_1
	.to(h3, 0.5, {
		y: -10,
		opacity: 1,
		ease: 'power2.inout',
	})
	.to(numbers, 0.5, {
		y: -10,
		opacity: 1,
		ease: 'power2.inout',
	})
	.to(h1, 0.5, {
		y: -10,
		opacity: 1,
		ease: 'power2.inout',
	})
	.to(p, 0.5, {
		y: -10,
		opacity: 1,
		ease: 'power2.inout',
	})
	.to(div, 0.5, {
		y: -10,
		opacity: 1,
		ease: 'power2.inout',
	});

tl_2
	.to(h1_2, 0.5, {
		y: -10,
		opacity: 1,
		ease: 'power2.inout',
	})
	.to(ul_2, 0.5, {
		y: -10,
		opacity: 1,
		ease: 'power2.inout',
		stagger: 0.7,
	});

tl_3
	.to(h1_3, 0.5, {
		y: -10,
		opacity: 1,
		ease: 'power2.inout',
	})
	.to(img, 0.5, {
		y: -10,
		opacity: 1,
		ease: 'power2.inout',
		stagger: 0.7,
	})
	.to(imgContent, 0.5, {
		y: +10,
		opacity: 1,
		ease: 'power2.inout',
	});

tl_4
	.to(form_h2, 0.5, {
		y: -10,
		opacity: 1,
		ease: 'power2.inout',
	})
	.to(form_p, 0.5, {
		y: -10,
		opacity: 1,
		ease: 'power2.inout',
	})
	.to(label, 0.5, {
		y: 0,
		opacity: 1,
		ease: 'power2.inout',
		stagger: 0.5,
	})
	.to(input, 0.5, {
		y: 0,
		opacity: 1,
		ease: 'power2.inout',
		stagger: 0.4,
	});

tl_sub
	.to(containerSub, 0.5, {
		y: 0,
		opacity: 1,
		ease: 'power2.inout',
	})
	.to(containerinput, 0.5, {
		y: 0,
		opacity: 1,
		ease: 'power2.inout',
	});
