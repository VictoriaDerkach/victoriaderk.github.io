$(function () {
	$('.menu li').hover(
		function(){
			$(this).children('.submenu').slideDown(200);
		},
		function(){
			$(this).css('background-color', 'black')
			.children('.submenu')
		 	.slideUp(100);
		}
	);
	$('.arrow-prev').click(function(e){
		e.preventDefault();
		var prev = $('li.active').prev();
		if (prev.hasClass('not-active')) {
			$('li.active').removeClass('active').addClass('not-active');
			prev.addClass('active').removeClass('not-active');
		}
	});
	$('.arrow-next').click(function(e){
		e.preventDefault();
		var next = $('li.active').next();
		if (next.hasClass('not-active')){
			$('li.active').removeClass('active').addClass('not-active');
			next.addClass('active').removeClass('not-active');
		}
		
	});
	$("#country_id").selectbox();



	$(".niceCheck").mousedown(function(){
    	changeCheck($(this));
	});
	$(".niceCheck").each(function(){
    	changeCheckStart($(this));
    });
});

function changeCheck(el){
    var el = el, input = el.find("input").eq(0);
   	if(!input.attr("checked")) {
		el.css("background-position","0 -17px");	
		input.attr("checked", true)
	} else {
		el.css("background-position","0 0");	
		input.attr("checked", false)
	}
    return true;
}

function changeCheckStart(el){
	var el = el, input = el.find("input").eq(0);
	if(input.attr("checked")) {
		el.css("background-position","0 -17px");	
	}
    return true;
}

		