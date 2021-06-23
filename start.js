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
	buttons.style.display= "none";
	ending.style.display = "block";
	results();
}

function displayStatement(){
	title.innerHTML = subjects[statementCounter].title;
	statement.innerHTML = subjects[statementCounter].statement;
}	

function nextStatement(){
	if(titleCounter != 3){
		statementCounter++;
		titleCounter++;
		displayStatement();
	} else{
		endScreen();
	}
}

function previousStatement(){
	if(statementCounter != 0){
		statementCounter--;
		titleCounter--;
		displayStatement();
	}
}

function results(){
	if (userAnswers.includes("contra", "pro", "contra", "pro")){
		team.innerHTML = "PVV";
	}
	if (userAnswers.includes("pro", "contra", "contra", "contra")){
		team.innerHTML = "SP";
	}
}