// Function: One Agrument w/ Conditional Statement 
let randomNum = Math.floor(Math.random() * 10) + 1; // returns a random int from 1-10

function guessNum(num) {
	if(num > 10) {
		console.log("Guess the numbers from 1 - 10!");
	}
	else if(num > randomNum) {
		console.log("Your number is too big, try again!");
	}
	
	 else if(num < randomNum) {
		console.log("Your number is too small, try again!");
	}  
	
	else {
		console.log("You guessed the correct number!");
	}
}

guessNum(5);
guessNum(10);
guessNum(18);
