// Given a sentence where words are separated by spaces, convert it into camelCase format. The first word of the resulting string should start with a lowercase letter, and all subsequent words should start with an uppercase letter. All other letters should be lowercase, and there should be no spaces.

// Example 1
// Input: sentence = "hello world"

// Output: "helloWorld"

// Example 2
// Input: sentence = "java script is fun"

// Output: "javaScriptIsFun"

// Constraints
// The input `sentence` will be a string.
// Words will be separated by one or more spaces.
// The input may contain leading or trailing spaces.







function convertToCamelCase(sentence: string): string {
  const words: string[] = sentence.trim().split(/\s+/);

  const result: string = words
    .map((word: string, index: number) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join("");

  return result;
}

const sentence = "hello world shuvo roy sudipto";
console.log(convertToCamelCase(sentence));







// function convertToCamelCase(sentence: string): string {
//   const words: string[] = sentence.trim().split(' ')
//   const result = words[0]! + words.slice(1).map(word => word[0]!.toUpperCase() + word.slice(1)).join('')

//    return result
// }

// const sentence = "hello world shuvo roy sudipto"
// console.log(convertToCamelCase(sentence))
