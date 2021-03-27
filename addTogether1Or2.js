function addTogether() {
  // Function can accept 1 or 2 arguments.
  // If 2 arguments, return a + b
  // If 1 argument, store a, and return a function that accepts
  //     a second argument b, which returns a + b
  // Else return undefined since too many arguments
  //
  // Author: Paul Rich

  // First Check - If 2 arguments, and both are numbers return sum
  if (arguments.length === 2 &&  typeof arguments[0] === "number" &&
  typeof arguments[1] === "number") {

    return arguments[0] + arguments[1];

  // Second Check - If 1 argument store argument and return function
  // for second argument, then return sum
  } else if (arguments.length === 1 && typeof arguments[0] === "number") {
    // Store first arg
    let firstNum = arguments[0];
    // function to return to get second number
    function addSecondNum(secondNum) {
      return typeof secondNum === "number" ? firstNum + secondNum : undefined;
    };

    return addSecondNum;
    
  } else { return undefined; }

}

console.log(addTogether(5)(7))
