function highestPalindrome(s, k) {
  const n = s.length;
  let changes = Array(n).fill(0);

  // Helper function to convert the string to a palindrome
  function makePalindrome(l, r, k) {
    if (l > r) return k >= 0;
    if (s[l] !== s[r]) {
      changes[l] = changes[r] = 1;
      if (k <= 0) return false;
      s[l] = s[r] = Math.max(s[l], s[r]);
      k--;
    }
    return makePalindrome(l + 1, r - 1, k);
  }

  // Helper function to maximize the palindrome
  function maximizePalindrome(l, r, k) {
    if (l > r) return;
    if (s[l] !== "9") {
      if (changes[l] || changes[r]) {
        if (k > 0) {
          s[l] = s[r] = "9";
          k--;
        }
      } else if (k >= 2) {
        s[l] = s[r] = "9";
        k -= 2;
      }
    }
    maximizePalindrome(l + 1, r - 1, k);
  }

  // Convert the string to a palindrome if possible
  s = s.split("");
  if (!makePalindrome(0, n - 1, k)) {
    return "-1";
  }

  // Maximize the palindrome
  maximizePalindrome(0, n - 1, k);

  return s.join("");
}

// Example usage:
console.log(highestPalindrome("3943", 1)); // Output: 3993
console.log(highestPalindrome("932239", 2)); // Output: 992299
