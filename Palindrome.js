function Palindrome(number) {
    
    let num = 121;
    let originalNumber = num;
    let reverse = 0;
    let remainder;

    while (num > 0) {

        remainder = num % 10;

        reverse = reverse * 10 + remainder;

        num = Math.floor/ 10;
    }

    if (originalNumber === reverse) {
        console.log(originalNumber + " is a Palindrome");
    } else {
        console.log(originalNumber + " is not a Palindrome");
    }
}

Palindrome(121);











