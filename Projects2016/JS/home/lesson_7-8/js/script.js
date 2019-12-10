$('ul li').click(function() {
	$('ul li').removeClass('active');
	$(this).addClass('active');
	$('.tab').addClass('hidden');
	$('#' + $(this).attr('data-id')).removeClass('hidden');
});

$('input').mouseenter(function(e){
	showTip($(this));
})
.mouseleave(function(){
	$('[data-id='+$(this).attr('id')+']').fadeOut("fast");
});

$('#btn_tips').click(function(e){
	e.preventDefault();
	$('input.form-control').each(function(){
		showTip($(this));
	});
});

function showTip(elem){
	var pos = elem.position();
	$('[data-id='+elem.attr('id')+']')
	.css({
		 "top" : pos.top + 35,
         "left" : pos.left
	})
	.fadeIn("fast");
}