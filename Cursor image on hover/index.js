const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const blockImg = document.querySelectorAll('.block');

function mouse(e) {
	const x = e.clientX;
	const y = e.clientY;

	cursor.style.left = x + 'px';
	cursor.style.top = y + 'px';
}
function follower(e) {
	cursorFollower.style.left = e.clientX + 'px';
	cursorFollower.style.top = e.clientY + 'px';
}
function inblock(e) {
	cursorFollower.classList.add('close');
	cursor.classList.add('active');
}
function outblock(e) {
	cursorFollower.classList.remove('close');
	cursor.classList.remove('active');
}

window.addEventListener('mousemove', mouse);
window.addEventListener('mousemove', follower);
blockImg.forEach((e) => e.addEventListener('mouseenter', inblock));
blockImg.forEach((e) => e.addEventListener('mouseleave', outblock));
