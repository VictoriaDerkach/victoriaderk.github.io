"use strict";

let newQuestions = createQuestion();
saveQuestion(localStorage, newQuestions);

let body = document.body;
let questions = loadQuestion(localStorage);
let application = new Application();

application.createElement({
	tagName: "h1",
	className: "text-center",
	content: "Тест по программированию HW 21-22",
	parent: body
});

application.createQuestions(body, questions);

let buttonSubmit = application.createElement({
	tagName: "button",
	className: "btn btn-default btn-lg btn-block",
	content: "Отправить ответы",
	parent: body
});

buttonSubmit.addEventListener("click", function () {
	application.checkQuestions();
});
