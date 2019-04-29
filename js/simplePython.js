$('.ui.sidebar').sidebar('toggle');

$('.menu .item').tab();

$('.item').click(function () {
	$('.active').removeClass('active');
	$(this).addClass('active');
});

// Cambios de Renato 
//cambio para upload branch