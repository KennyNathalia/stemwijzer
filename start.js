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
var x;
var statementCounter = 0;
var titleCounter = 0;
var userAnswers = [];
var partyScore = [
	{name: "PVV", score: 0},
	{name: "D66", score: 0},
	{name: "CU", score: 0},
	{name: "SP", score: 0}
];

console.log(subjects);

function colorButton(currentStatement){
	if(currentStatement == statementCounter){
		if(sessionStorage.getItem(statementCounter) == "true"){
			if (userAnswers[statementCounter] = "pro") {
				eens.style.backgroundColor = "blue";
			}
			if(userAnswers[statementCounter] = "contra"){
				oneens.style.backgroundColor = "blue";
			}
			//console.log(currentStatement);
			//console.log(statementCounter);
	 	}
	 }
}

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
	colorButton(statementCounter);
}	

function nextStatement(){
	//function for the "volgende" button
	if(titleCounter != 3){
		statementCounter++;
		titleCounter++;
		sessionStorage.setItem(statementCounter, "true");
		displayStatement();
		//colorButton(statementCounter);
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
	//loop door de subjects
	for (var i = 0; i < subjects.length; i++){
		console.log("subjects = " + i);
		//loop door de parties
		for (var p = 0; p < parties.length; p++){
		var partyAnswer = subjects[i].parties[p].position;
		var find = subjects.parties.find(({position}) => position === userAnswers[i]);
		console.log("parties = " + p);
			if(userAnswers[i] == partyAnswer){
				partyScore[p].score++
				console.log(partyScore);
				console.log(find);
				//console.log(userAnswers[i]);
				//console.log(partyAnswer);
				console.log(subjects[i].parties[p].name);
				//console.log(found);

			}
			team.innerHTML = subjects[i].parties[p].name;	
		}
	}
}

//functie pakt heel de tijd de eerste party van de array
//in de derde array zijn de parties in een andere order