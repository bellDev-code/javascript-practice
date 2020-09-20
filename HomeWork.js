const Pizza = ["domino", "mr", "pizzahot", "hot", "bene"];

// 1. map으로 h로 시작하는 원소만 console.log 찍기
const pizzaMap = Pizza.map((element, index) => {
  if (element.startsWith("h")) {
    return true;
  }
});
console.log(pizzaMap);

// 2. filter로 domino 만 남긴 배열 만들기
const pizzaFilter = Pizza.filter((element, index) => {
  if (element === "domino") {
    return true;
  }
});
// console.log(pizzaFilter);

// 3. 오름차순, 내림차순 정렬 하기

// 오름차순
const ascPizzaArray = Pizza.sort();
// console.log(ascPizzaArray);

// 내림차순
const descPizzaArray = Pizza.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});
// console.log(descPizzaArray);

// 4. delete, splice 로 pizzahot 삭제해보기
const deletePizzaArray = ["domino", "mr", "pizzahot", "hot", "bene"];

// delete deletePizzaArray[2];
// console.log(deletePizzaArray);

deletePizzaArray.splice(2, 1);
// console.log(deletePizzaArray);
