$(document).ready(function(){
	var top = $('.wrapper').position().top;

	var scrollTop = $(window).scrollTop();
	var step1 = 'data-'+top;
	var step2 = 'data-'+(top+1000);
	var step3 = 'data-'+(top+1001);

	var windowWidth = $('.img-block').width();

	var classWidth = $('.image').width();

	var centerPosition = (windowWidth-classWidth)/2;

	$('.image').css('margin-left', centerPosition);

	$('.image').attr(step1, 'height: 528px; width: 150px; position: fixed; top:20px');

	$('.image').attr(step2, 'height: 1319px; width: 377px; top:20px');

	$('.image').attr(step3, 'height: 1319px; position: absolute; top:'+((top+1001)-top)+'px');

	var s = skrollr.init({
		edgeStrategy: 'set',
		easing: {
			WTF: Math.random,
			inverted: function(p) {
				return 1-p;
			}
		}
	});


	$(window).scroll(function(event) {
		console.log($('.image').position().top);

		windowWidth = $('.img-block').width();

		classWidth = $('.image').width();

		centerPosition = (windowWidth-classWidth)/2;

		$('.image').css('margin-left', centerPosition);


		console.log(top);

		
	});
})