function binaryAgent(str) {
  
  // takes a string of binary values and converts to english
  let vals = str.split(" ");
  let decs = vals.map(val => parseInt(val, 2));
  let newStr = "";
  for(let i = 0; i < decs.length; i++) {
    newStr += String.fromCharCode(decs[i]);
  }

  return(newStr);
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 
            01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
