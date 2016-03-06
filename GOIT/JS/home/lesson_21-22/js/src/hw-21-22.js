var createQuestion = function() {
	let questionsCache = [
	{
		question: "Выберите условный оператор в js",
		answers: [{
			answer: "if (true) {}",
			correct: true
		}, {
			answer: "(true) ? true : false;",
			correct: true
		}, {
			answer: "do { } while(true)",
			correct: false
		}, {
			answer: "while (true) {}",
			correct: false
		}, {
			answer: "if (true) {} else {}",
			correct: true
		}]
	}, {
		question: "Цикл в js",
		answers: [{
			answer: "if (true) {}",
			correct: false
		}, {
			answer: "(true) ? true : false;",
			correct: false
		}, {
			answer: "do { } while(true)",
			correct: true
		}, {
			answer: "while (true) {}",
			correct: true
		}]
	}, {
		question: "Для чего используется break",
		answers: [{
			answer: "Завершает текущий цикл или конструкции switch",
			correct: true
		}, {
			answer: "Завершает текущий цикл или конструкции if",
			correct: false
		}, {
			answer: "Завершает текущий цикл или конструкции else",
			correct: false
		}]
	}];

	let qi = 1, ai = undefined;
	for (let q of questionsCache) {
		ai = 1;
		q['id'] = qi;
		for (let a of q.answers) {
			a['id'] = qi + "-" + ai++;
		}
		qi++;
	}
	return questionsCache;
}

var saveQuestion = function (localStorage, questions) {
	localStorage.setItem('questions', JSON.stringify(questions));
}

var loadQuestion = function(localStorage) {
	return JSON.parse(localStorage.getItem('questions'));
}

class Application {
	constructor() {
		this.indexQuestion = 1;
		this.questionList = [];
		this.questionHtml = document.getElementById('question_template').innerHTML;
		this.modalHtml = document.getElementById('modal_window').innerHTML;
	}

	createElement(obj) {
		let {content, className, tagName, parent} = obj;

		let element = document.createElement(tagName);
		if (content !== undefined) {
			element.innerHTML = obj.content;
		}
		if (className !== undefined) {
			element.className = obj.className;
		}
		if (tagName == "input") {
			element.setAttribute("type", "checkbox");
		} else if (tagName == "button") {
			element.setAttribute("type", "submit");
		}
		if (parent !== undefined && parent !== null) {
			parent.appendChild(element);
		}
		return element;
	}

	createQuestion(parent, question) {
		let tmpl = _.template(this.questionHtml);

		let html = tmpl({ question: question });
		parent.innerHTML += html;
	}

	createQuestions(parent, questions) {
		this.questions = questions;
		for (let question of questions) {
			this.createQuestion(parent, question);
		}
	}

	checkQuestions() {
		let id = undefined,
		    correct = undefined,
		    totalCorrect = undefined,
		    userAnswer = undefined,
		    correctAnswer = undefined;
		this.questionList = [];
		for (let q of this.questions) {
			correct = 0;
			totalCorrect = 0;
			for (let a of q.answers) {
				id = a['id'];
				if (id == undefined) continue;
				userAnswer = document.getElementById(id).checked;
				correctAnswer = a.correct;
				if (userAnswer && correctAnswer) {
					correct++;
					totalCorrect++;
				} else if (correctAnswer) {
					totalCorrect++;
				}
			}

			this.questionList.push({id: q.id, result: `${correct} / ${totalCorrect}`});
			console.log(`question # ${q.id}  ${correct} / ${totalCorrect}`);
		}
		this.showModal();
	}

	showModal() {
		let tmpl = _.template(this.modalHtml);
		let html = tmpl({ questions: this.questionList });

		document.body.innerHTML += html;

		document.getElementById('modal-window-close').addEventListener("click", function () {
			location.reload();
		});

		document.getElementById('modal-window-restart').addEventListener("click", function () {
			location.reload();
		});
	}
};

try{
	exports.Application = Application;
	exports.createQuestion = createQuestion;
	exports.saveQuestion = saveQuestion;
	exports.loadQuestion = loadQuestion;
} catch (e) {}