function convertHTML(str) {
    let newArr = [];

    for (let i = 0; i < str.length; i++) {
      switch(str[i]) {
        case '&': 
          newArr.push(['&', '&amp;']);
          break;
        case '<': 
          newArr.push(['<', '&lt;']);
          break;
        case '>': 
          newArr.push(['>', '&gt;']);
          break;
        case '"': 
          newArr.push(['"', '&quot;']);
          break;
        case "'": 
          newArr.push(["'", '&apos;']);
          break;
      }
    }

    let newStr = str;
    for (let i = 0; i < newArr.length; i++) {
      newStr = newStr.replace(newArr[i][0], newArr[i][1]);
    }

  return newStr;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML('Stuff in "quotation marks"'));