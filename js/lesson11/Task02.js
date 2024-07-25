'use strict';


const foo = (arr) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
  arr.push(randomNumber);

  const sumN = arr.reduce((acc, curr) =>
    acc += curr, 0);
  if (sumN > 50) {
    console.log(arr, sumN);
    return arr;
  }
  return foo(arr);
};

foo([1, 2, 3, 4]);


