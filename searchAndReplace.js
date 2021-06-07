function myReplace(str, before, after) {
  let index = str.indexOf(before);
  let newAfter = "";
  
  if (str[index] === str[index].toUpperCase()) {
    newAfter = after[0].toUpperCase() + after.slice(1);
  } else {
    newAfter = after[0].toLowerCase() + after.slice(1);
  }

  return str.slice(0, index) + newAfter + str.slice(index + before.length);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));