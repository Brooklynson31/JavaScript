console.log("Even Numbers");

//Solutiion 1
var lit = 1;

while(lit < 51){
	if(lit % 2 === 0){
		console.log(lit);
	}
	lit++;
}

//Solutiion 2
for(var i = 1;i <51;i++){
	if(i % 2 === 0){
		console.log(i);
	}
}

console.log("ASII");

var st = "$$$$$$";
for(var i = 0; i <=st.length-1;i++){
	console.log(st[i]);
	for(var j = i+1;j < i+2 ;j++){
		console.log(st[j]);
	}
}

console.log("FizzBuzz");

for(var i = 1;i <100;i++){
	var fizz = (i % 3 === 0);
	var buzz = (i % 5 === 0);
	
	if(fizz && buzz){
		console.log("fizzbuzz");
	} else if (fizz){
		console.log("fizz");
	} else if (buzz){
		console.log("buzz");
	} else {
		console.log(i);
	}
}
