function isPrime(number) {
  let divisors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    } 
  }
  return divisors.length == 2 ? true : false;
}

function smallestCommons(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let newArr = [];

  for (let i = 0; i <= max - min; i++) {
    newArr.push(min + i);
  }

  // Multiply every prime values together
  let multiple = newArr[0];
  for (let i = 0; i < newArr.length; i++) {
    if (isPrime(newArr[i])) {
      multiple *= newArr[i];
    }
  }

  // Check if it can be divided by the even numbers
  for (let i = newArr.length - 1; i >= 0; i--) {
    if (newArr[i] % 2 === 0) {
      while (multiple % newArr[i] !== 0) {
        for (let j = 1; j < newArr[i]; j++) {
          if (isPrime(j) && (multiple * j) % newArr[i] === 0) {
            multiple *= j;
            break;
          } 
        }
        // if multiplying by a prime didn't work, try multiplying by 2
        if (multiple % newArr[i] !== 0) {
          multiple *= 2;
        }
      }
    } else {
      while (multiple % newArr[i] !== 0) {
        for (let j = 1; j < newArr[i]; j++) {
          if (isPrime(j) && (multiple * j) % newArr[i] === 0) {
            multiple *= j;
            break;
          }
        }
      }
    }
  }

  return multiple;
}

console.log(smallestCommons([18,23]));