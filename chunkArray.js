const array = [1, 4, 12, 3, 2, 6, -9, 0];
let n = 3;
const chunks = [];

function chunck(array, n) {
  for (let i = 0; i < array.length; i += n) {
    let chunck = array.slice(i, i + n);
    chunks.push(chunck);
  }
  console.log(chunks);
}

chunck(array, n);


// @Description 

// Problem Solving write a function, chunk(arr, n), that returns chunked array of size n at the least. Look at example

// example :
// Given: [1, 4, 12, 3, 2, 6, -9, 0], n=3
// Return: [[1,4,12], [3,2,6], [-9, 0]]
// Given: [1, 4, 12, 3, 2, 6, -9, 0], n=4
// Return: [[1,4,12,3], [2,6,-9,0]]
// Given: [1, 4, 12, 3, 2, 6, -9, 0], n=7
// Return: [[1,4,12,3,2,6,-9], [0] ]