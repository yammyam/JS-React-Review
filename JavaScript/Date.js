//1. Date객체 생성법
let date1 = new Date(); //생성자
console.log(date1);

let date2 = new Date("1999/2/11/10:10:10"); // "-"  "/"   "." 로 날짜사이 구분 가능
console.log(date2);

//2. 타임스탬프
//특정 시간이 "1970.01.01 00시 00분 00초(협정세계시 UTC)"로 부터 몇 ms가 지났는지 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date4);

//3. 시간요소를 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; //자바스크립트는 월이 0부터시작해서 1월이 0월로 나옴, 고로 +1
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();

//4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); //0월부터 시작해서 3월로 바뀐다고 보면됨
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

//5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());
