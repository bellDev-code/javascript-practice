"use strict";
// 1. for 문으로 1~10 까지 짝수만 찍기

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

// 2. for문으로 10~1 까지 홀수만 찍기

for (let i = 10; i >= 1; i--) {
  if (i % 2 === 1) {
    // console.log(i);
  }
}

// 3. 주식 오브젝트 배열 만들기 (원소 10개, 오브젝트 key는 name과 price) pizza = [{ }] 형태

const stockArray = [
  {
    name: "삼성전자",
    price: 55700,
  },
  {
    name: "삼성전자 우",
    price: 50500,
  },
  {
    name: "대주전자재료",
    price: 46300,
  },
  {
    name: "네이버",
    price: 290000,
  },
  {
    name: "카카오",
    price: 368000,
  },
  {
    name: "sk하이닉스",
    price: 81700,
  },
  {
    name: "lg화학",
    price: 690000,
  },
];

// 4. 주식 배열 for문으로 처음부터 끝까지 "name는 price원입니다" 찍기  ex) 도미노피자는 13000원입니다.

for (let i = 0; i < stockArray.length; i++) {
  const stock = stockArray[i];
  const stockMenu = `${stock.name} 주식은 ${stock.price} 입니다.`;
  //   console.log(stockMenu);
}

// 5. a 값을 넣으면 a * a 값을 리턴하는 함수 만들기 (제곱)

function powerOfTwo(num) {
  const power = num * num;
  return power;
}

const result = powerOfTwo(8);
// console.log(result);

// 6. 함수에 a 값 넣으면 짝수, 홀수 판단하고 짝수면 true 반환 홀수면 false 반환하기

function number(a) {
  if (a % 2 === 0) {
    return true;
  } else if (a % 2 === 1) {
    return false;
  }
}

// console.log(number(2));
// console.log(number(1));

// 7. 함수에 빈 배열과 배열의 길이 넣으면 배열에 길이만큼 push하고 배열 반환하기 ex ) array, 10 => [0, 1,... 9]

const array = [];

function createArray(array, len) {
  for (let i = 0; i < len; i++) {
    array.push(i);
  }
  return array;
}
const newArray = createArray(array, 10);
// console.log(newArray);

// 8. 함수에 숫자, 제곱할 수 넣고 제곱한 결과 값 반환하기 power(num, 제곱할 수) 제곲 값 반환

function createJegop(num, jegop) {
  let init = num;
  for (let i = 0; i < jegop - 1; i++) {
    init *= 4;
  }
  return init;
}
// console.log(createJegop(8, 4));

// 9. 노트북 오브젝트 배열 만들고 name노트북은 price원 입니다. 출력하는데 price 1000원 이하일 때만 출력

const notebookArray = [
  {
    name: "asus",
    price: 800,
  },
  {
    name: "레노버",
    price: 200,
  },
  {
    name: "hp",
    price: 900,
  },
  {
    name: "삼성",
    price: 1500,
  },
  {
    name: "lg",
    price: 2000,
  },
];

for (let i = 0; i < notebookArray.length; i++) {
  const notebook = notebookArray[i];
  const newArray = `${notebook.name} 노트북은 ${notebook.price} 원 입니다.`;
  if (notebook.price < 1000) {
    console.log(newArray);
  }
}
