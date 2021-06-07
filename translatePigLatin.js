function translatePigLatin(str) {

  let start = str.match(/^[^aeiou]+/);
  if (start === null) {
    start = 0;
  } else {
    start = start[0];
  }

  let rest = str.slice(start.length);
  let newStr;
  if (start.length >= 1) {
    newStr = rest + start + "ay";
  } else {
    newStr = rest + "way";
  }

  console.log(newStr);

  return newStr;
}

console.log(translatePigLatin("algorithm"));
