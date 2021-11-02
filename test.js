function check(){
	for(var i = 0; i < subjects.length; i++){
		console.log("subjects = " + i);

		for(var p = 0; p < parties.length; p++){
			if (userAnswers[p] == subjects[i].parties[p].position) {
				parties[p].score++;
				partyScore[p].score++;
				console.log(partyScore);
			}
			else{
				parties[p].score + 0;
				partyScore[p].score + 0;
				console.log(partyScore);
			}
		}
	}
}

function results(){
    check();
    buttons.style.display = 'none';
    team.style.display = 'inline';
    title.innerHTML = "Hier zijn uw resultaten";
    team.innerHTML = "";
    for(e = 0; e <= parties.length - 1; e++){
        var result = Math.round((parties[e].score / questions) * 100);
        var li = document.createElement("li");
        var p = document.createTextNode(parties[e].name);
        var t = document.createTextNode(result);
        li.appendChild(p);
        li.appendChild(t);
        document.getElementById("team").appendChild(li);
    }
}