// Given an array of numbers, return the second largest unique number. If there are fewer than two unique numbers in the array, return null.

// Example 1
// Input: numbers = [10,5,20,5,15]

// Output: 15

// Example 2
// Input: numbers = [3,3,3]

// Output: null

// Constraints
// The input `numbers` will be an array of integers.
// The array can contain positive, negative, or zero values.
// The array length will be between 0 and 1000.

// Topics
// array
// sorting
// set
// medium

// Hints
// Hint 1. How can you efficiently get only the unique numbers from the array?
// Hint 2. Once you have the unique numbers, what's the best way to find the largest and second largest?
// Hint 3. Consider edge cases: what if the array is empty, or only has one unique number?

// function findSecondLargestUnique(numbers: number[]): number | null {
//   const frequency = new Map<number, number>()
//   for (const num of numbers){
//     frequency.set(num, (frequency.get(num) || 0)+1)
//   }
//   const uniqueNumbers:number[] = []

//   for(const num of numbers){
//     if(frequency.get(num) === 1){
//         uniqueNumbers.push(num)
//     }

//   }

//   if(uniqueNumbers.length < 2){
//     return null
//   }
//   const sortUniqueNumber = uniqueNumbers.sort((a,b)=>(a-b))
//   console.log(sortUniqueNumber);

//   return sortUniqueNumber[sortUniqueNumber.length-2]!

// }

// const numbers =  [3,3,3]
// console.log(findSecondLargestUnique(numbers));

function findSecondLargestUnique(numbers: number[]): number | null {
  const uniqueNumbers = [...new Set(numbers)];

  if (uniqueNumbers.length < 2) {
    return null;
  }

  const sortNumber = uniqueNumbers.sort((a, b) => a - b);

  return sortNumber[sortNumber.length - 2]!;
}

const numbers = [3, 3, 3, 6, 7];
console.log(findSecondLargestUnique(numbers));
