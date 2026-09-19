
/*Given an integer monthNumber between 1 and 12, return the English name of the corresponding month, with the first letter capitalized.

Example 1
Input: monthNumber = 3

Output: "March"

Example 2
Input: monthNumber = 10

Output: "October"

Constraints
The input `monthNumber` will be an integer between 1 and 12, inclusive.*/



function getMonthName(monthNumber: number): string {
  const months: string[] = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];


  if (monthNumber < 1 || monthNumber > 12) {
    return "Invalid";
  }
  
  return months[monthNumber - 1] ! ;
}


console.log(getMonthName(3));  // March
console.log(getMonthName(10)); // October
console.log(getMonthName(13)); // Invalid