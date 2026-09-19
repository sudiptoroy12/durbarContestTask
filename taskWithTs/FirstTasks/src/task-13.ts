// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. For this problem, you need to write a function that checks if a given string is a palindrome.

// Your function should ignore case, spaces, and punctuation. Only alphanumeric characters (letters and numbers) should be considered when determining if the string is a palindrome.

// ## Examples

// ```js
// isPalindrome("madam")
// // => true

// isPalindrome("A man, a plan, a canal: Panama")
// // => true

// isPalindrome("hello")
// // => false

// ```

// **Example 1**

// **Input:** str = "madam"

// **Output:** true

// **Example 2**

// **Input:** str = "A man, a plan, a canal: Panama"

// **Output:** true

// ## Constraints

// - ``The input `str` will be a string.``
// - ``The length of `str` will be between 0 and 1000 characters.``

// ### svgTopicssvg

// **stringalgorithmseasypalindrome**

// ### svgHintssvg

// **Hint 1. **Consider converting the entire string to a consistent case (e.g., lowercase) first.

// **Hint 2. **You'll need a way to remove non-alphanumeric characters. Regular expressions can be very helpful for this.

// **Hint 3. **Once the string is cleaned, how can you check if it reads the same forwards and backwards?


function isPalindrome(str: string): boolean {

    const cleanStr: string = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

    const reverseStr: string = cleanStr.split("").reverse().join("")
    

    return cleanStr === reverseStr
    
}



const str = ""
console.log(isPalindrome(str));
