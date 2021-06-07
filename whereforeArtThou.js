function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line  

  // let pairs = [];
  // for (let item in source) {
  //   pairs.push([item, source[item]]);
  // }


  let keys = Object.keys(source);  // Put every keys of source inside an array 

  // Loop through every object in collection 
  let count;
  for (let i = 0; i < collection.length; i++) {
    let count = 0;
    for (let j = 0; j < keys.length; j++) {
      if (collection[i][keys[j]] == source[keys[j]]) {
        count++;
      }
    }
    if (count == keys.length) arr.push(collection[i]);
  }
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet", first: "Tybalt"}));