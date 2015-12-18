var arrNames = [];

for (var i = 0; i < 5; i++) {
	arrNames[i] = prompt('Enter name');
}

var userName = prompt('Enter your name');

var nameFounded = false;

for (var i = 0; i < arrNames.length; i++) {

	if (userName == arrNames[i] && userName != "" && userName != null) {
		nameFounded = true;
	} 
}

if (nameFounded) {
	alert('Hello, ' + userName + '!');
} else {
	alert('Your name not found');
}


