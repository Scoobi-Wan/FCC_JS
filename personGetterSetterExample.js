var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  

  let [firstN, lastN] = firstAndLast.split(" ");
  this.getFullName = () => firstN + " " + lastN;
  this.getFirstName = () => firstN;
  this.getLastName = () => lastN;
  this.setFirstName = (first) => firstN = first;
  this.setLastName = (last) => lastN = last;
  this.setFullName = (firstAndLast) => {
    let [first, last] = firstAndLast.split(" ");
    firstN = first;
    lastN = last;
  }
  return firstAndLast;
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
