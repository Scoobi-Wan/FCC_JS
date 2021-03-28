function checkCashRegister(price, cash, cid) {

  // Author: Paul Rich
  // Program: Implementation of a cash register
  // Arguments: price - the price of the Xact
  //            cash - the amount of cash the customer paid
  //            cid -  the amount of cash in the register drawer
  // if change === cid return CLOSED + cid
  // if change < cid return OPEN + change
  // if change > cid return INSUFFICIENT FUNDS + cid

  // determine how much change is needed
  let change = cash-price;

  // formula I found on FCC webpage to reduce register amounts
  // Note: I had this part 95% but needed help for last bit
  var register = cid.reduce(
    function(acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  // console.log(register.total);
  // console.log(change)

  // Check if the cash in drawer is equal to change needed
  if (register.total == change) return {status: "CLOSED", change: cid}

  // used to hold money values
  let denoms = [.01, .05, .1, .25, 1, 5, 10, 20, 100];
  
  // console.log("CHANGE DUE - " + change);
  let changeArr = [];

  // used to hold how much of each coin
  let changeAmt = 0;

  // used to hold total amount of change
  let changeTotal = 0;

  // Loop through denomination values, get change when able to (GREEDY)
  for(let i = denoms.length - 1; i >= 0; i--){
    // reset change amount for each coin
    changeAmt = 0;
    // find coins needed for each denomination value < change needed
    while(change >= denoms[i] && cid[i][1] > 0) {
      // subtract from the cash drawer
      cid[i][1] = (cid[i][1] - denoms[i]).toFixed(2);
      // subtract from change still needed
      change = (change - denoms[i]).toFixed(2);
      // add to change amount for specific denomination 
      changeAmt = changeAmt + denoms[i];
      // add to change total the overall amount of change
      changeTotal = parseFloat(changeTotal + denoms[i]).toFixed(2);
    }
    
    // if we used at least 1 of this denomination, add to change array
     if (changeAmt > 0) changeArr.push([cid[i][0], changeAmt])
  }
  
  
  
 
  // theres enough change, return appropriate OPEN + change
  if (changeTotal >= change) {
    return {status: "OPEN", change: changeArr}
  // theres not enough change, return INSUFFICIENT_FUNDS + []
  } else {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  
    
  
}  

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
