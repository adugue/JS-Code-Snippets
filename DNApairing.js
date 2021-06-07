function pairElement(str) {
  let base = function(letter) {
    switch(letter) {
      case 'A': return 'T';
      case 'T': return 'A';
      case 'G': return 'C';
      case 'C': return 'G';
    }
  };

  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    newArr.push([str[i], base(str[i])]);
  }

  return newArr;
}

console.log(pairElement("GCG"));