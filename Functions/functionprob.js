//IsEven

function isEven(x) {
	if (x % 2 === 0)
		return true;
	else
		return false;
}

//Factorial
function factorial(z){
	var fact = z;
	if(z === 0){
		return 1;
	}
	while(1 < fact){
		fact--;
		z = z* fact;
	}
	return z;
}

//Factorial
function kebabToSnake(y){
	for(var i = 0; i < y.length; i++){
		if(y[i] === "-")
			var y = y.replace("-","_")

	}

	return y;
}