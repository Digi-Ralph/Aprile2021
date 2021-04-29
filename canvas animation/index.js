//Select The canvas element
const canvas = document.querySelector('canvas');
//set up the canvas diminsions width & height using js , doesn't work with css
window.addEventListener('resize', function (e) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

// c = context in canvas = declare a drawing context on the canvas
const c = canvas.getContext('2d');

const colorArray = ['#ffaa33', '#99ffaaa', '#00ff00', '#4411aa', '#ff1100'];
//declare object mouse
const mouse = {
	x: undefined,
	y: undefined,
};
let maxRadius = 40;
let minRadius = 2;

//create a template for each element
function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
	this.draw = function () {
		// declare a starting point
		c.beginPath();
		// set up the circle parameters
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		//chose color from color Array
		c.fillStyle = this.color;
		// color the circle with default color "black"
		c.fill();
		//draw the circle in the canvas
		// c.stroke();
	};
	this.draw();
	this.update = function () {
		// stop circle from going out side window edges
		// add the radius of the circle to coorination to dectect when circle get to the edge of the screens
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			// if true decrease the pixels circle is moving horizonatly
			this.dx = -this.dx;
		}
		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			// if true decrease the pixels circle is moving vertically
			this.dy = -this.dy;
		}
		//increase x , y each time function is refreshed (moved pixels)
		this.x += this.dx;
		this.y += this.dy;

		//interactivity
		//
		if (
			mouse.x - this.x < 50 &&
			mouse.x - this.x > -50 &&
			mouse.y - this.y < 50 &&
			mouse.y - this.y > -50
		) {
			if (this.radius < maxRadius) {
				this.radius += 1;
			}
		} else if (this.radius > minRadius) {
			this.radius -= 1;
		}
	};
	this.update();
}

// creat empty array
let circleArray = [];
function init() {
	// reset the circle Array
	circleArray = [];
	// set each element in the array [circle] parameters
	for (let i = 0; i < 500; i++) {
		// declare circle radius
		let radius = Math.random() * 3 + 1;
		// declare x , y coordonation
		let x = Math.random() * (window.innerWidth - radius * 2) + radius;
		let y = Math.random() * (window.innerHeight - radius * 2) + radius;
		// get negative value by subtracting -0.5
		let dx = Math.random() - 0.5;
		let dy = Math.random() - 0.5;

		circleArray.push(new Circle(x, y, dx, dy, radius));
	}
}
init();

function animate() {
	//creat a loop animation
	requestAnimationFrame(animate);
	// clear entier canvas each time we want to drawn
	// sets the pixels in a rectangular area to transparent black (rgba(0,0,0,0)). (erase)
	c.clearRect(0, 0, innerWidth, innerHeight);
	for (var i = 0; i < circleArray.length; i++) {
		// for each element within the CircleArray call update and draw methodes
		circleArray[i].update();
		circleArray[i].draw();
	}
}

animate();

window.addEventListener('mousemove', function (e) {
	mouse.x = e.clientX;
	mouse.y = e.clientY;
});
