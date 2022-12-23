function oddOrEven(array) {
    const num = array.reduce((partialSum, a) => partialSum + a, 0)
    if ((num % 2) === 0 ){
      return 'even'
    }else {
      return 'odd'
    }
 }