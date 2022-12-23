function doubleChar(str) {
    let output = str.split("");
    let result = "";
    for (i = 0; i < str.length; i++) {
      result += output[i] + output[i]
    }
    return (result)
}