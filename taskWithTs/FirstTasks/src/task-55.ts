// Find Majority Element

// Given an array of numbers, find the majority element. The majority element is defined as the element that appears more than n / 2 times, where n is the array's length. If no such element exists, return null.

// Examples
// findMajorityElement([3, 2, 3])
// // returns 3

// findMajorityElement([2, 2, 1, 1, 1, 2, 2])
// // returns 2

// findMajorityElement([1, 2, 3])
// // returns null
// Example 1
// Input: nums = [3,2,3]

// Output: 3

// Example 2
// Input: nums = [2,2,1,1,1,2,2]

// Output: 2


// Topics
// Arrays
// Hash Map
// Frequency Counter

function findMajorityElement(nums: number[]): number | null {
  // TODO: Implement the findMajorityElement function


    const count = new Map<number, number>();

  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);

    if (count.get(num)! > nums.length / 2) {
      return num;
    }
  }

  return null;
}

console.log(findMajorityElement([3, 2, 3])); // 3
console.log(findMajorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(findMajorityElement([1, 2, 3])); // null