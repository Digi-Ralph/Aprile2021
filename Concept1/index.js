const header = document.querySelector('#header');
const banner = document.querySelector('#bannerBg');
const bannerAddition = document.querySelector('#bannerBgAddition');
console.log(banner);

const h1Line = document.querySelectorAll('.line span');

// init diff animation one after the other
const bannerTL = gsap.timeline();
const contentP = document.querySelector('.content-inner p');
const contentButton = document.querySelector('.content-inner .btn-row');
const playVideoCover = document.querySelector('.play-video .cover');
const playVideo = document.querySelector('.play-video span');

const handImg = document.querySelector('.image-inner img');
// const featureBanner = document.querySelector('.image-inner img');
// const handImg= document.querySelector('.image-inner img');

const featuresContentTitle = document.querySelector('.features-content h3');
const featuresContentP = document.querySelector('.features-content p');
const featuresContentButton = document.querySelector(
	'.features-content .btn-row'
);
const featuresList = document.querySelectorAll('.features-list ul li');
bannerTL
	.from([bannerAddition, banner], {
		duration: 1.2,
		width: 0,
		skewX: 4,
		ease: 'power3.inOut',
		stagger: {
			amount: 0.2,
		},
	})
	.from(header, {
		delay: -0.2,
		y: 35,
		opacity: 0,
		duration: 0.8,
		ease: 'power3.Out',
		stagger: {
			amount: 0.2,
		},
	})
	.from(h1Line, {
		delay: -0.4,
		y: 80,
		duration: 0.8,
		ease: 'power3.Out',
		stagger: {
			amount: 0.2,
		},
	})
	.from([contentP, contentButton], {
		delay: -0.6,
		y: -40,
		duration: 0.8,
		opacity: 0,
		ease: 'power3.Out',
		stagger: {
			amount: 0.2,
		},
	})
	.to([playVideo, playVideoCover], {
		delay: -0.8,
		opacity: 1,
		duration: 0,
	})
	.to(playVideoCover, {
		delay: -0.8,
		height: 0,
		duration: 1,
		ease: 'power3.Out',
	});

gsap.from(handImg, {
	delay: 2.2,
	x: -100,
	skewX: 2,
	duration: 0.8,
	opacity: 0,
	ease: 'power3.Out',
});

// const featuresTL = gsap.timeline();
// featuresTL
const arrayContent = [
	featuresContentTitle,
	featuresContentP,
	featuresContentButton,
];
console.log(arrayContent);
arrayContent.forEach((content) => {
	gsap.to(content, {
		scrollTrigger: {
			trigger: content,
			start: 'top top+=400',
			// markers: true,
		},
		delay: -1,
		y: 50,
		opacity: 1,
		duration: 1,
		ease: 'power3.Out',
		stagger: {
			amount: 0.2,
		},
	});
});
featuresList.forEach((list) => {
	gsap.to(list, {
		scrollTrigger: {
			trigger: list,
			start: 'top top+=450',
			// view where animation will start usin markup
			// markers: true,
		},
		delay: -0.5,
		y: 50,
		opacity: 1,
		duration: 1,
		ease: 'power3.Out',
		stagger: {
			amount: 0.2,
		},
	});
});
