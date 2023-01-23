function alphabetPosition(text) {
    var result = ""; // Result string 
    //loop through text 
    for (var i = 0; i < text.length; i++) {
      //get the to uppercase char code 
      var code = text.toUpperCase().charCodeAt(i)
      //subtract 64 to get the code 
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  // return result
    return result.slice(0, result.length - 1);
  }