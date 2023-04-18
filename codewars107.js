function reverseLetter(str) {
    let revStr = str.split("").reverse().join("").replace(/[^a-z]/gi,'');
    return(revStr)
  }