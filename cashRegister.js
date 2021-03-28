function checkCashRegister(price, cash, cid) {
  let denoms = [.01, .05, .1, .25, 1, 5, 10, 20, 100];
  let change = cash-price;
  let changeArr = [];
  let changeAmt = 0;
  let changeTotal = 0;
  for(let i = denoms.length - 1; i >= 0; i--){
    changeAmt = 0;
    while(change >= denoms[i]) {
      cid[i][1] -= denoms[i];
      change -= denoms[i];
      changeAmt += denoms[i];
      changeTotal += denoms[i];
    } if (changeAmt > 0) changeArr.push([cid[i][0], changeAmt])
  }
  
  console.log(changeArr);

  if (changeTotal >= change) {
    return {status: "OPEN", change: changeArr}
  } else if (changeTotal < change) {
    return {status: "INSUFFICIENT_FUNDS", change: changeArray}
  } else {
    return {status: "CLOSED", change: changeArray}
  }
  
   
  
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
