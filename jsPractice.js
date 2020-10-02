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
