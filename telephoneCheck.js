function telephoneCheck(str) {
  let hasTenDigits = false;
  let hasElevenDigits = false;
  if (str.match(/[0-9]/g).length == 10) {
    hasTenDigits = true;
  } else if (str.match(/[0-9]/g).length == 11) {
    hasElevenDigits = true;
  }

  let startsWithOne = false;
  if ((/^[1]/).test(str)) {
    startsWithOne = true;
  }

  let hasPermittedCharsOnly = false;
  if (!(/[^0-9-()\s]/).test(str)) {
    hasPermittedCharsOnly = true;
  }

  let hasCorrectParentheses = false;
  if (!(/[()]/).test(str)) {
    hasCorrectParentheses = true;
  } else if ((/[(][0-9]{3}[)]/).test(str)) {
    hasCorrectParentheses = true;
  } 

  let hasCorrectGrouping = false;
  if ((/[0-9]{3}[)\s-]{0,2}[0-9]{3}[\s-]{0,1}[0-9]{4}/).test(str)) {
    hasCorrectGrouping = true;
  }

  if (!hasTenDigits && !hasElevenDigits) {
    return false;
  } else if (!hasPermittedCharsOnly || !hasCorrectParentheses || !hasCorrectGrouping) {
    return false;
  } else if (hasElevenDigits && !startsWithOne) {
    return false;
  } else {
    return true;
  }
} 

telephoneCheck("1 555-555-5555");