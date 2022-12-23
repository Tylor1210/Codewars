function evenNumbers(array, number) {
    let result = []
    for (let i = 0 ; i <= array.length; i++){
      if (array[i] % 2 == 0) {
        result.push(array[i])
      }
    }
    return result.slice(-number)
  }
  //Array 1.07 