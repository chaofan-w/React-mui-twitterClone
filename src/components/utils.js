// Array(n)  returns an array with length of n, but not element on each index
// Array(12)  returns an array with length of 12
//arr.Keys() returns the array of index of the arr
//Array(12).Keys() returns the array of index of from 0 to 11.
//through this way, the function range can realize the range(number) --> array of numbers
export const range = (n) => Array.from(Array(n).keys());

export const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const random = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;
