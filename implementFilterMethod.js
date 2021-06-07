// The global variable
var s = [23, 65, 98, 5];

// Implementation #1 - Using only a for loop
Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      newArray.push(this[i]);
    } 
  }
  // Only change code above this line
  return newArray;
};

// Implementation #2 - Using .forEach() method
Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  let newArray = [];
  console.log(this);
  this.forEach(function(item) {
    if (callback(item) === true) {
      return newArray.push(item);
    }
  });
  console.log(newArray);
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s);

