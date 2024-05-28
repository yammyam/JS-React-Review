function funcA(){
  console.log("첫번째 함수 선언문?");
}
let a = funcA();
console.log(a);

let b = function (){
  console.log("두번째 함수 값으로써의 함수 함수 표현식")
}

console.log(b);

let c = (value) => {
  return  value + 1;
 }

console.log(`c로 출력${c}`);
console.log(`c()로 출력${c(10)}`);