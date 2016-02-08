$(function(){
	$('.carousel-list').carousel({pixelsOffset: 125, speed: 300});

	var html = $('#item_tmpl').html();

	var profile = {
		name: 'Derkach Victoria',
		image: 'img/foto.jpg',
		about: 'Teacher of mathematics and informatics, electronics engineer',
		titleReason: 'I want to learn frontend for several reasons:',
		reasons: {},
		titlePhone: 'My telephone number',
		phone: '+380939182262',
		titleFacebook: 'Me on facebook',
		urlFacebook: 'https://www.facebook.com/VictoriaVDerkach',
		titleFeedback: 'My feedback:',
		feedback: 'Hope you will help me to improve my skills'

	};

	var template = tmpl(html, {data: profile});

	$('body').append(template);

});