//1. 
   const findSum = function(array) {


let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}

return sum
};


let Sum = [2,4,6]
var add=findSum(Sum)
console.log(add)

//2. 
  const findFrequency = function(array) {
  const frequency = {};
  
  // Count the frequency of each element
  for (const item of array) {
    frequency[item] = (frequency[item] || 0) + 1;
  }
  
  // Initialize variables for most and least frequent items
  let most = null;
  let least = null;
  let maxCount = -Infinity;
  let minCount = Infinity;
  
  // Iterate through the frequency object to find the most and least frequent items
  for (const item in frequency) {
    const count = frequency[item];
    
    if (count > maxCount) {
      maxCount = count;
      most = item;
    }
    
    if (count < minCount) {
      minCount = count;
      least = item;
    }
  }
  
  return { most, least };
};

console.log(findFrequency(['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd']));

//3.

const isPalindrome = function(str) {
  // Convert the string to lowercase for case insensitivity
  const lowerStr = str.toLowerCase();
  
  // Reverse the string and compare it to the original
  const reversedStr = lowerStr.split('').reverse().join('');
  
  // Return true if the original and reversed strings are the same
  return lowerStr === reversedStr;
};
console.log(isPalindrome('canal'));
console.log(isPalindrome('Ana'));

//4.
const largestPair = function(array) {// Initialize a variable to store the largest product, starting with the smallest possible value
  let maxProduct = -Infinity;

  // Loop through the array and calculate the product of each pair of adjacent elements
  for (let i = 0; i < arr.length - 1; i++) {
      const product = arr[i] * arr[i + 1];
      // Update the maxProduct if the current product is greater
      if (product > maxProduct) {
          maxProduct = product;
      }
  }

  return maxProduct;
}

// Examples
console.log(largestPair([5, 1, 2, 3, 1, 4]));
console.log(largestPair([9, 5, 10, 2, 24, -1, -48]));


 //5.
const removeParenth = function(str) {
  // Find the starting index of '(' and the ending index of ')'
  const openIndex = str.indexOf('(');
  const closeIndex = str.indexOf(')');

  // Extract the parts of the string before and after the parentheses
  const beforeParentheses = str.slice(0, openIndex);
  const afterParentheses = str.slice(closeIndex + 1);

  // Concatenate the parts without the parentheses and return the result
  return beforeParentheses + afterParentheses;
}

// Example
console.log(removeParenth('ido(not)liketocode'));

//6.
const scoreScrabble = function(str) {
  // Define the point values for each letter
  const letterScores = {
    a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1,
    d: 2, g: 2,
    b: 3, c: 3, m: 3, p: 3,
    f: 4, h: 4, v: 4, w: 4, y: 4,
    k: 5,
    j: 8, x: 8,
    q: 10, z: 10
};

// Normalize the input to lowercase
const normalizedWord = word.toLowerCase();

// Calculate the total score by summing the points for each letter
let totalScore = 0;
for (const letter of normalizedWord) {
    totalScore += letterScores[letter] || 0; // Default to 0 if letter is not in the map
}

return totalScore;
}

// Examples
console.log(scoreScrabble('hello'));
console.log(scoreScrabble('quiet'));
