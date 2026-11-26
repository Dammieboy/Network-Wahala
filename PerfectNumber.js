function checkPerfectNumber(number) {
  if (number <= 1) {
    return false;
  }

  let sum = 1;

  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      sum += factor;
    }
  }

  return sum === number;
}

console.log(checkPerfectNumber(28)); 
