function convertToRoman(num) {
  let rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
  let rest = num;
  let count = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  count[0] = Math.floor(rest / 1000);
  rest = rest % 1000;
  count[1] = Math.floor(rest / 900);
  rest = rest % 900;
  count[2] = Math.floor(rest / 500);
  rest = rest % 500;
  count[3] = Math.floor(rest / 400);
  rest = rest % 400;
  count[4] = Math.floor(rest / 100);
  rest = rest % 100;
  count[5] = Math.floor(rest / 90);
  rest = rest % 90;
  count[6] = Math.floor(rest / 50);
  rest = rest % 50;
  count[7] = Math.floor(rest / 40);
  rest = rest % 40;
  count[8] = Math.floor(rest / 10);
  rest = rest % 10;
  count[9] = Math.floor(rest / 9);
  rest = rest % 9;
  count[10] = Math.floor(rest / 5);
  rest = rest % 5;
  count[11] = Math.floor(rest / 4);
  rest = rest % 4;
  count[12] = Math.floor(rest / 1);

  let newNum = "";
  for (let i = 0; i < count.length; i++) {
    for (let j = 0; j < count[i]; j++) {
      newNum = newNum + rom[i];
    }
  }

  return newNum
}
 
console.log(convertToRoman(1000));