"use strict";

/* exported click */
function click()
{
	var name = document.getElementById("input").value;
	Math.seedrandom(name);

	var num = Math.random();
	console.log(num); 

	if(num < 0.5)
	{
		document.getElementById("result").innerHTML = "You may stay in /r/ThanosDidNothingWrong";
	}
	else
	{
		document.getElementById("result").innerHTML = "You must leave /r/ThanosDidNothingWrong";
	}
}

window.onload = function()
{
	document.getElementById("button").onclick = click;
};