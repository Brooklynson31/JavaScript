console.log("Print all numbers between 10 and 19");
var num1 = -10;

while(num1 <= 19){
	console.log(num1);
	num1++;
}

console.log("Print All even numbers between 10 and 40");
var even = 10;

while(even <= 40){
	console.log(even);
	even+=2;
}

console.log("Print all odd numbers between 300 and 333");
var odd = 301;

while(odd <= 333){
	console.log(odd);
	odd+=2;
}

console.log("Print All Numbers divisible by 5 and 3 between 5 and 50");
var three = 3;
var five = 5;
var int = 5;

while(int < 50){
	if((int % three === 0) && (int % five ===0)){
		console.log(int);
	}
	int++;
}