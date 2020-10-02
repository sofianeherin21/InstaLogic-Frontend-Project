(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();

  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Start ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Start Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Start Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			
			$('.navbar-b .navbar-brand img').css('margin-top',0);
			$('.navbar-b .navbar-brand img').css('height',"70px");

		} else {
			
			$('.navbar-b .navbar-brand img').css('margin-top',"-5rem");
			$('.navbar-b .navbar-brand img').css('height',"100px");

		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});
	// banner bg

	$('#owl').owlCarousel({

		autoplay: true,
		autoplayTimeout: 1000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

	// Image Slider

	$('.autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        
        
    });

    // Animations

    $('#about').waypoint(function() {
	$('#about').css({
	animation: "fadeIn 2s linear forwards",
	opacity:"1"
	});
	}, { offset: '80%' }); 

    $('#service').waypoint(function() {
	$('#service').css({
	animation: "fadeIn 2s linear forwards",
	});
	}, { offset: '80%' });

	$('#product').waypoint(function() {
	$('#product').css({
	animation: "fadeIn 2s linear forwards",
	});
	}, { offset: '80%' });

	$('#gallery').waypoint(function() {
	$('#gallery').css({
	animation: "fadeIn 2s linear forwards",
	});
	}, { offset: '80%' });  


})(jQuery);
