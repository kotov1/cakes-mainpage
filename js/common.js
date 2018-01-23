/*====================== Наши скрипты =============================*/

$(function() {

	//Верхний слайдер главной страницы
	$(".slider_main").slick({
		infinite: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [{

		breakpoint: 576,
			settings: {
			adaptiveHeight: true,
			arrows: false
			}

		}]
	});

	//отмена действия ссылок по умолчанию
	// $('a.shop_card-link').on('click', function(e) {
	// 		e.preventDefault();
	// 	});
	


	//Слайдер в секции отзывы главной страницы
	$(".slider_about").slick({
		infinite: true,
		arrows: true,
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplaySpeed: 5000,

		responsive: [

		{
		breakpoint: 1200,
		settings: {
			slidesToShow: 2
			}
		},

		{
		breakpoint: 768,
		settings: {
			slidesToShow: 1
			}
		},

		{
		breakpoint: 576,
		settings: {
			slidesToShow: 1,
			adaptiveHeight: true,
			arrows: false
			}

		}]
	});


	//Плавный скролл к якорю секции интернет магазин тортов 
	$(".scrollDown").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});


		/*мобильное меню*/

	$(".toggleMenu_js").click(function(event) {
		$(this).toggleClass("on");
		$(".menuHead").toggleClass("ActiveMobMenu");
			$("#head__menu .menuHead__Href_js").click(function() {
			$(".menuHead").removeClass("ActiveMobMenu");
			$(".toggleMenu").removeClass("on");	
		}); 
			$(".header__bottom-line").removeClass("ActiveKatalog");				
		return false;
	}); // end мобильное меню




	/*мобильный каталог (поверх мобильного меню) */

	$(".menuHead__HrefKatalogMini_js").click(function(event) {
			$(".header__bottom-line").toggleClass("ActiveKatalog");
			$(".toggleMenuCloseKatalog_js").click(function() {
			$(".header__bottom-line").removeClass("ActiveKatalog");	
		}); 
			$(".header__BottomHref_js").click(function() {
			$(".header__bottom-line").removeClass("ActiveKatalog");
			$(".menuHead").removeClass("ActiveMobMenu");
		});

		return false;
	}); //end мобильный каталог

 



	/*прилипающий каталог на больших экранах*/

	var navPosition=$('.header__bottom-line').offset().top;

	$(window).scroll(function(){
		var navTop=$(window).scrollTop();
		if(navPosition < navTop){
			$('.header__bottom-line').addClass('stickytop');
		}
		else{
			$('.header__bottom-line').removeClass('stickytop');
		}
	});/* end прилипающий каталог на больших экранах*/



});
