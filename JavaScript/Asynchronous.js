// function add(a, b, callback) {
//   setTimeout(() => {
//     let sum = a + b;
//     callback(sum);
//   }, 3000);
// }

// add(1, 2, (value) => {
//   console.log(value);
// });

//음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "라면";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식어버린 ${food}`;
    callback(cooldownedFood);
  }, 3000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `얼어버린 ${food}`;
    callback(freezedFood);
  }, 5000);
}

orderFood((name) => {
  console.log(name);
  cooldownFood(name, (cooldownedFood) => {
    console.log(cooldownedFood);
    freezeFood(cooldownedFood, (freezeFood) => {
      console.log(freezeFood);
    });
  });
});
