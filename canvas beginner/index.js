const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c = context in canvas
const c = canvas.getContext('2d');
// //change color of rectangcle (put this in top of rectancle you want to change)
// c.fillStyle = '#1658';
// //fillRect take 4 varaibles
// // c.fillRect(x, y , width, height)
// // creat a rectancle
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = '#2058';
// c.fillRect(400, 200, 50, 50);
// //creat a line (starting a path)
// c.beginPath();
// //codination location x , y
// // c.moveTo(x,y);
// c.moveTo(50, 300);
// //creat a line to new point(where line you want to go to)
// c.lineTo(300, 100);
// c.lineTo(600, 350);
// c.lineTo(-200, 260);
// // add strock colors
// c.strokeStyle = '#1516';
// //call a strock method to make it visible
// c.stroke();

// //arc /cirlce
// // seperate line from circle
// for (let i = 0; i < 100; i++) {
// 	// generate random cordination
// 	let x = Math.random() * window.innerWidth;
// 	let y = Math.random() * window.innerHeight;
// 	// generate alt color = convert to base 16 (hex) and substract 6 digit
// 	let color = '#' + Math.random().toString(16).substr(-6);
// 	c.beginPath();
// 	c.arc(x, y, 30, 0, Math.PI * 2, false);
// 	c.strokeStyle = color;
// 	c.stroke();
// }
function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.draw = function () {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		// let color = '#' + Math.random().toString(16).substr(-6);
		// c.strokeStyle = color;
		c.fill();
		c.stroke();
	};
	this.draw();
	this.update = function () {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}
		//increase x each time function is refreshed
		this.x += this.dx;
		this.y += this.dy;
		// this.update();
	};
	this.update();
}

const circleArray = [];
for (let i = 0; i < 200; i++) {
	let radius = 30;
	let x = Math.random() * (window.innerWidth - radius * 2) + radius;
	let y = Math.random() * (window.innerHeight - radius * 2) + radius;
	// get negative value by subtracting -0.5
	let dx = Math.random() - 0.5;
	let dy = Math.random() - 0.5;
	circleArray.push(new Circle(x, y, dx, dy, radius));
}
// const circle = new Circle(500, 100, 4, 4, 30);
// let x = Math.random() * window.innerWidth;
// let y = Math.random() * window.innerHeight;
// // get negative value by subtracting -0.5
// let dx = (Math.random() - 0.5) * 8;
// let dy = (Math.random() - 0.5) * 8;
// let radius = 30;
function animate() {
	//creat a loop animation
	requestAnimationFrame(animate);

	// clear entier canvas each time we want to drawn
	c.clearRect(0, 0, innerWidth, innerHeight);
	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
		circleArray[i].draw();
	}
	// circle.draw();
	// circle.update();
	// c.beginPath();
	// c.arc(x, y, radius, 0, Math.PI * 2, false);
	// c.strokeStyle = 'blue';
	// c.stroke();

	//if x supressed the inner width let it go backward
	// if (x + radius > window.innerWidth || x - radius < 0) {
	// 	dx = -dx;
	// }
	// if (y + radius > window.innerHeight || y - radius < 0) {
	// 	dy = -dy;
	// }
	// //increase x each time function is refreshed
	// x += dx;
	// y += dy;
}

animate();
