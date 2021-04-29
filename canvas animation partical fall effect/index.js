//load variable imageSrc from the script img.js
import { imageSrc } from './img.js';
// creates a new HTMLImageElement instance.
// It is functionally equivalent to document.createElement('img').
const image = new Image();
// declare the img data base16 to varibale
image.src = imageSrc;
// load the image
image.addEventListener('load', function () {
	// select canvas element
	const canvas = document.querySelector('canvas');
	// the context canvas to 2d
	const ctx = canvas.getContext('2d');
	// set canvas width and height
	canvas.width = 800;
	canvas.height = 500;
	// draw image in the canvas (img , x , y , width , height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
	//Get pixel data of canvas (width , height , RGBA colors)
	const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Creat empty array to set up particles and set up the limit number
	// for particales to appear in canvas
	let particlesArray = [];
	const numberOfParticles = 5000;

	let mappedImage = [];
	for (let y = 0; y < canvas.height; y++) {
		let row = [];
		for (let x = 0; x < canvas.width; x++) {
			const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
	
			const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
	
			const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
	
			const brightness = calculateRelativeBrightness(red, green, blue);
			
			row.push(brightness);
		}
		mappedImage.push(row);
	}
	function calculateRelativeBrightness(red, green, blue) {
		return Math.sqrt(
				(red * red )* 0.299 + 
				(green * green) * 0.587 + 
				(blue * blue) * 0.114
			) / 100;
		
	}

	const detail = 1;
	// creat a blueprint for each particle
	class Particle {
		constructor() {
			// horizontal coordination
			this.x = Math.random() * canvas.width;
			this.y = 0;
			this.speed = 0;
			this.velocity = Math.random() * 0.5;
			this.size = Math.random() * 1.5 + 1 ;

		}
		update() {
			this.speed = mappedImage[Math.floor(this.y / detail)][Math.floor(this.x / detail)];
			let movement = 2.5 - this.speed + this.velocity;

			this.y += movement ;

			this.y += this.velocity ;
			// of particles reached the end of the canvas
			// add a new layer of particles
			if (this.y >= canvas.height) {
				this.y = 0;
				this.x = Math.random() * canvas.width;
			}
		}
		// Draw cricle
		draw() {
			ctx.beginPath();
			ctx.fillStyle = 'white';
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.fill();
		}
	}
	// Fill the array with particales
	function init() {
		for (let i = 0; i < numberOfParticles; i++) {
			particlesArray.push(new Particle());
		}
	}
	init();

	// set the animation loop
	function animate() {
		// ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
		ctx.globalAlpha = 0.05;
		ctx.fillStyle = 'rgb(0,0,0)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.globalAlpha = 0.2;
		// for each particales update and draw them
		for (let i = 0; i < particlesArray.length; i++) {
			particlesArray[i].update();
			ctx.globalAlpha = particlesArray[i].speed * 0.5;
			particlesArray[i].draw();
		}
		//call the animation to init the loop
		requestAnimationFrame(animate);
	}
	animate();
});