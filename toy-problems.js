/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/

let plusOneSum = [1,2,3,4];

function addThemPlusOne(array){
    let x = array.reduce((a,b) => a+b);
    return x + array.length}

addThemPlusOne(plusOneSum);



/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/

let flatten = ([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]


function flattenArray(array) {
  return array.flat(2)
}

  flattenArray(flatten)

/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/

// I could not figure this out...

/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/


function difference(array1, array2) {
  let difference = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) === -1) {
      difference.push(array1[i]);
    }
  }
  return difference;
}



/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/


function returnLongestWord(string) {
  let stringArray = string.toLowerCase().split(' ');
  return Array.from(new Set(stringArray));
  let longestWord = "";
  for (let i = 0; i < stringArray.length; i++) {
    if (longestWord.length < stringArray[i].length) {
      if (longestWord != longestWord){
      longestWord = stringArray[i];
    }}
  }
  return longestWord;
}
returnLongestWord("buffalo Buffalo buffalo");

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

let arrayToThousand = []

for(var i = 1; i < 1000; i++){
    arrayToThousand.push(i);
}

function arraySum(array){
  return array.reduce(function(a,b){
    return a+b
  }, 0);
}

function sumOfTables(array) {
  let results = array.filter(x => x % 3 === 0 || x %5 === 0);
  return arraySum(results);
}

sumOfTables(arrayToThousand);

/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/

function findUniqueChars(string){
  let charArray = string.split('');
  return Array.from(new Set(charArray)).join('');
}

findUniqueChars('goodmorning banana')

/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/

function sum(x,y) {
  if (y === undefined){
    return function(z) {
      return x + z
    }
  } else return (x)+(y);
}
