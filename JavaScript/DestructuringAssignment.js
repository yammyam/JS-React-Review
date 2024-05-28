//1. 배열 구조분해할당
let arr = [1, 2, 3];

let [one, two, three] = arr;
//값이 넘어가면 undefined가 부여되고 좌변에서 기본값을 부여할 수 있음. ex) d = 4
let [a, b, c, d = 4] = arr;
console.log(a, b, c, d);

//2. 객체 구조분해할당
let person = {
  name: "이상태", //스코프 변수
  age: 25,
  hobby: "game",
};

let { name, age, hobby, extra = "hello" } = person; //배열과 똑같이 없는값을 받으려고하면 undefined가 들어감
console.log(name, age, hobby);

// age말고 myAge에 담고싶다면
let { name: myName, age: myAge, hobby: myHobby } = person;
console.log(myName, myAge, myHobby);

//3. 객체 구조분해 할당으로 함수의 매개변수를 받는 법
let func = ({ name, age, hobby }) => {
  console.log(name, age, hobby);
};
func(person);
