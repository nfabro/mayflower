

/* header */



/* navigation */




/* carousel */



/* services */

$(window).scroll(function() {
	$(".slideanimation").each(function(){
		var pos = $(this).offset().top;

		var winTop = $(window).scrollTop();
		if (pos < winTop + 600) {
		$(this).addClass("slideanim");
		}
	});
});




/*about us */




/* contact us */




/* forms */





/* footer */
