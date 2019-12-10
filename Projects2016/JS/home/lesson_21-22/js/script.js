"use strict";

var newQuestions = createQuestion();
saveQuestion(localStorage, newQuestions);

var body = document.body;
var questions = loadQuestion(localStorage);
var application = new Application();

application.createElement({
	tagName: "h1",
	className: "text-center",
	content: "Тест по программированию HW 21-22",
	parent: body
});

application.createQuestions(body, questions);

var buttonSubmit = application.createElement({
	tagName: "button",
	className: "btn btn-default btn-lg btn-block",
	content: "Отправить ответы",
	parent: body
});

buttonSubmit.addEventListener("click", function () {
	application.checkQuestions();
});