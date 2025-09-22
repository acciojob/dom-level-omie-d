//your JS code here. If required.
let target = document.getElementById("level")
let level = 0;
let current = target;
 // traverse upwards until no parent left
while (current) {
	level++;
	current = current.parentElement;
}

// Show the result
alert("The level of element is: " + level);