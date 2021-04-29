//  1 / select canvas
const canvas = document.querySelector('canvas');
// 8 creat empty array
const particalsArray = [];
let hue = [];
// start canvas
// 2 / set the canvas diminsions
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 3 / set the canvas diminsions on browser resize
window.addEventListener('resize', function () {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

// 4 - set mouse Coordonition golobably
const mouse = {
	x: undefined,
	y: undefined,
};
// 5 - set event click
canvas.addEventListener('click', function (e) {
	mouse.x = e.x;
	mouse.y = e.y;
	//  ??????????
	for (let i = 0; i < 10; i++) {
		particalsArray.push(new Particle());
	}
});

// 6 - set event on mouse move
canvas.addEventListener('mousemove', function (e) {
	mouse.x = e.x;
	mouse.y = e.y;
	//
	for (let i = 0; i < 5; i++) {
		particalsArray.push(new Particle());
	}
});

// 7 - creat a blue print for particals
class Particle {
	// creat a new partical object each time iit's called
	constructor() {
		// a - object show up in mouse coordonite
		this.x = mouse.x;
		this.y = mouse.y;
		// b - volume of size raidus
		this.size = Math.floor(Math.random() * 15 + 1);
		// speed and direction  up and down in which circles move (operation results in both negative and positive numbers)
		this.speedX = Math.floor(Math.random() * 3 - 1.5);
		this.speedY = Math.floor(Math.random() * 3 - 1.5);
		this.color = 'hsl(' + hue + ',  100% ,50%)';
	}
	update() {
		// particals move to the lfet and right
		this.x += this.speedX;
		this.y += this.speedY;
		// if raidus is bigger than 0.2 start (decrease) substracting 0.1
		if (this.size > 0.2) this.size -= 0.1;
	}
	draw() {
		// draw the circle
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.fill();
	}
}

// for each object in the array init update / draw method
function handleParticles() {
	for (let i = 0; i < particalsArray.length; i++) {
		particalsArray[i].update();
		particalsArray[i].draw();
		// compare partical & creat lines
		for (let j = i; j < particalsArray.length; j++) {
			const dx = particalsArray[i].x - particalsArray[j].x;
			const dy = particalsArray[i].y - particalsArray[j].y;
			const distance = Math.sqrt(dx * dx + dy * dy);
			if (distance < 100) {
				ctx.beginPath();
				ctx.strokeStyle = particalsArray[i].color;
				// ctx.lineWidth = particalsArray[i].size / 10;
				ctx.lineWidth = 0.1;
				ctx.moveTo(particalsArray[i].x, particalsArray[i].y);
				ctx.lineTo(particalsArray[j].x, particalsArray[j].y);
				ctx.stroke();
				ctx.closePath();
			}
		}
		// if each Element size is smaller than 0.3 remove it from array
		if (particalsArray[i].size <= 0.3) {
			particalsArray.splice(i, 1);
			i--;
		}
	}
}

function animate() {
	// fill the canvas color with rbga color
	// ctx.fillStyle = 'rgba(1,0,0,0.1)';
	// erasing any previously drawn content.
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// draws a rectangle that is filled according to the current fillStyle.
	// ctx.fillRect(0, 0, canvas.width, canvas.height);
	//call the animation functio,
	handleParticles();
	// increase the hue color hsl
	hue -= 2;
	// set animation loop
	requestAnimationFrame(animate);
}
animate();
