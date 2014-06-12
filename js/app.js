$(document).ready(function(){

	/* show/hide nav and #main */

	$(window).scroll(function() {
		if($(window).scrollTop() >= 10) {
			$("nav").fadeIn();
			$("#main").fadeOut();
		}

		if($(window).scrollTop() === 0) {
			$("nav").fadeOut();
			$("#main").fadeIn();
		}
	});


	/* project slider */

	var sliderWidth;
	var sliderNum;

	$("#projects").on("click", ".right", function(){
		if ($(window).width() < 640) {
			sliderWidth = 0.765;
			sliderNum = $(window).width() * sliderWidth * 5;
		} else {
			sliderWidth = 0.96;
			sliderNum = $(window).width() * sliderWidth;
		}

		if ( parseInt($("#projects ul").css("left")) > (-parseInt(sliderNum)) ) {
			$("#projects ul").animate({left: "-=" + (sliderWidth * 100) + "%"}, 1500);
		}
	});

	$("#projects").on("click", ".left", function(){
		if ( parseInt($("#projects ul").css("left")) < 0 ) {
			$("#projects ul").animate({left: "+=" + (sliderWidth * 100) + "%"}, 1500);
		}
	});

	$(window).resize(function() {
		$("#projects ul").animate({left: "0"}, 0);
	});

});