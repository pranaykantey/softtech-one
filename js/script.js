(function($){
	$(document).ready(function(){
		// header news ticker
		var TIcount			= 1;
		setInterval(function(){
			var tickerItem 		= $('.ticker-content ul li');
			var tickerActive 	= $('.ticker-content ul li.active');

			if( TIcount < tickerItem.length ){
				tickerActive.removeClass('active').next('li').addClass('active');
				console.log(TIcount);
				TIcount += 1;
			}else if( TIcount == tickerItem.length ){
				tickerItem.last().removeClass('active');
				tickerItem.first().addClass('active');
				TIcount = 1;
			}
		},3000);
		// header slider
		var owlCarousel = $('.header-carousel').owlCarousel({
			items 				: 1,
			autoplay			: true,
			loop				: true,
			autoplayHoverPause	: true,
			nav					: true,
			navText				: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
		});
		var sliderBg = $('.owl-item.active .slider-single').attr('data-background');
		$('.header-main').css('background-image','url('+sliderBg+')' );

		owlCarousel.on('changed.owl.carousel', function(event) {
			setTimeout(function(){
				sliderBg = $('.owl-item.active .slider-single').attr('data-background');
				$('.header-main').css('background-image','url('+sliderBg+')' );

			},10 );
		});
		// slider modal
		$('.play-icon').on('click',function(){
			$(this).next('.slider-modal').show();
			$('.owl-prev').css('display','none');
			$('.owl-next').css('display','none');
		});
		$('.sliderModal-head .fa.fa-close').on('click',function(){
			$('.slider-modal').hide();
			$('.owl-prev').css('display','block');
			$('.owl-next').css('display','block');
		});
		// review slider
		$('.review-carousel').owlCarousel({
			items		: 1,
			nav			: true,
			navText		: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
		});
		// main menu icon
		$('.main-menu ul li ul').parent('li').addClass('submenu-icon').children('a').after('<i class="fa fa-sort-desc menu-icon"></i>');
		// gallery tab menu
		var tabMenuTarget = $('.tab-menu ul li a').attr('href');
		$('.tab-menu ul li a').on('click',function(e){
			e.preventDefault();
			var tabTarget = $(this).attr('href');
			$('.tab-menu').find('li').removeClass('active');
			$(this).parent('li').addClass('active');
			console.log(tabTarget);
			$('.tab-item').removeClass('active');
			$( tabTarget+'.tab-item' ).addClass('active');
		});
		// menu toggle
		$(".mainMenu-icon").on('click',function(){
			$('.main-menu').slideToggle();
		});
	});
}(jQuery));