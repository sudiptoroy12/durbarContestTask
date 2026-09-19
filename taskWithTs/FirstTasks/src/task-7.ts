
// Given an array of integers, return an object containing the count of even and odd numbers.

// Example 1
// Input: numbers = [1,2,3,4,5]

// Output: {"even":2,"odd":3}

// Example 2
// Input: numbers = [10,20,30]

// Output: {"even":3,"odd":0}

// Constraints
// The input array `numbers` will contain only integers.
// The length of the `numbers` array will be between 0 and 1000.









function countEvenOdd(numbers: number[]): { even: number; odd: number } {
  let even: number = 0;
  let odd: number = 0;

  numbers.forEach((num: number) => (num % 2 === 0 ? even++ : odd++));

  return { even, odd };
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(countEvenOdd(numbers));
