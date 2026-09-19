// Write a function that takes a string and replaces consecutive repeating characters with the character followed by the count. If a character appears only once, do not append a number.

// Examples
// compressCharacters("aaabbc")
// // Expected output: "a3b2c"

// compressCharacters("hello")
// // Expected output: "he2llo"
// Example 1
// Input: str = "aaabbc"

// Output: "a3b2c"

// Example 2
// Input: str = "hello"

// Output: "hel2o"

// Constraints
// The input string `str` will contain only lowercase English letters.
// The length of `str` will be between 0 and 1000 characters.

// Topics
// String
// Manipulation
// Compression



function compressCharacters(str: string): string {
    let result: string = "";
    let count: number = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += str[i];
            if (count > 1) {
                result += count;
            }
            count = 1;
        }
    }

    return result;
}

const str1 = "aaabbc";
const str2 = "hello";
console.log(compressCharacters(str1));
console.log(compressCharacters(str2));