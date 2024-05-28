//1. 스프레드 연산자
//객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

console.log(arr2);

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3, d: 4 };

console.log(obj2);

function funcA(a, b) {
  console.log(a, b);
}
funcA(...arr1);

// 2. Rest 매개변수
// 나머지 매개변수 , 배열 형태로 들어옴
function funcB(one, two, ...rest) {
  //rest 뒤에는 변수를 더 선언할 수 없음, 꼭 이름 이 rest일 필요 없음.
  // rest매개변수 문법과 스프레드...는 엄연히 다른것, 소괄호 안에 선언됨,
  console.log(rest);
}
funcB(...arr1);
