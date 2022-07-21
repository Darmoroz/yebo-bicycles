if($('.slider__body').length>0){
	$('.slider__body').slick({
		dots:true,
		arrows:false,
		accessibility:false,
		slideToShow:1,
		autoplaySpeed: 3000,
		nextArrow:'<button type="button" class="slick-next"></button>',
		preArrow:'<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}

