// Given a non-negative integer, repeatedly add all its digits until the result has only one digit.

// Examples
// repeatedDigitSum(9875)
// // Expected output: 2
// // Explanation: 9 + 8 + 7 + 5 = 29. Then, 2 + 9 = 11. Finally, 1 + 1 = 2.

// repeatedDigitSum(123)
// // Expected output: 6
// // Explanation: 1 + 2 + 3 = 6.
// Example 1
// Input: n = 9875

// Output: 2

// Example 2
// Input: n = 123

// Output: 6

// Constraints
// The input `n` will be a non-negative integer.

// Topics
// math
// loops
// numbers

// Hints
// Hint 1. You can convert the number to a string to easily access its individual digits.
// Hint 2. A loop can be used to repeatedly sum the digits until the number becomes a single digit.



function repeatedDigitSum(n: number): number {
  
  const digits:string = n.toString()
  if(digits.length === 1){
    return n
  }
  let sum = 0
  for(const digit of digits){
    sum+= Number(digit)
  }
  return repeatedDigitSum(sum)
}
const  n = 9875
console.log(repeatedDigitSum(n));
