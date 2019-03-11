const hamburgerBox = document.querySelector('.hamburger-box'),
hamburger = document.querySelector('.hamburger');
hamburgerBox.addEventListener('click', addActive);
function addActive(){
	this.classList.toggle('active');
}