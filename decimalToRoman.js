function convertToRoman(num) {

  // Author: Paul Rich

  // Convert a decimal number in to a roman numeral string
 
  // used to hold the conversion
  let romanStr = "";
  
  // holds the roman values
  let romans = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  // holds the decimal values
  let vals = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

 // start with biggest value (M, 1000) and add it to romanString only 
 // if number is bigger than the value. This also substracts the 
 // value from the number. Once the number is smaller than the value
 // the loop moves to the next smallest value in the arrays
  for (let i = 13; i >= 0; i--) {
    while(num >= vals[i]) {
      romanStr+= romans[i];
      num -= vals[i];
    }
  }
return romanStr;
}

 


console.log(convertToRoman(36));
