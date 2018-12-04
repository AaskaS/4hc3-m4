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
	var name = document.getElementById("user").innerText;
	var uname = document.getElementById("uname1").innerText;
	window.localStorage.setItem("name", name);
	window.localStorage.setItem("uname", uname);
	window.location='contactProfile.html';

}

function getName2(){
	var name = document.getElementById("user2").innerText;
	var uname = document.getElementById("uname2").innerText;
	window.localStorage.setItem("name", name);
	window.localStorage.setItem("uname", uname);
	window.location='contactProfile.html';

}

function getName3(){
	var name = document.getElementById("user3").innerText;
	var uname = document.getElementById("uname3").innerText;
	window.localStorage.setItem("name", name);
	window.localStorage.setItem("uname", uname);
	window.location='contactProfile.html';

}

function getName4(){
	var name = document.getElementById("user4").innerText;
	var uname = document.getElementById("uname4").innerText;
	window.localStorage.setItem("name", name);
	window.localStorage.setItem("uname", uname);
	window.location='contactProfile.html';

}


function getConvo(){
	var user = document.getElementById("user").innerText;
	window.localStorage.setItem("name", user);
	window.location='conversation.html';

}

function getConvo2(){
	var user = document.getElementById("user2").innerText;
	window.localStorage.setItem("name", user);
	window.location='conversation.html';

}

function getConvo3(){
	var user = document.getElementById("user3").innerText;
	window.localStorage.setItem("name", user);
	window.location='conversation.html';

}

function getConvo4(){
	var user = document.getElementById("user4").innerText;
	window.localStorage.setItem("name", user);
	window.location='conversation.html';

}

function prName(){
	console.log("Profile of " + window.localStorage.getItem("name"));
	document.getElementById("user").innerText = "Profile of " + window.localStorage.getItem("name");
	document.getElementById("name").innerText = window.localStorage.getItem("name");
	document.getElementById("uname").innerText = window.localStorage.getItem("uname");
}

function convoName(){
	console.log("Conversation with " + window.localStorage.getItem("name"));
	document.getElementById("name").innerText = "Conversation with " + window.localStorage.getItem("name");
}

function getProfile(){
	document.getElementById("user").innerText = "Profile of " + window.localStorage.getItem("name");
	document.getElementById("name").innerText = window.localStorage.getItem("name");
	window.location='conversation.html';

}




function back(){
	window.localStorage.clear();
	window.location = 'contacts.html';
}

function backConvo(){
	window.localStorage.clear();
	window.location = 'inbox.html';
}




