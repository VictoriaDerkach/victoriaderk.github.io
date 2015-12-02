var arrNames = [];
for (var i = 0; i < 5; i++) {
	arrNames[i] = prompt('Enter name', '');
}
console.log(arrNames);

var userName = prompt('Enter your name', '');
console.log(userName);

var nameFounded = false;
for (var i = 0; i < 5; i++) {
	if (userName == arrNames[i]) {
		nameFounded = true;
	} 
}

if (nameFounded) {
	alert('Hello, ' + userName);
} else {
	alert('Your name not found');
}


