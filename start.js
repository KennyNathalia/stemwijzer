const start = document.querySelector('.start-button');
const statement = document.getElementById('statement');
const title = document.getElementById('title');
const buttons = document.querySelector('.buttons');
const eens = document.getElementById("eens");
const oneens = document.getElementById("oneens");
const oneens = document.getElementById("neither");
const volgende = document.getElementById("volgende");
const volgende = document.getElementById("vorige");
var statementCounter = 0;
var titleCounter = 0;
var input = [];
 
console.log(subjects);


start.onclick = function(){
	start.style.display="none";
    buttons.style.display="block";
    displayStatement();
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
	}
}

function previousStatement(){
	if(statementCounter != 0){
		statementCounter--;
		titleCounter--;
		displayStatement();
	}
}