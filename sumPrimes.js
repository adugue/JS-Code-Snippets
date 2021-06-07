function sumPrimes(num) {
  let sum = 0;

  let isPrime = number => {
    let divisors = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        divisors.push(i);
      } 
    }
    return divisors.length == 2 ? true : false;
  }

  for (let i = 1; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }

  return sum;
}

console.log(sumPrimes(977));

