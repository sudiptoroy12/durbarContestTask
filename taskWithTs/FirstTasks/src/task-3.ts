/*
You are given two positive integers, A and B.

Calculate the sum (A + B), difference (A - B), product (A * B), and quotient (A / B).

If at least one of these four values is exactly equal to 9, return the string "Nine". Otherwise, return "Nein".

Example 1
Input: a = 5, b = 4

Output: "Nine"

Explanation: A + B = 9

Example 2
Input: a = 10, b = 1

Output: "Nine"

Explanation: A - B = 9

Constraints
A and B will be positive integers.
A and B will be between 1 and 1000.
*/


function checkMathOperationsForNine(a: number, b: number): string {
  
  if (a < 1 || a > 1000 || b < 1 || b > 1000) {
    return "Invalid";
  }

  if (a + b === 9 || a - b === 9 || a * b === 9 || a / b === 9) {
    return "Nine";
  }

  return "Nein";
}

console.log(checkMathOperationsForNine(10, 1));
console.log(checkMathOperationsForNine(5, 4));
console.log(checkMathOperationsForNine(5, 20));
