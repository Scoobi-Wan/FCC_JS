function orbitalPeriod(arr) {
  // Given data in the {name: 'name', avgAlt: 100} format
  // return {name, orbitalPeriod} for each satellite in array
  // Author: Paul Rich
  
  // Represents the Standard gravitational Parameter
  var GM = 398600.4418;
  // earth's radius in km
  var earthRadius = 6367.4447;
  // map over elements and return desired object
  return arr.map(({name, avgAlt}) => {
    let semiMajorAxis = earthRadius + avgAlt;
    let orbitalPeriod = Math.round(Math.PI * 2 * Math.sqrt(Math.pow(semiMajorAxis, 3) / GM));
    return {name, orbitalPeriod};
  });
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
