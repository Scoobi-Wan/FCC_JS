function dropElements(arr, func) {
  // Drop elements from the front of the arr until func(arr[0]) === true


  while (arr.length > 0 && func(arr[0]) !== true) {
    arr.shift();
  }

  return arr;
  
}

 console.log( dropElements([1, 2, 3, 4], function(n) {return n >= 3; }));
