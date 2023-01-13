function solution(string) {
    let splitStr = string.split("");
    let newStr = string.split("");
    let capStr = string.toUpperCase().split("");
    for (i = 0; i < splitStr.length; i++) {
      if (splitStr[i] === capStr[i]) {
        newStr.splice(i, 0, ' ');
      }
    }
    return newStr.join("");
  }