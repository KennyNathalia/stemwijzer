const start = document.getElementById('start-button');
const statement = document.getElementById('statement');
const title = document.getElementById('title');
const endTitle = document.getElementById('endTitle');
const buttons = document.querySelector('.buttons');
const eens = document.getElementById("eens");
const oneens = document.getElementById("oneens");
const neither = document.getElementById("neither");
const volgende = document.getElementById("volgende");
const vorige = document.getElementById("vorige");
const team = document.getElementById('team');
const ending = document.querySelector(".ending");
var statementCounter = 0;
var titleCounter = 0;
var userAnswers = [];
var partyScore = [
	{name: "PVV", score: 0},
	{name: "D66", score: 0},
	{name: "CU", score: 0},
	{name: "SP", score: 0}
]
 
console.log(subjects);


start.onclick = function(){
	start.style.display="none";
    buttons.style.display="block";
    displayStatement();
}

eens.onclick = function(){
	userAnswers[statementCounter] = "pro";
	console.log(userAnswers);
	nextStatement();
}

oneens.onclick = function(){
	userAnswers[statementCounter] = "contra";
	console.log(userAnswers);
	nextStatement();
}

function endScreen(){
	//hides the statement and button 
	buttons.style.display= "none";
	ending.style.display = "block";
	results();
}

function displayStatement(){
	//displays title and statement
	title.innerHTML = subjects[statementCounter].title;
	statement.innerHTML = subjects[statementCounter].statement;
}	

function nextStatement(){
	//function for the "volgende" button
	if(titleCounter != 3){
		statementCounter++;
		titleCounter++;
		displayStatement();
	} else{
		//shows end results if last statement is answered
		endScreen();
	}
}

function previousStatement(){
	if(statementCounter != 0){
		//function for the "vorige" button
		statementCounter--;
		titleCounter--;
		displayStatement();
	}
}

function results(){

	// var score = 0;

	// var userAnswers = ["contra","pro","contra","pro"]; 
	// var opinionPVV =  ["contra","pro","contra","pro"];
	// for (var index = 0; index < userAnswers.length; index++){
	// 	if (userAnswers[index] === opinionPVV[index])
	// 		score++;
	// 		console.log(score);
			
	// }

	for (var i = 0; i < subjects.length; i++){
		for (var p = 0; p < parties.length; p++){

		var partyAnswer = subjects[i].parties[p].position
			if(userAnswers[i] == partyAnswer){
				team.innerHTML = subjects[i].parties[p].name
			}	
		}
	};
}