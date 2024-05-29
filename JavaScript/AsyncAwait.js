// async
// 어떤 함수를 비동기 함수로 만들어 주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

// async function getDate() {
//   return {
//     name: " 이상태",
//     id: "lst",
//   };
// }

//return 안의 객체를 결과값으로 갖는 새로운 프로미스를 반환함

async function getDate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: " 이상태",
        id: "lst",
      });
    }, 1500);
  }); //애초에 프로미스를 반환하는 비동기 함수였다면 그냥 이걸 반환하도록 내버려 둠. async가 별다른 작동을 안함.
}

console.log(getDate());

// await
// async 함수 내부에서만 사용 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  const data = await getDate(); // 프로미스 함수가 종료되길 기다려줌
  console.log(data);
}

printData();
