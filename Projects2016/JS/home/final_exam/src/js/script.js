$(function () {

    $('.jcarousel')
    .jcarousel({
        wrap: 'circular'
    })
    .jcarouselAutoscroll({
    	autostart: true,
    	target: '+=1',
        interval: 5000
    });

    $('.jcarousel-control-prev').click(function(){
        $(this).parent().parent().find('.jcarousel').jcarousel('scroll', '-=1');
    });
    $('.jcarousel-control-next').click(function(){
        $(this).parent().parent().find('.jcarousel').jcarousel('scroll', '+=1');
    });

    getImages('', 7);

    $('#search').click(function (e) {
        e.preventDefault();
        getImages($('#input_search').val(), 7);
        return false;
    });
});

function getImages(query, amount) {
    query = encodeURIComponent(query);
    $.ajax({
    	cache: false,
        type: "GET",
        url: 'http://api.pixplorer.co.uk/image?&amount=' + amount + '&size=10&word=' + query,
        dataType: "json",
        success: function (data) {
        	if (data.status !== 'success') {
        		alert('Get images - failed!');
        		return;
        	}
        	//console.log(data);
        	var words = [], images = [];
            for (i = 0; i <= ((data.images.length - 1)); i++) {
                images[i] = data.images[i].imageurl;
                words[i] = data.images[i].word;
            }
        	setImages(images, words);
        }
    })
}

function setImages(images, words) {
    var imagesList = tmpl($('#img-list').html(), {images: images, words: words});
    $('.ideas_image_wrapper')
    .html('')
    .append(imagesList)
	.masonry({
		percentPosition: true,
		columnWidth: '.grid-item-x1',
  		itemSelector: '.ideas_image',
	});
}
