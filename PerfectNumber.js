function checkPerfectNumber(number) {
  if (number <= 1) {
  	return false;
  }

  let sum = 1;

  for (let factor = 2; factor <= Math.sqrt(number); factor++) {
    if (number % factor === 0) {
      sum += factor;
      if (factor !== number / factor) {
        sum += number / factor;
      }
    }
  }

  return sum === number;
}

console.log(checkPerfectNumber(28)); 
console.log(checkPerfectNumber(12)); 

