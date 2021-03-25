function convertHTML(str) {
  let newStr = "";
  for(let i = 0; i < str.length; i++) {
    let curr = str[i];
    switch(curr) {
      case "&": newStr += "&amp;"; break;
      case "<": newStr += "&lt;"; break;
      case ">": newStr += "&gt;"; break;
      case "\"": newStr += "&quot;"; break;
      case "'": newStr += "&apos;"; break;
      default: newStr += curr;
    }
  }
  return newStr;
}
