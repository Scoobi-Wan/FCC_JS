function sumFibs(num) {
  let sum = 0;
  let curr = 1;
  let prev = 0;
  while (curr <= num){ 

    if (curr % 2 !== 0) sum += curr;
    curr = curr + prev;
    prev = curr - prev;
    
  }
  return sum;
}

console.log(sumFibs(1000)); 
