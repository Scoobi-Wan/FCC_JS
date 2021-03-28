function checkCashRegister(price, cash, cid) {
  let denoms = [.01, .05, .1, .25, 1, 5, 10, 20, 100];
  let change = cash-price;
  console.log("CHANGE DUE - " + change);
  let changeArr = [];
  let changeAmt = 0;
  let changeTotal = 0;
  for(let i = denoms.length - 1; i >= 0; i--){
    changeAmt = 0;
    while(change >= denoms[i] && cid[i][1] > 0) {
      console.log("CHANGE NOW - " + change);
      cid[i][1] = (cid[i][1] - denoms[i]).toFixed(2);
      change = (change - denoms[i]).toFixed(2);
      changeAmt = changeAmt + denoms[i];
      changeTotal = parseFloat(changeTotal + denoms[i]).toFixed(2);
      console.log("CHANGE NOW - " + change);
    } if (changeAmt > 0) changeArr.push([cid[i][0], changeAmt])
  }
  
  console.log(changeArr);

  if (changeTotal >= change) {
    return {status: "OPEN", change: changeArr}
  } else if (changeTotal < change) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else {
    return {status: "CLOSED", change: changeArray}
  }
  
    
  
}  

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
