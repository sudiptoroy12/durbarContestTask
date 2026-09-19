// Truncate a given string if its length is greater than the specified maxLength. If truncation occurs, append "..." to the end of the truncated string. If the string's length is already within or equal to maxLength, return the string unchanged.

// Special consideration: If maxLength is 3 or less and truncation is necessary, the result should simply be "..." as there isn't enough space for both content and the ellipsis.

// Examples
// truncateString("Hello world, this is a long string", 10)
// // Expected output: "Hello w..."

// truncateString("Short text", 15)
// // Expected output: "Short text"
// Example 1
// Input: str = "Hello world, this is a long string", maxLength = 10

// Output: "Hello w..."

// Example 2
// Input: str = "Short text", maxLength = 15

// Output: "Short text"

// Constraints
// `str` will be a string.
// `maxLength` will be a non-negative integer.

// Topics
// string
// slice
// conditional

// Hints
// Hint 1. Consider the length of the ellipsis itself (3 characters).
// Hint 2. What should happen if `maxLength` is too small to show any part of the original string plus the ellipsis?
// Hint 3. Use `String.prototype.slice()` to get the beginning part of the string.



function truncateString(str: string, maxLength: number): string {
     if (str.length <= maxLength) {
    return str;
  }

  if (maxLength <= 3) {
    return "...";
  }

  return str.slice(0, maxLength - 3) + "...";
  
}

const str1 = "Hello world, this is a long string";
const maxLength1 = 10;
console.log(truncateString(str1, maxLength1)); // Output: "Hello w..."  