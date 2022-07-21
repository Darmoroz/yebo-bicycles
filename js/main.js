
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

$('.icon-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});

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


//# sourceMappingURL=main.js.map