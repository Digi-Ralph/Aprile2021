//Select The canvas element
const canvas = document.querySelector('canvas');
//set up the canvas diminsions width & height using js , doesn't work with css
// window.addEventListener('resize', function (e) {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// });

// c = context in canvas = declare a drawing context on the canvas
const c = canvas.getContext('2d');

const colorArray = ['#2185C5', '#27ECEFD', '#FFF6E5', '#FF7F66'];

//create a template for each element
function Circle(x, y, radius, color) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.minRadius = radius;
	this.color = color;
	this.draw = function () {
		// declare a starting point
		c.beginPath();
		// set up the circle parameters
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.shadowColor = this.color;
		c.shadowBlur = 15;

		//chose color from color Array
		c.fillStyle = this.color;
		// color the circle with default color "black"
		c.fill();
		//draw the circle in the canvas
	};
	this.draw;
}

// creat empty array
let circleArray = [];
function init() {
	// reset the circle Array
	circleArray = [];
	// set each element in the array [circle] parameters
	for (let i = 0; i < 300; i++) {
		const canvasWidth = canvas.width + 500;
		const canvasHeight = canvas.height + 500;
		// declare circle radius
		let radius = Math.random() * 3;
		// declare x , y coordonation
		let x = Math.random() * canvasWidth - canvasWidth / 2;
		let y = Math.random() * canvasHeight - canvasHeight / 2;
		let color = colorArray[Math.floor(Math.random() * colorArray.length)];
		circleArray.push(new Circle(x, y, radius, color));
	}
}
init();
let mouseDown = false;
window.addEventListener('mousedown', () => {
	mouseDown = true;
});
let a = 0;
let b = 1;
function animate() {
	//creat a loop animation
	requestAnimationFrame(animate);
	c.fillStyle = `rgba(10,10,10,${b})`;
	// clear entier canvas each time we want to drawn
	// sets the pixels in a rectangular area to transparent black (rgba(0,0,0,0)). (erase)
	c.fillRect(0, 0, canvas.width, canvas.height);
	// c.clearRect(0, 0, canvas.width, canvas.height);
	c.save();
	c.translate(canvas.width / 2, canvas.height / 2);
	c.rotate(a);
	circleArray.forEach((obj) => obj.draw());
	c.restore();
	a += 0.005;
	if (mouseDown && b >= 0.1) {
		b -= 0.01;
	} else if (!mouseDown && b < 1) {
		b += 0.01;
	}
}

animate();
