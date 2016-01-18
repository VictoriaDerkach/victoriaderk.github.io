$('ul li').click(function() {
	$('ul li').removeClass('active');
	$(this).addClass('active');
	$('.tab').addClass('hidden');
	$('#' + $(this).attr('data-id')).removeClass('hidden');
});


$('input').mouseenter(function(e){
	var pos = $(this).position();
	$('[data-id='+$(this).attr('id')+']')
	.css({
		 "top" : pos.top + 35,
         "left" : pos.left
	})
	.fadeIn("fast");
})
.mouseleave(function(){
	$('[data-id='+$(this).attr('id')+']').fadeOut("fast");
});

$('#btn_tips').click(function(){
	$('.tips').fadeIn("fast");
});