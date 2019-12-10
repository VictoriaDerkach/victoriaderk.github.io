$(function(){

	function Human(name, age, sex, height, weight){
		this.name = name;
		this.age = age;
		this.sex = sex;
		this.height = height;
		this.weight = weight;
	}
	Human.prototype.live = function(){
		console.log(this.name + " lives in the world ");
	}

	var human1 = new Human('Vasya', 12, 'man', 120, 30);
	human1.live();


	function Worker(workPlace, salary){
		this.workPlace = workPlace;
		this.salary = salary;
	}
	Worker.prototype = new Human;
	Worker.prototype.work = function(){
			console.log(this.name + " works on " + this.workPlace);
	}

	var worker1 = new Worker('factory', 2000);
	worker1.name = 'Genna';
	worker1.live();
	worker1.work();

	var worker2 = new Worker('candy shop ', 1000);
	worker2.name = 'Borya';
	worker2.live();
	worker2.work();


	function Student(studyPlace, grant){
		this.studyPlace = studyPlace;
		this.grant = grant;
	}
	Student.prototype = new Human;
	Student.prototype.study = function(){
			console.log(this.name + " watches TV in " + this.studyPlace);
	}

	var student1 = new Student('NCPU', 700);
	student1.name = 'Valera';
	student1.live();
	student1.study();

	var student2 = new Student('NCTU', 550);
	student2.name = 'Bogdan';
	student2.live();
	student2.study();

});