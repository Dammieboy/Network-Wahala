function reverseInteger(number) {
  let isNegative = false;
  let num = number;

  if (num < 0) {
    isNegative = true;
    num = num * -1;
  }

  let reversed = 0;

  while (num > 0) {
    let remainder= num % 10;
    reversed = (reversed * 10) + remainder;
    num = Math.floor(num / 10);
  }

  if (isNegative) {
    reversed = reversed * -1;
  }

  return reversed;
}


console.log(reverseInteger(12345));  
console.log(reverseInteger(-345));   
