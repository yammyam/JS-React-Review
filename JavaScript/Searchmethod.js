//1. forEach
//각 요소 순회하면서 각각 요소에 특정 동작을 수행하는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item, idx, arr) => {
  doubledArr.push(item * 2);
});

// console.log(doubledArr);

//2. includes
//배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isIncludes = arr2.includes(3);
// console.log(isIncludes);

//3. indexOf        얕은비교로 배교함
//특정요소의 인덱스를 찾아서 반환하는 메서드
let arr3 = [1, 2, 2, 3]; //같은값이 두 개 이상 존재할 경우 젤 앞 인덱스를 반환
let index = arr3.indexOf(2); //값이 없다면 -1 반환함
// console.log(index);

//4. findIndex => 객체가 요소인 배열 순회할 때 유용함
//모든 요소를 순회하며, 콜백함수의 조건에 만족하는
//특정 요소의 인덱스를 반환하는 메서드
let arr4 = [1, 2, 3];
let res = arr4.findIndex((item) => item % 2 !== 0);
//배열에 없는 요소를 찾을려고 하면 -1이 나옴

//3, 4번 비교
let objectArr = [{ name: "이상태" }, { name: "홍길동" }];
console.log(objectArr.indexOf({ name: "이상태" })); //값을 찾지 못함
console.log(objectArr.findIndex((item) => item.name === "이상태"));
//중괄호를 콜백함수 우변을 감쌀경우 복합문으로 해석되서 명시적으로 return 을 적지않으면 동작하지 않고
//값을 찾지못하여 undefined를 반환함.

//5. find
//모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾고 그 요소를 반환함.
let arr5 = [{ name: "이상태" }, { name: "홍길동" }];
const fined = arr5.find((item) => {
  return item.name === "이상태";
});

console.log(fined);
