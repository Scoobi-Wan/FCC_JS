function palindrome(str) {
  // Author: Paul Rich
  //
  // Check if str is a palindrome (case insensitive).
  // User can pass in symbols as well or spaces etc.
  // Anything non alphanumeric is filtered out

  // regex to check for instances of non alphanumerics and underscores
  let nonAlphaRegex = /[\W_]/g;

  // remove all things caught by regex, make lowercase, and store in new changed string variable
  let changed = str.replaceAll(nonAlphaRegex, "").toLowerCase();

  // if a palindrome is length 1 it is a palindrome, but at 0 it d.n.e.
  if (changed.length == 1) return true;
  if (changed.length == 0) return false;

  // index to mark beginning and end of string
  let first = 0;
  let last = changed.length - 1;

  // Only iterate halfway, check front against back
  while (first <= changed.length / 2) {

    // used to debug
    // console.log(`Is ${changed[first]} equal to ${changed[last]}?`);

    // check front element equal to back
    if (changed[first] !== changed[last]) return false;
    
    first++; last--;
  }

  return true;

}



console.log(palindrome("1 eye for of 1 eye."));
