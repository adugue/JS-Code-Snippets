function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let missing = "";

  let shiftStr = 0;
  let shiftAlpha = alphabet.indexOf(str[0]);
  let iterations = str.length;

  for (let i = 0; i < iterations; i++) {
    if (!(str[i + shiftStr] === alphabet[i + shiftAlpha])) {
      missing = missing + alphabet[i + shiftAlpha];
      shiftStr--;
      iterations++;
    }
  }

  return missing.length === 0 ? undefined : missing;
}

console.log(fearNotLetter("ghijklmopqrstuvwxyz"));