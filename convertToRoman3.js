function convertToRoman(num) {
  let rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  let div = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let count = Array(div.length).fill(0);
  let rest = num;
  
  for (let i = 0; i < div.length; i++) {
    count[i] = Math.floor(rest / div[i]);
    rest = rest % div[i];
  }

  let newNum = "";
  for (let i = 0; i < 13; i++) {
    for (let j = 0; j < count[i]; j++) {
      newNum += rom[i];
    }
  }

  return newNum
}
 
console.log(convertToRoman(2021));