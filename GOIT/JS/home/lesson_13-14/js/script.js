//"use strict";

var questionsCache = [
	{
		question: "Выберите условный оператор в js",
		answers: [
			{
				answer: "if (true) {}", 
				correct: true
			},
			{
				answer: "(true) ? true : false;",
				correct: true
			},
			{
				answer: "do { } while(true)",
				correct: false
			},
			{
				answer: "while (true) {}",
				correct: false
			},
			{
				answer: "if (true) {} else {}",
				correct: true
			}
		]
	},
	{
		question: "Цикл в js",
		answers: [
			{
				answer: "if (true) {}", 
				correct: false
			},
			{
				answer: "(true) ? true : false;",
				correct: false
			},
			{
				answer: "do { } while(true)",
				correct: true
			},
			{
				answer: "while (true) {}",
				correct: true
			}
		]
	},
	{
		question: "Для чего используется break",
		answers: [
			{
				answer: "Завершает текущий цикл или конструкции switch",
				correct: true
			},
			{
				answer: "Завершает текущий цикл или конструкции if",
				correct: false
			},
			{
				answer: "Завершает текущий цикл или конструкции else",
				correct: false
			}
		]
	}
]
var qi = 1, ai;
for (var q in questionsCache) {
	ai = 1;
	questionsCache[q]['id'] = qi;
	for (var a in questionsCache[q].answers) {
		questionsCache[q].answers[a]['id']=qi+"-"+ai++;
	}
	qi++;
}

localStorage.setItem('questions', JSON.stringify(questionsCache));

var application = {
	indexQuestion: 1,
	questionHtml: '',
	modalHtml: '',
	questionList: [],
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
		if (obj.parent !== undefined && obj.parent !== null) {
			obj.parent.appendChild(element);
		}	
		return element;
	},
	createQuestion: function(parent, question) {
		if (this.questionHtml.length <= 0) {
			this.questionHtml = document.getElementById('question_template').innerHTML;
		}
		var html = tmpl(this.questionHtml, {question: question});
		parent.innerHTML += html;
	},
	createQuestions: function(parent, questions) {
		this.questions = questions;
		for (var i = 0; i < questions.length; i++) {
			this.createQuestion(parent, questions[i]);
		}
	},
	checkQuestions: function() {
		var id, correct, totalCorrect;
		this.questionList = [];
		for (var q in this.questions) {
			correct = 0;
			totalCorrect = 0;
			for (var a in questions[q].answers) {
				id = questions[q].answers[a]['id'];
				if (id == undefined)
					continue; 
				userAnswer = document.getElementById(id).checked;
				correctAnswer = questions[q].answers[a].correct;
				if (userAnswer && correctAnswer){
					correct++;
					totalCorrect++
				} else if (correctAnswer) {
					totalCorrect++;
				}
			}
			this.questionList.push({id: questions[q].id, result: correct+'/'+totalCorrect});
			console.log('question #'+questions[q].id+ '  ' +correct+'/'+totalCorrect);
		}
		this.showModal();		
	},
	showModal: function() {
		if (this.modalHtml.length <= 0) {
			this.modalHtml = document.getElementById('modal_window').innerHTML;
		}
		var html = tmpl(this.modalHtml, {questions: this.questionList});
		document.body.innerHTML += html;
		
		document.getElementById('modal-window-close').addEventListener("click", function(){
			location.reload();
		});

		document.getElementById('modal-window-restart').addEventListener("click", function(){
			location.reload();
		});

	}
}

var body = document.body;
var questions = JSON.parse(localStorage.getItem('questions'));

application.createElement({
	tagName: "h1",
	className: "text-center",
	content: "Тест по программированию HW 13-14",
	parent: body
});

application.createQuestions(body, questions);

var buttonSubmit = application.createElement({
	tagName: "button",
	className: "btn btn-default btn-lg btn-block",
	content: "Отправить ответы",
	parent: body
});

buttonSubmit.addEventListener("click", function(){
	application.checkQuestions();
});
