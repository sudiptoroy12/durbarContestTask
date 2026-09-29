// Common Skills of Two Candidates

// Given two arrays of candidate skill names, find all skills shared by both candidates.

// The comparison must be case-insensitive. The returned array must:

// Contain each shared skill converted to lowercase.
// Contain no duplicate values.
// Be sorted alphabetically in ascending order.
// Examples
// commonSkills(["JS", "React", "Node"], ["react", "css", "js"]);
// // Returns: ["js", "react"]
// commonSkills(["Python", "SQL"], ["Java", "C++"]);
// // Returns: []
// Example 1
// Input: skills1 = ["JS","React","Node"], skills2 = ["react","css","js"]

// Output: ["js","react"]

// Explanation: Matching skills are "js" and "react", returned in alphabetical order.

// Example 2
// Input: skills1 = ["Python","SQL"], skills2 = ["Java","C++"]

// Output: []

// Explanation: No common skills exist.

// Constraints
// 0 <= skills1.length, skills2.length <= 1000
// 1 <= skills1[i].length, skills2[i].length <= 50
// Skill strings contain English letters, numbers, and basic punctuation (e.g., +, #).

// Topics
// arrays
// set
// strings
// sorting

// Hints
// Hint 1. Convert all skill strings in both arrays to lowercase first to normalize them.
// Hint 2. Use a JavaScript Set to remove duplicates and enable efficient lookup with `.has()`.
// Hint 3. Sort the resulting array with `.sort()` before returning.


function commonSkills(skills1: string[], skills2: string[]): string[] {
    const skillSet = new Set(skills2.map((skill) => skill.toLowerCase()));

  const common = skills1
    .map((skill) => skill.toLowerCase())
    .filter((skill) => skillSet.has(skill));

  return [...new Set(common)].sort();
}


console.log(commonSkills(["JS", "React", "Node"], ["react", "css", "js"]));
