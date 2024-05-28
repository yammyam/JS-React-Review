function repeat (count , callback){
  for(let i = 1 ; i <= count ;i++){
    callback(i);
  }
}

repeat(5,  (n) => {
  console.log(n*2);
} )