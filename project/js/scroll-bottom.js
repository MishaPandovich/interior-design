var timer,
		topScroll,
		heightScroll = document.querySelector('.header').clientHeight,
		linkScrollBottom = document.querySelector('.header-content__arrow');

function scrolling() {
	topScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

	if (topScroll < heightScroll) {
		window.scrollBy(0 , +80);
		timer = setTimeout('scrolling()', 20);
	} else clearTimeout(timer);

	return false;
}

linkScrollBottom.addEventListener('click', scrolling);