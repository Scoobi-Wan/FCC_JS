function sumPrimes(num) {
  let sumPrimes = 0;
  let currNum = 2;
  while (currNum <= num) {
    if (isPrime(currNum)) sumPrimes += currNum;
    currNum++; 
  }
  return sumPrimes;
}

function isPrime(num) {
  if (num === 2) return true;

  let startNum = 2;
  if (startNum >= num) return false;
  while (startNum <= num / 2) {
    if (num % startNum == 0) return false;
    startNum++;
  } return true;
}

console.log(sumPrimes(977)); 
