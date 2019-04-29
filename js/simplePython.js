$('.ui.sidebar').sidebar('toggle');

$('.menu .item').tab();

$('.item').click(function () {
	$('.active').removeClass('active');
	$(this).addClass('active');
});

//final change