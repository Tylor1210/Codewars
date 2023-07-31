function duplicateEncode(word) {
    word = word.toLowerCase();
    const charCounts = {};
    for (const char of word) {
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
  
    let newString = "";
    for (const char of word) {
      if (charCounts[char] === 1) {
        newString += "(";
      } else {
        newString += ")";
      }
    }
  
    return newString;
  }