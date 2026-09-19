// Write a function findLongestWord that takes a string (a sentence) and returns the longest word in it.

// A word is defined as a sequence of one or more letters (a-z, A-Z) or numbers (0-9). Punctuation and spaces should not be considered part of a word.

// If there are multiple words with the same maximum length, return the first one encountered in the sentence.

// Example 1
// Input: sentence = "The quick brown fox jumped over the lazy dog"

// Output: "jumped"

// Example 2
// Input: sentence = "Hello world, how are you today?"

// Output: "Hello"

// Constraints
// The input `sentence` will be a string.
// The length of the string will not exceed 10,000 characters.

// Topics
// string
// array
// regex
// loops

// Hints
// Hint 1. Consider how to extract 'words' from the sentence, ignoring punctuation and spaces. Regular expressions can be very helpful here.
// Hint 2. Remember to handle edge cases like an empty string or a string with no valid words.
// Hint 3. Pay close attention to

function findLongestWord(sentence: string): string {
  const words: string[] = sentence.match(/[a-zA-Z0-9]+/g) || [];

  let maxLengthWord = "";

  for (const word of words) {
    if (word.length > maxLengthWord.length) {
      maxLengthWord = word;
    }
  }
  return maxLengthWord;
}

const sentence = "Hello world, how are you today?";
console.log(findLongestWord(sentence));
