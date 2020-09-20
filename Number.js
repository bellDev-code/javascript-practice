const a = 512;
const b = 277;

const devideValue = a / b;

// 소수점 자를 때 쓰는 toFixed 함수
console.log(devideValue.toFixed(3));

// 반올림 하는 방법
const roundNumber = Math.round(devideValue);
console.log(roundNumber);

// 내림 하는 방법
const floorNumber = Math.floor(devideValue);
console.log(floorNumber);

// 올림 하는 방법
const ceilNumber = Math.ceil(devideValue);
console.log(ceilNumber);

const c = 600;
c.toString();
console.log(c);
