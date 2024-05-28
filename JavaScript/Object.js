// 1. 객체 생성
let obj = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴  *훨씬 더 간결해서 이걸로 보통 만듬

let person = {
  name: "이상태", // 객체의 프로퍼티 (객체 속성)
  age: 25, // key : value , key값으론 문자열이나 숫자 가능, 띄워쓰기 포함하려면 key값에도 따옴표해줘야함
  hobby: "game",
  10: 20,
  "like cat": false,
  man: true,
  extra1: function () {}, // 함수가 와도되고
  extra2: {}, // 객체가와도되고
};

// 객체 프로퍼티를 다루는 법
// 객체 접근법 1.점표기법   2.괄호표기법
let name1 = person.name;
let name2 = person.name2; //이렇게 존재하지않는 프로퍼티에 접근하려고 하면 오류는 안나지만 undefined가 반환됨.

let age = person["age"]; //얘도 없는 프로퍼티인 "age2" 이런식이면 undefined가 반환됨.

let property = "hobby";
let hobby = person[property];
//정리 동적으로 객체 프로퍼티 가져올려면 브라켓방식 [] 이것이 좋음.

//새로운 프로퍼티를 추가하는 방법
person.job = "개발자";
person["좋아하는 음식"] = "치킨";

// 프로퍼티를 수정하는 방법
person.job = "프로게이머";
person["좋아하는 음식"] = "피자";

//프로퍼티를 삭제하는 방법
delete person.job;
delete person["좋아하는 음식"];

//프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
//name이라는 프로퍼티가 person이라는 객체에 있느냐 없느냐를 물어보는것, 리턴값은 Boolean값을 반환함.

//메서드 3가지 형태
const method1 = {
  sayHello: function () {
    console.log("헬로");
  },
  sayBye: () => {
    console.log("잘가");
  },
  sayHi() {
    console.log("안녕하세요"); //메서드 선언
  },
};

method1.sayHi();
method1["sayHi"]();

//객체는 객체타입이기 때문에 주솟값으로 서롤 비교하기 때문에 내용물이 같더라도 주솟값이 서로 다르면 다른것.
//프로퍼티끼리 비교하기 위해선 JSON.stringify를 이용함
//얕은복사 vs 깊은복사
//얕은비교 vs 깊은비교

// 객체순회 종류 3가지
let person4 = {
  name: " 이상태",
  age: 25,
  hobby: "축구",
};
let keys = Object.keys(person4); //내장함수 Object.keys, Object.values
console.log(keys); //keys는 배열

let values = Object.values(person4); //["이상태", 25, "축구"]

//객체만을 위한 반복분 for in 문,  배열만을 위한 for of 문
for (let key in person4) {
  console.log(key, person4[key]);
}
