const squareList = arr => {
  // Only change code below this line
  return arr
    .filter(num => num > 0 && num % 1 === 0) // filter for positive integers
    .map(num => num * num);                     // square each number
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);