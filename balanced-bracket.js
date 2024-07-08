function isBalancedBrackets(str) {
  const stack = [];
  const bracketPairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of str) {
    if (char === " ") {
      continue;
    } else if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
        return "NO";
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

// Example usage
console.log(isBalancedBrackets("{ [ ( ) ] }")); // Output: YES
console.log(isBalancedBrackets("{ [ ( ] ) }")); // Output: NO
console.log(isBalancedBrackets("{ ( ( [ ] ) [ ] ) [ ] }")); // Output: YES
