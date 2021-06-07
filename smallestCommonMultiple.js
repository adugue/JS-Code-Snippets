function smallestCommons(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  // Calculate multiples of max value (max * 1, max * 2 ...) and check if that multiple is a multiple of the other values (max - 1, max - 2... min).
  // While loop exits as soon as a common multiple is found. 
  let multiple = max;
  let found = false;
  while (true) {
    for (let i = max - 1; i >= min; i--) {
      if (multiple % i == 0) {
        found = true;
      } else {
        found = false;
        break;
      }
    }
    if (found) break;
    multiple += max;
  }
  return multiple;
}

console.log(smallestCommons([18,23]));