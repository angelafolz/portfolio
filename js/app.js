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
			sliderWidth = 76.5;
			sliderNum = sliderWidth * 6;
		} else {
			sliderWidth = 96;
			sliderNum = sliderWidth;
		}

		if ( $("#projects ul").css("left") >= "-" + sliderNum + "%" ) {
			$("#projects ul").animate({left: "-=" + sliderWidth + "%"}, 1500);
		}
	});

	$("#projects").on("click", ".left", function(){
		if ( $("#projects ul").css("left") <= "0" ) {
			$("#projects ul").animate({left: "+=" + sliderWidth + "%"}, 1500);
		}
	});

});