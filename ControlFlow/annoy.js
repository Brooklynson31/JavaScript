var answer = prompt("are we thre yet?");

//while(answer !== "yes" && answer !== "yeah"){

//	var answer =prompt("are we there yet?");
//}

//alert("Yay! we made it!");

while(answer.indexOf("yes" === -1)){
	var answer = prompt("are we there yet?");
}

alert("Yay we made it!");