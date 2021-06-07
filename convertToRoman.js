function convertToRoman(num) {
  let rom = ["M","D","C","L","X","V","I"]
  let rest = num;
  let count = [0,0,0,0,0,0,0];
  count[0] = Math.floor(rest / 1000);
  rest = rest % 1000;
  count[1] = Math.floor(rest / 500);
  rest = rest % 500;
  count[2] = Math.floor(rest / 100);
  rest = rest % 100;
  count[3] = Math.floor(rest / 50);
  rest = rest % 50;
  count[4] = Math.floor(rest / 10);
  rest = rest % 10;
  count[5] = Math.floor(rest / 5);
  rest = rest % 5;
  count[6] = Math.floor(rest / 1);

  let newNum = "";
  for (let i = 0; i < count.length; i++) {
    for (let j = 0; j < count[i]; j++) {
      newNum = newNum + rom[i];
    }
  }

  return newNum
    .replace("DCCCC", "CM") // 900
    .replace("CCCC", "CD")  // 400
    .replace("LXXXX", "XC") // 90
    .replace("XXXX", "XL")  // 40
    .replace("VIIII", "IX") // 9
    .replace("IIII", "IV"); // 4
}
 
console.log(convertToRoman(900));