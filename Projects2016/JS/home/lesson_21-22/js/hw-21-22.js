"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var createQuestion = function createQuestion() {
	var questionsCache = [{
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

	var qi = 1,
	    ai = undefined;
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = questionsCache[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var q = _step.value;

			ai = 1;
			q['id'] = qi;
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = q.answers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var a = _step2.value;

					a['id'] = qi + "-" + ai++;
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			qi++;
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return questionsCache;
};

var saveQuestion = function saveQuestion(localStorage, questions) {
	localStorage.setItem('questions', JSON.stringify(questions));
};

var loadQuestion = function loadQuestion(localStorage) {
	return JSON.parse(localStorage.getItem('questions'));
};

var Application = function () {
	function Application() {
		_classCallCheck(this, Application);

		this.indexQuestion = 1;
		this.questionList = [];
		this.questionHtml = document.getElementById('question_template').innerHTML;
		this.modalHtml = document.getElementById('modal_window').innerHTML;
	}

	_createClass(Application, [{
		key: "createElement",
		value: function createElement(obj) {
			var content = obj.content;
			var className = obj.className;
			var tagName = obj.tagName;
			var parent = obj.parent;


			var element = document.createElement(tagName);
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
	}, {
		key: "createQuestion",
		value: function createQuestion(parent, question) {
			var tmpl = _.template(this.questionHtml);

			var html = tmpl({ question: question });
			parent.innerHTML += html;
		}
	}, {
		key: "createQuestions",
		value: function createQuestions(parent, questions) {
			this.questions = questions;
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = questions[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var question = _step3.value;

					this.createQuestion(parent, question);
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}
		}
	}, {
		key: "checkQuestions",
		value: function checkQuestions() {
			var id = undefined,
			    correct = undefined,
			    totalCorrect = undefined,
			    userAnswer = undefined,
			    correctAnswer = undefined;
			this.questionList = [];
			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = this.questions[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var q = _step4.value;

					correct = 0;
					totalCorrect = 0;
					var _iteratorNormalCompletion5 = true;
					var _didIteratorError5 = false;
					var _iteratorError5 = undefined;

					try {
						for (var _iterator5 = q.answers[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
							var a = _step5.value;

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
					} catch (err) {
						_didIteratorError5 = true;
						_iteratorError5 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion5 && _iterator5.return) {
								_iterator5.return();
							}
						} finally {
							if (_didIteratorError5) {
								throw _iteratorError5;
							}
						}
					}

					this.questionList.push({ id: q.id, result: correct + " / " + totalCorrect });
					console.log("question # " + q.id + "  " + correct + " / " + totalCorrect);
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}

			this.showModal();
		}
	}, {
		key: "showModal",
		value: function showModal() {
			var tmpl = _.template(this.modalHtml);
			var html = tmpl({ questions: this.questionList });

			document.body.innerHTML += html;

			document.getElementById('modal-window-close').addEventListener("click", function () {
				location.reload();
			});

			document.getElementById('modal-window-restart').addEventListener("click", function () {
				location.reload();
			});
		}
	}]);

	return Application;
}();

;

try {
	exports.Application = Application;
	exports.createQuestion = createQuestion;
	exports.saveQuestion = saveQuestion;
	exports.loadQuestion = loadQuestion;
} catch (e) {}