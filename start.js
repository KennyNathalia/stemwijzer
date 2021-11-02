var start = document.getElementById("start-button");
var neither = document.getElementById("neither");
var oneens = document.getElementById("oneens");
var eens = document.getElementById("eens");
var volgende = document.getElementById("volgende");
var vorige = document.getElementById("vorige");
var buttons = document.getElementById("buttons");
var title = document.getElementById("title");
var description = document.getElementById("description");
var importantList = document.getElementById('vragenlijst');
var x = 0;
var userAnswers = [];
var questions = 30;
var score = [];
var selectedParties = [];
var test = "test";
var secular;
buttons.style.display = "none";


start.onclick = function(){
    start.style.display = "none";
    buttons.style.display = "inline";
    title.innerHTML = subjects[x].title;
    description.innerHTML = subjects[x].statement;
    if(x > 0){
        x--
    }
}

eens.onclick = function(){
	userAnswers[x] = "pro";
    nextStatement();
}

oneens.onclick = function(){
	userAnswers[x] = "contra";
    nextStatement();
}

neither.onclick = function(){
	userAnswers[x] = "none";
    nextStatement();
}


volgende.onclick = function(){
    questions--;
    nextStatement();
}

vorige.onclick = function(){
    questions--;
    previousStatement();
}


function nextStatement(){
    x++;
    if(x >= subjects.length){
        partySelect();
    }else{
        title.innerHTML = subjects[x].title;
        description.innerHTML = subjects[x].statement;
    }
}

function previousStatement(){
    x--;
    if(x >= 0){
        title.innerHTML = subjects[x].title;
        description.innerHTML = subjects[x].statement;
    }
}

function partySelect(){
    start.style.display = 'none';
    volgende.style.display = 'none';
    vorige.style.display = 'none';
    description.style.display = 'none';
    title.innerHTML = "Welke soort partijen wil je meenemen in het resultaat?";
    eens.innerHTML = "grote partijen";
    oneens.innerHTML = "seculiere partijen";
    neither.innerHTML = "alle partijen";
    eens.onclick = function() {bigParties()};
    oneens.onclick = function() {secularParties()};
    neither.onclick = function() {allParties()};
}

function bigParties(){
    selectedParties = score.filter(party => party.size > 0);

    statements();
}

function secularParties(){
    selectedParties = score.filter(party => party.secular = true);

    statements();
}

function allParties(){
    
    statements();
}

function statements(){
    oneens.style.display = 'none';
    neither.style.display = 'none';
    title.innerHTML = "Zijn er onderwerpen die u extra belangrijk vindt?";
    eens.innerHTML = "Ga verder";
    list();
    eens.onclick = function() {results()};
}

function list(){
    for(i = 0; i < subjects.length; i++){
        var li = document.createElement("li");
        var t = document.createTextNode(subjects[i].title);
        var checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("subjectIndex", i);
        li.appendChild(checkBox);
        li.appendChild(t);
        document.getElementById("vragenlijst").appendChild(li);
    }

}

function checkList(){
    var importantList = document.querySelectorAll('#vragenlijst li input');
    for(i = 0; i < importantList.length; i++){
        subjects[i].important = importantList[i].checked;
        questions++;
    }
}


function compareStatement(){
    for (var q = 0; q < parties.length; q++){
        score.push({name: parties[q].name ,score: 0, size: parties[q].size})
    }
	for (var i = 0; i < subjects.length; i++){
		
		//loop door de parties
		for (var p = 0; p < parties.length; p++){
		    var partyAnswer = subjects[i].parties[p].position;
            // console.log(userAnswers[i]);
            // console.log(partyAnswer);
			if(userAnswers[i] == partyAnswer){
                    var index = score.findIndex(item => item.name === subjects[i].parties[p].name);
                    
                    score[index].score++
                    
    				parties[p].score++;
                   
    				if(subjects[i].important == true){
    					score[index].score++
    				}

                    else{
    					score[index].score + 0;
    				}
                

			}else if(userAnswers[i] == "undefined"){
			        score[index].score + 0;
			}
		}
	} 
}


function results(){
    console.log(parties);
    
    checkList();
    compareStatement();
    buttons.style.display = 'none';
    vragenlijst.style.display = 'none';
    description.style.display = 'inline';
    title.innerHTML = "Hier zijn uw resultaten";
    description.innerHTML = "";
    score.sort((firstItem, secondItem) => firstItem.score - secondItem.score);
    score.reverse();
    for(e = 0; e <= score.length - 1; e++){
        var result = Math.round((score[e].score / questions) * 100);
        var li = document.createElement("li");
        var p = document.createTextNode(score[e].name + '\n');
        var t = document.createTextNode(result);
        //console.log(score);
        li.appendChild(p);
        li.appendChild(t);
        document.getElementById("description").appendChild(li);
    }
}