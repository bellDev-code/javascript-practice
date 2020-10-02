"use strict";

const str = "string";

// 문자열 특정 문자열로 시작되는지 확인하는 방법은?
const isStart = str.startsWith("s");
console.log(isStart);

// 문자열 자르는 방법
const slicedStr = str.slice(0, 4);
console.log(slicedStr);

// 문자열을 대문자로 바꾸는 방법
const upperStr = str.toUpperCase();
console.log(upperStr);

// 문자열을 소문자로 바꾸는 방법
const lowerStr = str.toLowerCase();

// 문자열 숫자를 숫자로 바꾸는 방법
const a = "3465";
const stringToInt = parseInt(a);
console.log(stringToInt);
