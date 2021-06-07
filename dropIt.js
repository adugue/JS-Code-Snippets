function dropElements(arr, func) {
  let newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
      if (func(newArr[i])) {
        break;
      }
      newArr.splice(i, 1); 
      i--;
  }
  return newArr;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));