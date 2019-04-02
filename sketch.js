/*
Term 2 FINAL coursework
by Hussein Farkhani hfark001 33425905

a little game that tests your UEB (Unified English Braille) braille knowledge- enter the correct lowercase letter into the input box

the questions can be random if you want to by uncommenting in the checkAnswer function

if you enter a upper case letter or any character that's not lowercase, you will get a warning message and score will decrease
in braille any capital letter is just a simple braille indicator before the letter - refer to the additonal information folder for more information

score all of the alphabet correctly = you win screen, else score less that 0 = game over screen

*/

var input, button;
var length_of_alphabet = 36;//26 of course but add 10 because starting score is 10

var input_box_offset = 10; //for  input box & button x positioning
var braille_position_offset = 75; //for braille dot y postioning 
var input_box_length = 150; //length of the input box
var space_character = '';

var score = 10; //this will be starting score
var score_colour = 130; //text colour
var index = 0; //index for letter_to_test array

var question_letter; //stores the letter that's being asked of the user
var letter_to_test = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; //this is what the user needs to answer

var on = 0, off = 255; //needed to turn braille dots black/white | on/off

var user_answer, correct_answer; //for the scoring system

var dot = [1, 2, 3, 4, 5, 6]; //remember index starts from 0-5

var try_again_state = false; //a switch for the try again message

function setup() {

	createCanvas(710, 400);

	input = createInput(); //input box
	input.position(input_box_offset, height / 2);//why no hard coded numbers? - using variables allows the screen to be updated in the future

	button = createButton('answer');
	button.position(input_box_offset + input_box_length, height / 2);
	button.mousePressed(checkAnswer);

	textAlign(CENTER) //for all text
	textSize(100);

	//intialise the dot configurations
	for (var i = 0; i < dot.length; i++) {
		dot[i] = 255;
		//console.log("dot " + i + " : " + dot[i]);
	}


}

function checkAnswer() {
	user_answer = input.value(); //store user's input into a varaible 
	input.value(''); //resets - allows you to enter another value

	if (user_answer == user_answer.toUpperCase()) {
		alert('sorry, only lowercase letters... no numbers/punctuations please');
	}

	if (user_answer == question_letter) {
		score++; //update score
		index++; //proceed to next letter
		try_again_state = false; // don't need try again message anymore

		//if you want random questions - remove comments bellow
		//index += random(0,5);

	} else if (user_answer != question_letter || user_answer == space_character) {
		score--; //update score

		//if you want random questions - remove comments bellow
		//index -= random(0,5);

		//try again message
		try_again_state = true;


	}

}


function braileQuestion(letter) {
	//in real life there is a dot configuration - just add 1 to each index for the real life dot configuration
	
	question_letter = letter;//question_letter varaible will be needed by another statement for comparison

	switch (letter) {
		case "a":
			dot[0] = on, dot[1] = off, dot[2] = off, dot[3] = off, dot[4] = off, dot[5] = off;
			break;

		case "b":
			dot[0] = on, dot[1] = on, dot[2] = off, dot[3] = off, dot[4] = off, dot[5] = off;
			break;

		case "c":
			dot[0] = on, dot[1] = off, dot[2] = off, dot[3] = on, dot[4] = off, dot[5] = off;
			break;

		case "d":
			dot[0] = on, dot[1] = off, dot[2] = off, dot[3] = on, dot[4] = on, dot[5] = off;
			break;

		case "e":
			dot[0] = on, dot[1] = off, dot[2] = off, dot[3] = off, dot[4] = on, dot[5] = off;
			break;

		case "f":
			dot[0] = on, dot[1] = on, dot[2] = off, dot[3] = on, dot[4] = off, dot[5] = off;
			break;

		case "g":
			dot[0] = on, dot[1] = on, dot[2] = off, dot[3] = on, dot[4] = on, dot[5] = off;
			break;
			
		case "h":
			dot[0] = on, dot[1] = on, dot[2] = off, dot[3] = off, dot[4] = on, dot[5] = off;
			break;
			
		case "i":
			dot[0] = off, dot[1] = on, dot[2] = off, dot[3] = on, dot[4] = off, dot[5] = off;
			break;
			
		case "j":
			dot[0] = off, dot[1] = on, dot[2] = off, dot[3] = on, dot[4] = on, dot[5] = off;
			break;
		
		case "k":
			dot[0] = on, dot[1] = off, dot[2] = on, dot[3] = off, dot[4] = off, dot[5] = off;
			break;
			
		case "l":
			dot[0] = on, dot[1] = on, dot[2] = on, dot[3] = off, dot[4] = off, dot[5] = off;
			break;
			
		case "m":
			dot[0] = on, dot[1] = off, dot[2] = on, dot[3] = on, dot[4] = off, dot[5] = off;
			break;
			
		case "n":
			dot[0] = on, dot[1] = off, dot[2] = on, dot[3] = on, dot[4] = on, dot[5] = off;
			break;
			
		case "o":
			dot[0] = on, dot[1] = off, dot[2] = on, dot[3] = off, dot[4] = on, dot[5] = off;
			break;
			
		case "p":
			dot[0] = on, dot[1] = on, dot[2] = on, dot[3] = on, dot[4] = off, dot[5] = off;
			break;
			
		case "q":
			dot[0] = on, dot[1] = on, dot[2] = on, dot[3] = on, dot[4] = on, dot[5] = off;
			break;
			
		case "r":
			dot[0] = on, dot[1] = on, dot[2] = on, dot[3] = off, dot[4] = on, dot[5] = off;
			break;
			
		case "s":
			dot[0] = off, dot[1] = on, dot[2] = on, dot[3] = on, dot[4] = off, dot[5] = off;
			break;
			
		case "t":
			dot[0] = off, dot[1] = on, dot[2] = on, dot[3] = on, dot[4] = on, dot[5] = off;
			break;
			
		case "u":
			dot[0] = on, dot[1] = off, dot[2] = on, dot[3] = off, dot[4] = off, dot[5] = on;
			break;
			
		case "v":
			dot[0] = on, dot[1] = on, dot[2] = on, dot[3] = off, dot[4] = off, dot[5] = on;
			break;
			
		case "w":
			dot[0] = off, dot[1] = on, dot[2] = off, dot[3] = on, dot[4] = on, dot[5] = on;
			break;
			
		case "x":
			dot[0] = on, dot[1] = off, dot[2] = on, dot[3] = on, dot[4] = off, dot[5] = on;
			break;
			
		case "y":
			dot[0] = on, dot[1] = off, dot[2] = on, dot[3] = on, dot[4] = on, dot[5] = on;
			break;
			
		case "z":
			dot[0] = on, dot[1] = off, dot[2] = on, dot[3] = off, dot[4] = on, dot[5] = on;
			break;
			
		default: //empty braille cell
			for (var i = 0; i < dot.length; i++) {
				dot[i] = off;
			}
	}



}


