function steamrollArray(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr.push(...steamrollArray(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(steamrollArray([1, "b"]));