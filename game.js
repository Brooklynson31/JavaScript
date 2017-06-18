//Create secretNumber
var secretNumber = 4;
//Ask user for guess
var guess =Number(prompt("guess a number"));

//Check guess
if(guess  === secretNumber){
	alert("BITCH YOU GUESSED IT!");
} 
//chech if too low
else if (guess<secretNumber) {
	alert("Too Low! You would Thought!");
} 
//check if too high
else {
	alert("Too High! You would Thought!");
}
