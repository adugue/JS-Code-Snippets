function rot13(str) {
  let newStr = "";
  let letter = 0;

  for (let i = 0; i < str.length; i++) {
    if ((/[A-Z]/).test(str[i])) {
      letter = str[i].charCodeAt(0) + 13;
      if (letter > 90) letter -= 26;
      newStr += String.fromCharCode(letter);
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

console.log(rot13("SERR PBQR PNZC"));