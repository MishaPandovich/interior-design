var menuToggle = document.querySelector('.menu-toggle');
var socialLinks = document.querySelector('.social');
var menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
	menuToggle.classList.toggle('menu-close');
	socialLinks.classList.toggle('social--show');
	menu.classList.toggle('menu--show');
}); 