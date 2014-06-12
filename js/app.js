$(document).ready(function(){

	/* show/hide nav and #main */

	$(window).scroll(function() {
		if($(window).scrollTop() >= 10) {	// 10 (instead of 0) is to decrease sensitivity
			$("nav").fadeIn();
			$("#main").fadeOut();
		}

		if($(window).scrollTop() === 0) {
			$("nav").fadeOut();
			$("#main").fadeIn();
		}
	});


	/* project slider */

	var arrowR = $("#projects .right");
	var arrowL = $("#projects .left");
	var slider = $("#projects ul");
	var sliderWidth;
	var sliderNum;

	function getSliderProperties() {
		var windowWidth = $(window).width();

		if (windowWidth < 640) {
			sliderWidth = 0.765;
			sliderNum = windowWidth * sliderWidth * (slider.children().length - 1);
		} else {
			sliderWidth = 0.96;
			sliderNum = windowWidth * sliderWidth;
		}
	}

	function moveSlider(direction) {
		slider.animate({left: direction + (sliderWidth * 100) + "%"}, 1500);
	}


	arrowR.click(function() {
		getSliderProperties();

		if ( parseInt(slider.css("left")) > (-sliderNum + 10) ) {	// + 10 is to compensate for rounding errors
			moveSlider("-=");
		}
	});

	arrowL.click(function() {
		if ( parseInt(slider.css("left")) < 0 ) {
			moveSlider("+=");
		}
	});

	$(window).resize(function() {
		slider.animate({left: "0"}, 0);	// so doesn't mess up slider position after resize
	});

});