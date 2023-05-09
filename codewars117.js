function factorial(n){
    // throw error if less than 0 and greater than 12 
    if (n > 12 || n < 0 ){
      throw error
    } else if (n < 1) {
      return 1
    } else {
      return n * factorial(--n)
    }
  }