/*

Group 4
4HC3 Milestone 4
Scripts

Aaska Shah			001422791
Kerala Brendon		001424625
Nolan Slade 		001401079
Vyome Kishore 		001406201

*/
function scroll(){
	document.getElementById("end").scrollIntoView();
}






function getName(){
	var name = document.getElementById("name1").innerText;
	var uname = document.getElementById("uname1").innerText;
	console.log(name);
	window.localStorage.setItem("name", name);
	window.localStorage.setItem("uname", uname);
	window.location='contactProfile.html';

}

function getName2(){
	var name = document.getElementById("name2").innerText;
	var uname = document.getElementById("uname2").innerText;
	console.log(name);
	window.localStorage.setItem("name", name);
	window.localStorage.setItem("uname", uname);
	window.location='contactProfile.html';

}

function getName3(){
	var name = document.getElementById("name3").innerText;
	var uname = document.getElementById("uname3").innerText;
	console.log(name);
	window.localStorage.setItem("name", name);
	window.localStorage.setItem("uname", uname);
	window.location='contactProfile.html';

}

function getName4(){
	var name = document.getElementById("name4").innerText;
	var uname = document.getElementById("uname4").innerText;
	console.log(name);
	window.localStorage.setItem("name", name);
	window.localStorage.setItem("uname", uname);
	window.location='contactProfile.html';

}

function getName5(){
	var name = document.getElementById("name5").innerText;
	var uname = document.getElementById("uname5").innerText;
	console.log(name);
	window.localStorage.setItem("name", name);
	window.localStorage.setItem("uname", uname);
	window.location='contactProfile.html';

}


function getName6(){
	var name = document.getElementById("name6").innerText;
	var uname = document.getElementById("uname6").innerText;
	console.log(name);
	window.localStorage.setItem("name", name);
	window.localStorage.setItem("uname", uname);
	window.location='contactProfile.html';

}

function prName(){
	console.log(window.localStorage.getItem("contact"));
	document.getElementById("user").innerText = "Profile of " + window.localStorage.getItem("name");
	document.getElementById("name").innerText = window.localStorage.getItem("name");
	document.getElementById("uname").innerText = window.localStorage.getItem("uname");




}

function back(){
	window.localStorage.clear();
	window.location = 'contacts.html';
}




