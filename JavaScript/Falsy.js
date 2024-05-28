//falsy한 값들 7가지
let ex1 = undefined;
let ex2 = null;
let ex3 = NaN;
let ex4 = 0;
let ex5 = -0;
let ex6 = "";
let ex7 = 0n; //빅 인티져 라는 특수한 자료형 큰숫자를 저장하는데 사용됨

//if조건문의 조건을 범위를 간결하게 만드는 활용
function printName(person) {
  if (!person) {
    console.log("name값이 없음");
    return;
  }
  console.log(person.name);
}

function printName(person) {
  // 이런식으로 person의 값을 특정지어 조건을 걸면 나중에 person값이 바뀌면 수정해야되는 단점
  if (person === undefined) {
    console.log("name값이 없음");
    return;
  }
  console.log(person.name);
}

let person = null;
printName(person);

//단락평가로 더 깔끔히 하는법
function printName(person) {
  console.log(person && person.name);
}

function printName(person) {
  let name = person && person.name;
  console.log(name || "person의 값이 없음");
}
// 주의
// Truthy || Truthy  , 앞쪽 Truthy한 값이 나옴
// Truthy && Truthy  , 뒤의 Truthy한 값이 나옴
