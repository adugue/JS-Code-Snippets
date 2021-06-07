// Function declared vs expression using a callback function

// Array of objects declaration
const array = [
	{ name: 'John', age: 34 },
	{ name: 'Amy', age: 20 },
	{ name: 'Felix', age: 10 }
];



// Function declaration
function mapAction1(item) {  // functin mapAction1 is created and "hoisted" by the browser at the top of the code  
	return item.age;
}

console.log(array.map(mapAction1));  // can be placed before or after function declaration



// Function expression 
const mapAction2 = function(item) {  // function itself doesn't have a name and is stored in the variable mapAction2 (which is read-only since const is used here)
	return item.name;
}

console.log(array.map(mapAction2)); // can only be placed after the variable mapAction2 is declared


// Function expression - arrow notation
const mapAction3 = (item) => item.name + " is " + item.age;

console.log(array.map(mapAction3)); // can only be placed after the variable mapAction2 is declared


// Function expression - arrow notation (simplified)
const mapAction4 = item => item.name + " is cool";

console.log(array.map(mapAction4)); // can only be placed after the variable mapAction2 is declared