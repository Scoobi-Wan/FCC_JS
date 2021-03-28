function rot13(str) {
  // Author: Paul Rich
  //
  // program: caesar cipher - apply a ROT13 (unicode + 13) to every 
  //          char in a string and return the new string

  // break up the string into array
  let splitStr = str.split("");

  // used to hold the new string
  let shiftedStr = "";

  // debug - console.log(splitStr);
  
  // regex to check for capital letters
  let upperReg = /[A-Z]/;
  
  // map the elements (chars) in the string and shift them and add them to new string
  splitStr.map((char) => {
    if (upperReg.test(char)) {
      let uniVal = char.charCodeAt(0);
      let shiftVal = shift(uniVal);
      let newChar = String.fromCharCode(shiftVal);
      shiftedStr += newChar;
    } else {
      shiftedStr += char;
    }
  });

  return shiftedStr;
}

// Helper function - shift the unicode val and wrap around if needed
function shift(charVal){ 
  charVal = charVal + 13;
  if (charVal > 90) charVal -= 26;
  return charVal;
}

console.log(rot13("SERR PBQR PNZC"));
