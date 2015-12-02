var x = prompt('Add base',"2");
var n = prompt('Add exponent',"2");

console.log(pow(x,n));

function pow(x, n) {
	var i = 0;
	var result = 1;
	
	if (n < 0) {
		alert("Error exponent");
		return 'error';
	}

	while (i < n) {
		result = result * x;
		i++;
	}

	return result;
}
