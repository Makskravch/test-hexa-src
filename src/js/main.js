let $ = require('jquery')
let slick = require('./slick.js')

$(document).ready(function () {
	const body = $('body')
	const slider = $('.slider__list')
	const menuToggle = $('.js-menu-toggle')
	const nav = $('.nav')
	const main = $('.main')

	menuToggle.on('click', function () {
		body.toggleClass('overflow')
		main.toggleClass('blur')
		$(this).toggleClass('is-active')
		nav.toggleClass('is-active')
	})

	if (slider.length) {
		slider.slick({
			infinite: true,
			dots: true,
			appendArrows: $('.slider__controls'),
			appendDots: $('.slider__controls'),
			autoplay: true,
			autoplaySpeed: 5000
		});
	}
});