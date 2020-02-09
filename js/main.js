// JavaScript Document
/*jslint browder:true */
"use strict";
var myObject = {


option1:"Truck",
option2:"Bus",
option3: "Helicopter",
option4: "Train",
correct:3,


check: function(x) {
	if(x==myObject.correct){
		console.log("correct");
		document.getElementById("demo").innerHTML = "That's Who is In the Tomb!";
	} else {
		document.getElementById("demo").innerHTML = "Wrong Person";
		console.log("incorrect");
	}
}
};
