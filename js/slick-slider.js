$(document).ready(function () {
	$('.slider-reviews').slick({
		arrows: false,
		draggable: true,
		swipe: true,
		touchThreshold: 5,
		asNavFor: '.progressbar',
		centerMode: true,
	});
	$('.progressbar').slick({
		arrows: false,
		draggable: false,
		swipe: false,
		asNavFor: '.slider-reviews',
		variableWidth: true,
	});
});