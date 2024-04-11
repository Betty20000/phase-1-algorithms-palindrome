function isPalindrome(word) {
  // Convert the string to lowercase
  word = word.toLowerCase();

  // Initialize pointers for the start and end of the string
  let start = 0;
  let end = word.length - 1;

  // Loop until the pointers meet in the middle
  while (start < end) {
    // If characters at both pointers are not equal, return false
    if (word[start] !== word[end]) {
      return false;
    }
    // Move pointers towards the middle
    start++;
    end--;
  }

  // If the loop completes without returning false, the string is a palindrome
  return true;
}

/*
  Pseudocode:
  1. Convert the string to lowercase.
  2. Initialize two pointers, one at the start of the string and one at the end.
  3. Iterate over the string while the start pointer is less than the end pointer:
     a. If the characters at both pointers are not equal, return false (not a palindrome).
     b. Move the start pointer forward and the end pointer backward.
  4. If the loop completes without returning false, return true (the string is a palindrome).

  Explanation:
  - The function first converts the input string to lowercase to handle case-insensitive palindrome checks.
  - It then initializes two pointers, one at the start of the string and one at the end.
  - It iterates over the string, comparing characters at corresponding positions using the pointers.
  - If any pair of characters does not match, the function returns false, indicating that the string is not a palindrome.
  - If the loop completes without any mismatches, the function returns true, indicating that the string is a palindrome.
*/

// Test cases
if (require.main === module) {
  // Custom tests
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
