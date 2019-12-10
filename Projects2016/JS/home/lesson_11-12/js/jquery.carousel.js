(function($){
	$.fn.carousel = function(options){
		var defaults = {
			pixelsOffset: 125, 
			speed: 500

		}
		var $settings = $.extend(defaults, options);

		var $elementsList = this;
		var $currentLeftValue = 0;
		var $elementsCount = $elementsList.find('li').length;

		var $minimumOffset = - (($elementsCount - 5) * $settings.pixelsOffset);
		var $maximumOffset = 0;
	

		$('.carousel-arrow-left').on('click', function() {
			if ($currentLeftValue != $maximumOffset) {
				$currentLeftValue += $settings.pixelsOffset;
				$elementsList.animate({ left : $currentLeftValue + "px"}, $settings.speed);
			}
		});

		$('.carousel-arrow-right').on('click', function() {
			if ($currentLeftValue != $minimumOffset) {
				$currentLeftValue -= $settings.pixelsOffset;
				$elementsList.animate({ left : $currentLeftValue + "px"}, $settings.speed);
			}
		});

		return this;
	};
})(jQuery);