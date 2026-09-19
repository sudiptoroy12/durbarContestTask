// Temperature Converter
// Easy
// 96 solved
// 96 attempted
// Topics
// Hint
// 30 XP
// Given a temperature value and its unit ('C' for Celsius or 'F' for Fahrenheit), convert the temperature to the other unit. The result should be a number, rounded to two decimal places.

// Examples
// convertTemperature(0, 'C');
// // Expected output: 32

// convertTemperature(32, 'F');
// // Expected output: 0
// Example 1
// Input: value = 0, unit = "C"

// Output: 32

// Example 2
// Input: value = 32, unit = "F"

// Output: 0

// Constraints
// `value` will be a number.
// `unit` will be either 'C' or 'F'.

// Topics
// math
// numbers
// conditionals
// easy

// Hints
// Hint 1. You'll need to use conditional logic (e.g., `if/else if`) to check the `unit`.
// Hint 2. The formula for Celsius to Fahrenheit is `(C * 9/5) + 32`.
// Hint 3. The formula for Fahrenheit to Celsius is `(F - 32) * 5/9`.
// Hint 4. To round a number to two decimal places, you can multiply by 100, use `Math.round()`, and then divide by 100.


function convertTemperature(value: number, unit: 'C' | 'F'): number {

    let result:number 

    if(unit === 'C'){
        result = (value * 9/5)+ 32


    }else{
        result = (value - 32)* 5/9
    }
    return Math.round(result*100)/100
  
}

const value = 0
const unit = "C"
console.log(convertTemperature(value, unit));
