// get values from html form field
function SetValues() 
{
	var firstInSem, secondInSem, finalSem, assignment, attendance;
	firstInSem = Number(document.getElementById("Inse1").value);
	secondInSem = Number(document.getElementById("Inse2").value);
	finalSem = Number(document.getElementById("Endse").value);
	assignment = Number(document.getElementById("Assig").value);
	attendance = Number(document.getElementById("Atten").value);
	gradecalc(firstInSem, secondInSem, finalSem, assignment, attendance);
	scrollWin(0, 400);
}

// calculate grade for semester
function gradecalc(firstInSem, secondInSem, finalSem, assignment, attendance)
 {
	var total = (firstInSem * 30) / 100 + (secondInSem * 30) / 100 + (finalSem * 50) / 100 + (assignment) + (attendance);
	var grade = total.toFixed(2);
	document.getElementById('gradeObject').innerHTML = ("Your Marks :-", grade);
	console.log(grade);
	if (total >= 35)
	{
		if (finalSem >= 35) 
		{
			var marks = (total-35).toFixed(2)
			document.getElementById("p2").innerHTML = (`<br>You are Safe and you crossed Danger Zone, Your extra marks is ${marks}!`);
		} 
		else 
		{	
			var marks = (35-finalSem).toFixed(2)
			document.getElementById("p2").innerHTML = ("You Have a Backlog in this paper and have to give this paper again :-(");
			document.getElementById("p2").innerHTML = 	` You are UnSafe and you have to gain ${marks} more marks from Teacher (Current Time). <br/> Means Next time in Final Back Paper you have to score Only 35 Marks. `;

		}
	} else 
	{
		var marks = ((35 - total) * 2).toFixed(2)
		if ((finalSem + (35 - total) * 2) < 35) {
			document.getElementById("p2").innerHTML = `You are UnSafe and you have to gain ${marks} more marks from Teacher (Current Time).\n <br/> Means Next time in Final Back Paper you have to score Only 35 Marks.`;

		} else {
			var moreNeed = (finalSem + (35 - total) * 2).toFixed(2)
			document.getElementById("p2").innerHTML = `You are UnSafe and you have to gain ${marks} more marks from Teacher (Current Time).\n <br/> Means Next time in Final Back Paper you have to score Only ${moreNeed} Marks`;

		}
	}
}

// calculate GPA with error of +-0.3
function getgrade() {
	var a,b,c,d,e,f;
      	a=Number(document.getElementById("aplus").value);
        b=Number(document.getElementById("aonly").value);
        c=Number(document.getElementById("bee").value);
        d=Number(document.getElementById("cee").value);
        e=Number(document.getElementById("dee").value);
		f=Number(document.getElementById("eee").value);
		gradefunction(a,b,c,d,e,f);
		scrollWin(0, 400);
}

// function to evaluate gpa
function gradefunction(a,b,c,d,e,f,g) { 
	var total=((a*10)+(b*9)+(c*8)+(d*7)+(e*6)+(f*5))/(a+b+c+d+e+f);
	var result=total.toFixed(2);
	document.getElementById("resultObject").innerHTML =("Your GPA for the semester:-",result);
	console.log("result");
}

// scroll to particular coordinates
function scrollWin(x, y){
	window.scrollBy(x, y);
}
		