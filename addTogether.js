function addTogether(...args) {
  let arr = [...args];
  if (arr.length == 2 && typeof(arr[0]) === "number" && typeof(arr[1]) === "number") {
    let sum = arr[0] + arr[1];
    return sum;
  } else if (arr.length == 1 && typeof(arr[0]) === "number") {
    let addOneMore = function (num) {
      if (typeof(num) === "number") {
        return arr[0] + num;
      } else {
        return undefined;
      }
    }
    return addOneMore;
  } else {
    return undefined;
  }
}

console.log(addTogether(2,3));
console.log(addTogether(2)([3]));