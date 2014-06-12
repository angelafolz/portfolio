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
	var sliderStop;

	function getSliderProperties() {
		sliderWidth = slider.children().first().width() + parseInt(slider.children().first().css("margin-left"));

		if ($(window).width() >= 640) {
			sliderWidth *= 3;
			sliderStop = sliderWidth;
		} else {
			sliderStop = sliderWidth * (slider.children().length - 1);
		}
	}

	function moveSlider(direction) {
		slider.animate({left: direction + sliderWidth + "px"}, 1500);
	}


	arrowR.click(function() {
		getSliderProperties();

		if ( parseInt(slider.css("left")) > (-sliderStop + 10) ) {	// + 10 is to compensate for rounding errors
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