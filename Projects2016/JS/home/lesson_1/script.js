var x = prompt('Add base');
var n = prompt('Add exponent');

console.log( pow(x,n) );

function pow(x, n) {
	var i = 0;
	var result = 1;
	
	if (n < 0) {
		alert("Error exponent");
		return 'error';
	}

	for (var i = 0; i < n; i++) {
		result = result * x;
	}

	return result;
}
