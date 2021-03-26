function smallestCommons(arr) {

  // Return the smallest multiple which is divisible by all numbers in the range of the
  // 2 numbers provided in the arr argument.
  // note: needed help from the FCC community page for this one to fully implement

  // Grab min and max vales from arr
  const [min, max] = arr.sort((a, b) => a - b);

  // get divisor count. need to check all divisors work
  const divisors = max - min + 1;

  // loop to find upper bound value. init val = 1
  let upper = 1;
  for( let i = min; i <= max; i++ ){
    upper *= i;
  }

  // for each multiple see if all divisors are accounted for
  for(let mult = max; mult <= upper; mult+= max){
    let divCount =  0;
    for(let i = min; i <= max; i++) {
      if(mult % i === 0) divCount++;
    }
    // if this is true, the search is satisfied.
    if (divCount === divisors) return mult;
  }

  

}


smallestCommons([1,5]);
