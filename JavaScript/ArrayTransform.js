//1. filter
//기존 배열에서 조건을 만족하는 요소들만 필터링 해 새로운 배열로 반환하는 메서드
let arr1 = [
  { name: "김효빈", hobby: "테니스" },
  { name: "이상태", hobby: "축구" },
  { name: "홍길동", hobby: "게임" },
];

const tennisPeople = arr1.filter((item) => {
  if (item.hobby === "테니스") return true;
});

console.log(tennisPeople);

//2. map
//배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
let mapped = arr2.map((item, idx, arr) => {
  return item * 2;
});
// console.log(mapped);
//ex)
let names = arr1.map((item) => item.name);
// console.log(names);

//3. sort
let arr3 = ["b", "a", "c"]; //문자는 동작하지만 내부 요소가 숫자일 때는 다르다.
arr3.sort();
console.log(arr3);
let sortNum = [10, 3, 5];
let sortedNumber = sortNum.sort((a, b) => {
  if (a > b) {
    //b가 a앞에 와라
    return 1;
  } else if (a < b) {
    //a가 b앞에 와라
    return -1;
  } else {
    //두 값을 자리를 바꾸지 마라
    return 0;
  }
});
//내림차순 정렬
// let sorted = sortNum.sort((a, b) => {
//     if (a > b) {
//       //b가 a앞에 와라
//       return -1;
//     } else if (a < b) {
//       //a가 b앞에 와라
//       return 1;
//     } else {
//       //두 값을 자리를 바꾸지 마라
//       return 0;
//     }
//   });
console.log("soretedNumber :", sortedNumber);

//4. toSorted (가장 최근에 추가된 최신 함수)
//sort는 원본배열을 고치지만 toSorted는 새로운 배열을 반환함
let arr4 = ["c", "a", "b"];

let sorted = arr4.toSorted();
console.log("sorted :", sorted);
console.log("arr4 :", arr4);

//5. join
//배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr5 = ["hi", "my", "name", "is"];
let joined = arr5.join("-");
console.log(joined);
