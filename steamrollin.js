function steamrollArray(arr) {
  
  //flatten an arr without using Array.prototype.flat() method. Return one dimensional array
  // notes: used a recursive approach using the ternary operator as inspired by a solution posted to FCC community page

  const flattened = [].concat(...arr);
  return flattened.some(Array.isArray) ? steamrollArray(flattened) : flattened;
}

steamrollArray([1, [2], [3, [[4]]]]);
