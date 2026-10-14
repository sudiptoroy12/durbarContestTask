// Calculate Days Between Dates

// Write a function daysBetweenDates that calculates the absolute number of whole days between two calendar dates given in YYYY-MM-DD format.

// The calculation must accurately account for varying month lengths and leap years. The dates can be provided in any order.

// Examples
// daysBetweenDates("2020-01-15", "2020-01-20");
// // 5
// daysBetweenDates("2020-01-15", "2019-12-31");
// // 15
// Example 1
// Input: date1 = "2020-01-15", date2 = "2020-01-20"

// Output: 5

// Explanation: Five days apart in the same month.

// Example 2
// Input: date1 = "2020-01-15", date2 = "2019-12-31"

// Output: 15

// Explanation: Spans year boundary, earlier date provided second.

// Constraints
// Dates are valid strings in `YYYY-MM-DD` format
// Years are between 1970 and 2099
// The function must return a non-negative integer

// Topics
// dates
// Date-object
// math
// boundaries

// Hints
// Hint 1. Beware of daylight saving time shifts when parsing dates locally; using UTC avoids 23-hour or 25-hour day errors.
// Hint 2. `Date.UTC(year, monthIndex, day)` creates timestamps consistently without timezone-related offsets.


function daysBetweenDates(date1: string, date2: string): number {
  // TODO: Return absolute number of days between date1 and date2

   const [year1, month1, day1] = date1.split("-").map(Number);
  const [year2, month2, day2] = date2.split("-").map(Number);

  const time1 = Date.UTC(year1!, month1! - 1, day1!);
  const time2 = Date.UTC(year2!, month2! - 1, day2!);

  const difference = Math.abs(time1 - time2);

  return difference / (1000 * 60 * 60 * 24);

}


console.log(daysBetweenDates("2020-01-15", "2019-12-31"));
// 15

console.log(daysBetweenDates("2020-02-28", "2020-03-01"));
// 2 (2020 is a leap year)