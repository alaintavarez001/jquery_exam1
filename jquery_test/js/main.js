/*
	Directive by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});
    
   
/* hide contact form upon page load */    
    $('html').ready(function(){
        $('#contactForm').hide();
    });
 /* hide contact us button and fade in contact form on button click */    
    $('#contactUs').click(function(x){
        x.preventDefault();
        $('#contactUs').hide();
        $('#contactForm').fadeIn();
    })
    
/*image light box */
    
     var $overlay =  $('<div id="overlay"></div>');
     var $image = $('<img>');
    
    $('.image').click(function(a){
        a.preventDefault();
        $('html').append($overlay);
        $('#overlay').show();
        $overlay.append($image);
        var imageLocation = $(this).find('img').attr('src');
        $image.attr("src", imageLocation); 
    });
    
    $overlay.click(function(b){
        b.preventDefault();
        $('#overlay').hide();
    })
    
    
    
    
    
     /* var $overlay = $("<div id="overlay"> </div>");
    
    var $image = $("<img>");
    
    $("body").append($overlay);
    
    $overlay.append($image);
     
    $("#image").click(function(event){
        event.preventDefault();
        var imageLocation = $(this).attr("href");
    });
    
   $image.attr("src", imageLocation); 
    
   $overlay.show();
    
    $overlay.click(function(){
        $this.hide();
    }); */

    
    

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

	});

})(jQuery);