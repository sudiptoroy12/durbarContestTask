// Classify Password Strength
// Medium
// 261 solved
// 262 attempted
// Topics
// 60 XP
// Given a password string, classify its strength as "Weak", "Medium", or "Strong" based on the following rules:

// Strong: The password has a length of 8 or more characters and contains at least one uppercase letter, one lowercase letter, one digit, and one special character (from !@#$%^&*).
// Medium: The password has a length of 6 or more characters and satisfies at least two of the four character-type conditions (uppercase, lowercase, digit, special character).
// Weak: Any password that does not meet the criteria for "Strong" or "Medium".
// Examples
// classifyPassword("Password1!")
// // Expected: "Strong"

// classifyPassword("pass123")
// // Expected: "Medium"
// Example 1
// Input: password = "Password1!"

// Output: "Strong"

// Example 2
// Input: password = "pass123"

// Output: "Medium"

// Topics
// string
// conditionals
// regex

function classifyPassword(password: string): "Weak" | "Medium" | "Strong" {
  let count: number = 0;

  if (/[a-z]/.test(password)) count++;
  if (/[A-Z]/.test(password)) count++;
  if (/[0-9]/.test(password)) count++;
  if (/[!@#$%^&*]/.test(password)) count++;

  if (password.length >= 8 && count === 4) {
    return "Strong";
  } else if (password.length >= 6 && count >= 2) {
    return "Medium";
  }
  return "Weak";
}

const password = "Password1!";

console.log(classifyPassword(password));
