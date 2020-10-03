"use strict";

const array = [];

for (let i = 1; i <= 10; i++) {
  array.push(i);
  //   console.log(i);
}
const test = () => {
  for (const element of array) {
    console.log(element);
    if (element === 5) {
      break;
    }
  }
};

test();
// for (const element of array) {
//   console.log(element);
//   if (element > 50) {
//     continue;
//   }
//   console.log("continue");
// }

// console.log(array);

// const test = () => {
//   for (const element of array) {
//     console.log(element);
//     if (element > 50) {
//       break;
//     }
//     console.log(element);
//   }
// };

// test();
