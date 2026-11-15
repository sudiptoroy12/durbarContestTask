// Group Consecutive Numbers into Ranges

// Given an unsorted array of integers, group consecutive numbers into ranges. The output should be an array of strings, where each string represents a range. If a range consists of a single number, the string should just be that number. If it consists of multiple numbers, the string should be in the format 'start-end'.

// Examples
// groupConsecutiveRanges([1, 2, 3, 7, 8]);
// // Expected: ["1-3", "7-8"]
// groupConsecutiveRanges([10, 1, 2, 5, 6, 7]);
// // Expected: ["1-2", "5-7", "10"]
// Example 1
// Input: numbers = [1,2,3,7,8]

// Output: ["1-3","7-8"]

// Example 2
// Input: numbers = [10,1,2,5,6,7]

// Output: ["1-2","5-7","10"]

// Constraints
// The input array will contain only integers.
// Numbers can be positive, negative, or zero.

// Topics
// array
// sorting
// ranges
// easy


function groupConsecutiveRanges(numbers: number[]): string[] {
  // TODO
  if (numbers.length === 0) return [];

  const sorted = [...new Set(numbers)].sort((a, b) => a - b);

  const result: string[] = [];

  let start = sorted[0]!;
  let end = sorted[0]!;

  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i]!;

    if (current === end + 1) {
      end = current;
    } else {
      result.push(
        start === end ? `${start}` : `${start}-${end}`
      );

      start = current;
      end = current;
    }
  }

  result.push(start === end ? `${start}` : `${start}-${end}`);

  return result;
}

console.log(groupConsecutiveRanges([1, 2, 3, 7, 8])); // ["1-3", "7-8"]

console.log(groupConsecutiveRanges([1, 2, 2, 3]));
// ["1-3"]

console.log(groupConsecutiveRanges([-3, -2, -1, 0, 2]));
// ["-3-0", "2"]

console.log(groupConsecutiveRanges([5, 5, 5]));
// ["5"]

console.log(groupConsecutiveRanges([10, 1, 2, 5, 6, 7]));
// ["1-2", "5-7", "10"]