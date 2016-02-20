$(function(){
	$('#btnSearch').on('click', function(e){
		$('#results').remove();
		e.preventDefault();
		sendRequest(0);
	});

	$('#formSearch').on('keypress', function(e){
		console.log(e);
	});

	$('#btnClear').on('click', function(e){
		$('#results').remove();
	});

});

function checkResult(jObject, data) {
	console.log(data.cursor.currentPageIndex);
	$('#btnSearch').attr('disabled', false);
	if (data.hasOwnProperty('results')) {
		renderResponse(data.results, data.cursor.pages, data.cursor.currentPageIndex);
	}
}

function sendRequest(start){
	start = start || 0; 
	var search = $('#inputSearch').val(), rsz = 8;
	var key = 'ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg';
	var url = 'https://ajax.googleapis.com/ajax/services/search/web?v=1.0&start='+start+'&rsz='+rsz+'&key='+key+'&q='+search+'&callback=checkResult&context=?';
	$('#btnSearch').attr('disabled', true);
	$.ajax({
		url: url,
		method: 'POST',
		dataType: 'jsonp'
	});
}

function renderResponse(results, pages, activePage){
	var tmplHtml = $('#resultTemplate').html();
	var tmpl = _.template(tmplHtml);

	$('body').append(tmpl({lists: results, pages: pages, activePage: activePage}));

	$('a.page-link').on('click', function(e){
		e.preventDefault();
		$('#results').remove();
		sendRequest($(this).attr('href'));
	});
}
