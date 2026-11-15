// Minimum Bracket Removals

// Given a string containing only opening ( and closing ) brackets, return the minimum number of brackets that must be removed to make the string balanced.

// A string is considered balanced if:

// Every opening bracket has a corresponding closing bracket.
// Every closing bracket has a corresponding opening bracket.
// The brackets are properly nested (e.g., () is balanced, )( is not).
// Examples
// minRemovalsToBalance("()()")
// // Expected output: 0

// minRemovalsToBalance("())(")
// // Expected output: 2
// Example 1
// Input: s = "()()"

// Output: 0

// Explanation: The string is already balanced, so 0 removals are needed.

// Example 2
// Input: s = "())("

// Output: 2

// Explanation: Removing the second ')' and the last '(' results in '()', which is balanced. Minimum 2 removals.

// Constraints
// The input string `s` will only contain '(' and ')' characters.
// The length of `s` will be between 0 and 1000.

// Topics
// String
// Stack
// Easy

// Hints
// Hint 1. Consider iterating through the string and keeping track of open brackets.
// Hint 2. A counter can be used to represent the balance of open vs. closed brackets.

function minRemovalsToBalance(s: string): number {
  // TODO: Implement this function

    let open = 0;
  let removals = 0;

  for (const char of s) {
    if (char === "(") {
      open++;
    } else {
      if (open > 0) {
        open--;
      } else {
        removals++;
      }
    }
  }

  return removals + open;
}


console.log(minRemovalsToBalance("()()")); // 0
console.log(minRemovalsToBalance("())(")); // 2
console.log(minRemovalsToBalance("((("));  // 3
console.log(minRemovalsToBalance(")))"));  // 3
console.log(minRemovalsToBalance(""));     // 0
console.log(minRemovalsToBalance("(()"));  // 1