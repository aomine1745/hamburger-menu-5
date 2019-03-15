const hamburgerBox = document.querySelector('.hamburger-box');
hamburgerBox.addEventListener('click', addActive);
function addActive(){
	this.classList.toggle('active');
}