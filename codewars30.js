function rentalCarCost(d) {
    let totalCost = 40 * d
    if( d >= 7 ) {
      return (totalCost -= 50)
    } else if ( d >= 3 ) {
      return (totalCost -= 20)
    }else {
      return totalCost
    }
  }