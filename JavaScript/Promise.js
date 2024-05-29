function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // resovle와 reject는 함수임
    //비동기 작업을 진행할 콜백함수 넣어주기
    //비동기 작업을 실행행하는 함수 excutor
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아님");
      }
      // resolve("결괏값");
      // reject("왜 실패했는지 이유.....");
    }, 2000);
  });
  return promise;
}

const p = add10(0);
p.then((result) => {
  console.log(result);

  const newP = add10(result);
  //   newP.then((result) => {
  //     console.log(result);
  //   });
  return newP; // return이 없다면 기존 프로미스의 p를 반환하지만 return newP를 명시하면 그것을 반환함
  //return add10(result)로 축약가능
})
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//결괏값을 이용하려면 "then" 이라는 메서드를 사용

// promise //프로미스 체이닝 방식
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//then메서드는 호출결과가 promise를 반환하기 때문에 이어서 붙이는 위와 같은 방법이 가능

//실패 버전의 "then메서드"
// promise.catch((error) => {
//   console.log(error);
// });