function draw() {
	background(235); //refesh screen

	DisplayBraille();

	braileQuestion(letter_to_test[index]); //has to be a lowercase string

	GameState();

}

function GameState() {
	//score system
	textSize(22);
	fill(score_colour);
	text('braille score: ' + score, width / 8, height / 3);

	//game over - remove everything put a message on screen
	if (score < 0) {
		rectMode(CENTER);
		noStroke();
		fill(255);
		rect(width / 2, height / 2, width, height);//covers the whole screen
		input.remove();
		button.remove();
		score_colour = 255; //hide score text

		textSize(22);
		fill(0);
		text("it's Over - learn more at braillebug.afb.org/braille_deciphering.asp", width / 2, height / 2);
	}

	//game win - same as gameover but with a different message
	if (score >= length_of_alphabet) {
		rectMode(CENTER);
		noStroke();
		fill(255);
		rect(width / 2, height / 2, width, height);
		input.remove();
		button.remove();
		score_colour = 255;

		textSize(22);
		fill(0);
		text("Well done! you should learn more about UEB (unified english braille)", width / 2, height / 2);
	}

	//try again message- pops up onto screen if you input wrong answer
	if (try_again_state === true) {
		textSize(20);
		fill('red');
		text('try again, braille follows a pattern... ', width / 3.8, height / 9);
	}

}



function DisplayBraille() {
	push();
	//dot 1
	ellipseMode(CENTER);
	noStroke();
	fill(dot[0]);
	translate(width / 2, 0 + braille_position_offset);
	ellipse(0, 0, 50, 50);
	pop();


	push();
	//dot 2
	ellipseMode(CENTER);
	noStroke();
	fill(dot[1]);
	translate(width / 2, height / 2);
	ellipse(0, 0, 50, 50);
	pop();


	push();
	//dot 3
	ellipseMode(CENTER);
	noStroke();
	fill(dot[2]);
	translate(width / 2, height - braille_position_offset);
	ellipse(0, 0, 50, 50);
	pop();


	push();
	//dot 4
	ellipseMode(CENTER);
	noStroke();
	fill(dot[3]);
	translate(width - braille_position_offset * 3, 0 + braille_position_offset);
	ellipse(0, 0, 50, 50);
	pop();


	push();
	//dot 5
	ellipseMode(CENTER);
	noStroke();
	fill(dot[4]);
	translate(width - braille_position_offset * 3, height / 2);
	ellipse(0, 0, 50, 50);
	pop();


	push();
	//dot 6
	ellipseMode(CENTER);
	noStroke();
	fill(dot[5]);
	translate(width - braille_position_offset * 3, height - braille_position_offset);
	ellipse(0, 0, 50, 50);
	pop();
}