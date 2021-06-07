// fib: F0 F1 F2 F3 F4 F5 F6 F7	...
//      0  1  1  2  3  5  8  13 ...

function sumFibs(num) {
  let sum = 0;

  // Fibonacci number calculator
  let fib = number => {
    if (number == 0)  {
      return 0;
    } else if (number == 1 || number == 2) {
      return 1;
    } else {
      return fib(number - 1) + fib(number - 2);
    } 
  }

  let i = 0;
  while (fib(i) <= num) {
    if (fib(i) % 2 === 1) sum += fib(i);
    i++;
  }

  return sum;
}
 
console.log(sumFibs(75025));
