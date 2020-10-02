"use strict";

const array = [];

// for (let i = 0; i <= 100; i++) {
//   array.push(i);
// }

// for (const element of array) {
//   console.log(element);
//   if (element > 50) {
//     continue;
//   }
//   console.log("continue");
// }

// console.log(array);

const test = () => {
  for (const element of array) {
    console.log(element);
    if (element > 50) {
      continue;
    }
    console.log("continue");
  }
};

test();
