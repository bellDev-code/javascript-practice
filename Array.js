"use strict";

// map 돌리는 방법
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mapTest = array.map((element, index) => {
  return element * 2;
});
// console.log(mapTest);

const filterArray = [5, 3, 8, 9, 2, 1, 4, 6, 7, 10];

// true를 반환하면 포함하라는 뜻이다.
const filtered = filterArray.filter((element, index) => {
  if (element === 10) {
    return true;
  }
});

// console.log(filtered);

// arrow 함수는 scope를 안열면 바로 반환하는 말.
// arrow 함수 써서 바로 반환하는 방법
const filtered2 = filterArray.filter(
  (element, index) => element > 2 && index < 5
);

// console.log(filtered2);

// arry에서 값을 가진 원소의 index 찾기
const foundIndex = array.findIndex((element, index) => {
  if (index === 5) {
    return true;
  }
});

// console.log(foundIndex);

const sortArray = [5, 7, 4, 6, 3, 1, 2];

const sortedArray = sortArray.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(sortedArray);

// 오름차순 정리
const ascSortedArray = sortArray.sort();
// 내림차순 정리
// 그러나, reverse는 기존의 sort 오름차순 데이터를
// 한 번 더 뒤집는 역할을 하기 때문에 구조상 단점이 있다.
const descSortedArray = sortArray.sort().reverse();

const deleteArray = [0, 10, 20];

delete deleteArray[0];

// 배열 delete 에 대해
// delete 를 쓰면 공간을 반환하지 않음
// splice 를 써야 지운 공간을 반환함

// console.log(deleteArray);

// 이 상태에서 length하면 데이터의 길이는 3을
// 반환하는걸 알 수 있다
// console.log(deleteArray.length);

deleteArray.splice(0, 1);
// console.log(deleteArray);

// stack LIFO  queue FIFO

const stackArray = [0, 10, 20];

// 배열의 마지막을 제거하는 pop
const popedValue = stackArray.pop();
const poppedValue2 = stackArray.pop();

// console.log(stackArray, popedValue, poppedValue2);

const includesArray = [0, 10, 20];

const isIn10 = includesArray.includes(20);
// console.log(isIn10);

// queue
// shift 앞에 있는 아이템을 삭제한다.
const queueArray = [0, 10, 20];
// console.log(queueArray.shift());

// slice (start, end -1)
const sliceArray = [0, 10, 20];
const slicedArray = sliceArray.slice(0, sliceArray.length);
// console.log(slicedArray);

sliceArray.forEach((e, i) => {
  // console.log(e, i);
});

const fillArray = [1, 2, 3, 4].fill(3, 0, 10);

// console.log(fillArray);
