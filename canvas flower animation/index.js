const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over';
let number = 0;
let scale = 10;
let hue = Math.random() * 360;
// let size = 20;
function draw() {
	let angle = number * 95;
	let radius = scale * Math.sqrt(number);
	let positionX = radius * Math.sin(angle) + canvas.width / 2;
	let positionY = radius * Math.cos(angle) + canvas.height / 2;
	ctx.fillStyle = 'hsl(' + hue + ',100%,50%)';
	ctx.strokeStyle = 'hsl(' + hue + ',100%,50%)';
	ctx.lineWidth = 5;
	ctx.beginPath();
	ctx.arc(positionX, positionY, 20, 0, Math.PI * 2);
	// Math.PI * 2 = full circle
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	number++;
	hue++;
}

function animate() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	if (number > 900) return;
	draw();
	requestAnimationFrame(animate);
}
animate();
