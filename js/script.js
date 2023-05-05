(function ($) {
	$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
          elem = $(id).offset().top;
       $('body,html').animate({scrollTop: elem}, 1500);
       $('#page').removeClass('open-menu');
    });

    $('.btn-scroll').on("click", function (event) {
       event.preventDefault();
       var id  = $(this).attr('data-href'),
          elem = $(id).offset().top;
       $('body,html').animate({scrollTop: elem}, 1500);
    });

    $('#menu-triger').on('click', function(event) {
      event.preventDefault();
      var elem = $('#page');

      if(elem.hasClass('open-menu')){
        elem.removeClass('open-menu');
      }
      else{
        elem.addClass('open-menu');
      }
    });
	});

	$(window).scroll(function(){
		var scrolled = $(window).scrollTop(),
    		height = $(window).height();

  	if(scrolled > 5){
  		$('#page').addClass('scrolled');
  	}
  	else{
  		$('#page').removeClass('scrolled');
  	}
	});
})(jQuery);