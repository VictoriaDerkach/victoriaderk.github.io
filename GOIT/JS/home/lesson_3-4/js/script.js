var application = {
	indexQuestion: 1,
	createElement: function(obj) {
		var element = document.createElement(obj.tagName);
		if (obj.content !== undefined) {
			element.innerHTML = obj.content;
		}
		if (obj.className !== undefined) {
			element.className = obj.className;
		}
		if (obj.tagName == "input") {
			element.setAttribute("type", "checkbox");
		} else if (obj.tagName == "button") {
			element.setAttribute("type", "submit");
		}
		obj.parent.appendChild(element);
		return element;
	},
	createQuestion: function(parent, countAnswers) {

		var div = this.createElement({
			tagName: "div", 
			className: "col-md-3",
			parent: parent
		});

		this.createElement({
			tagName: "h3",
			content: "Вопрос #" + this.indexQuestion++, 
			parent: div
		});

		var ul = this.createElement({
			tagName: "ul",
			parent: div
		});

		for (var i = 1; i <= countAnswers; i++) {
			var li = this.createElement({
				tagName: "li", 
				className: "list-group-item",
				parent: ul
			});
			var label = this.createElement({
				tagName: "label",
				content: "Вариант ответа #" + i,
				parent: li
			});
			this.createElement({
				tagName: "input", 
				className: "pull-left",
				parent: label
			});
		};
	},
	createQuestions: function(parent, countQuestions, countAnswers) {
		for (var i = 0; i < countQuestions; i++) {
			this.createQuestion(parent, countAnswers);
		};
	}
}

var body = document.body;

application.createElement({
	tagName: "h1",
	className: "text-center",
	content: "Тест по программированию",
	parent: body
});

var div = application.createElement({
	tagName: "div",
	className: "col-md-12",
	parent: body
});

application.createQuestions(div, 4, 5);

application.createElement({
	tagName: "button",
	className: "btn btn-default btn-lg btn-block",
	content: "Отправить ответы",
	parent: body
});