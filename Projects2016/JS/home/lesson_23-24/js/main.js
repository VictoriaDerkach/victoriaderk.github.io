requirejs.config({
    baseUrl: './js',
    paths: {
        jquery: 'jquery-1.12.1.min',
        tmpl: 'tmpl'
    },
    shim: {
    	tmpl: 'tmpl'
    }
});

require(
	[
		'tmpl',
		'model',
		'view',
		'controller'
	],
	function(tmpl, Model, View, Controller){
		var todoList = ['learn html', 'learn css', 'learn js'];
		var model = new Model(todoList);
		var view = new View(tmpl, model);
		var controller = new Controller(model, view);
	}
);