var HW = require('../js/hw-21-22.js');

describe("Check HW 21-22", function() {

	var localStorage = {
	  	store: {},
	  	getItem: function (key) {
	  		if (this.store.hasOwnProperty(key)) {
				return this.store[key];
	  		}
	    	return false;
	  	},
	  	setItem: function (key, value) {
	  		return this.store[key] = value + '';
	  	},
	  	clear: function() {
	  		this.store = {};
	  	}
	  };

	var questions = HW.createQuestion();
	it("createQuestion work!", function() {
		expect(questions).not.toBeNull();
	});

	HW.saveQuestion(localStorage, questions);
	it("saveQuestion work!", function() {
		expect(localStorage.getItem('questions')).not.toBeNull();
	});

	var newQuaestions = HW.loadQuestion(localStorage);
	it("loadQuestion work!", function() {
		expect(newQuaestions).not.toBeNull();
	});

	
});