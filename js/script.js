$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__nav, .header__burger').toggleClass('active');
		if ($('.header__burger').hasClass('active')) {
			$('html').css('overflowY', 'hidden');
		} else {
			$('html').css('overflowY', 'auto');
		}
	});
});