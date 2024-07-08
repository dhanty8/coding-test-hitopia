function getCharWeight(char) {
  return char.charCodeAt(0) - 96;
}

function calculateWeights(s) {
  let weights = new Set();
  let i = 0;

  while (i < s.length) {
    let currentChar = s[i];
    let weight = 0;
    let count = 0;

    while (i < s.length && s[i] === currentChar) {
      count++;
      weight += getCharWeight(currentChar);
      weights.add(weight);
      i++;
    }
  }

  return weights;
}

function solveWeightedStrings(s, queries) {
  let weights = calculateWeights(s);
  return queries.map((query) => (weights.has(query) ? "Yes" : "No"));
}

// Example usage:
let s = "abbcccd";
let queries = [1, 3, 9, 8];
console.log(solveWeightedStrings(s, queries)); // Output: [ 'Yes', 'Yes', 'Yes', 'No' ]
