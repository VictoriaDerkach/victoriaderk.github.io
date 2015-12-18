var application = {
	indexQuestion: 1,
	createElement: function(tagName, className, content, parent) {
		var element = document.createElement(tagName);
		element.innerHTML = content;
		element.className = className;
		if (tagName == "input") {
			element.setAttribute("type", "checkbox");
		} else if (tagName == "button") {
			element.setAttribute("type", "submit");
		}
		parent.appendChild(element);
		return element;
	},
	createQuestion: function(parent, countAnswers) {

		var div = this.createElement("div", "col-md-3", "", parent);
		this.createElement("h3", "", "Вопрос #" + this.indexQuestion++, div);
		var ul = this.createElement("ul", "", "", div);

		for (var i = 1; i <= countAnswers; i++) {
			var li = this.createElement("li", "list-group-item", "", ul);
			var label = this.createElement("label", "", "Вариант ответа #" + i, li);
			this.createElement("input", "pull-left", "", label);
		};
	},
	createQuestions: function(parent, countQuestions, countAnswers) {
		for (var i = 0; i < countQuestions; i++) {
			this.createQuestion(parent, countAnswers);
		};
	}
}

var body = document.querySelector("body");

application.createElement("h1", "text-center", "Тест по программированию", body);
var div = application.createElement("div", "col-md-12", "", body);

application.createQuestions(div, 4, 5);

application.createElement("button", "btn btn-default btn-lg btn-block", "Отправить ответы", body);














// var ul2 = application.createElement("ul", "", "Вопрос 2", body);
// application.createElement("li", "", "Вариант ответа №1", ul2);
// application.createElement("li", "", "Вариант ответа №2", ul2);
// application.createElement("li", "", "Вариант ответа №3", ul2);

// var ul3 = application.createElement("ul", "", "Вопрос 3", body);
// application.createElement("li", "", "Вариант ответа №1", ul3);
// application.createElement("li", "", "Вариант ответа №2", ul3);
// application.createElement("li", "", "Вариант ответа №3", ul3);
