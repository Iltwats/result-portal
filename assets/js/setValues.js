function setValues() {
	var firstInSem, secondInSem, finalSem, assignment, attendance;
	firstInSem = Number(document.getElementById("ui1").value);
	secondInSem = Number(document.getElementById("ui2").value);
	finalSem = Number(document.getElementById("ui3").value);
	assignment = Number(document.getElementById("ui4").value);
	attendance = Number(document.getElementById("ui5").value);
	gradefunction(firstInSem, secondInSem, finalSem, assignment, attendance);
	var x = document.getElementById("display0");
	x.style.display = "none";
	x = document.getElementById("tryagain");
	x.style.display = "";
}
