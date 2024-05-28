//1. push
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);
//push는 배열 뒤에 값들을 붙이고 반환값은 더해진 결과배열의 길이를 리턴

//2. pop
//배열 맨 뒷 값을 제거하고 제거한 값을 리턴함
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

//3. shift
//배열 맨 앞 값을 제거하고 제거한 값을 리턴함
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem, arr3);

//4. unshift
//배열의 맨 앞에 새로운 요소를 추가하는 메서드, 추가된 결과배열의 길이를 리턴함
let arr4 = [1, 2, 3];
let newLength2 = arr4.unshift(0);
console.log(newLength2, arr4);

//5. slice
//배열 잘라서 잘린배열 반환하는 메서드
let arr5 = [1, 2, 3, 4, 5]; //5가 -1자리, 1이 -5자리
let sliced = arr5.slice(2, 5); //2부터 5인덱스 앞까지를 잘라준다.
console.log(sliced); //원본배열 그대로 새로운게 생긴거임
console.log(arr5); //원본배열유지
console.log(arr5.slice(-4, -2));

//6. concat
//두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
