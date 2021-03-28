function telephoneCheck(str) {
  // Got a little help/inspiration from FCC community page solution
  let teleRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return teleRegex.test(str);
}

console.log(telephoneCheck("555-555-5555"));
