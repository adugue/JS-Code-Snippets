function palindrome(str) {
  let newStr = str.match(/[A-Za-z0-9]/g).join("").toLowerCase();
  let checkPal = function(start, end) {
    for (let i = 0; i < start.length; i++) {
      if (start[i] !== end[start.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  if (newStr.length % 2 == 1) {
    let front = newStr.slice(0, (newStr.length - 1) / 2);
    let rest = newStr.slice((newStr.length - 1) / 2 + 1);
    return checkPal(front, rest);
  } else {
    let front = newStr.slice(0, newStr.length / 2);
    let rest = newStr.slice(newStr.length / 2);
    return checkPal(front, rest);
  }
}

console.log(palindrome("_eye"));