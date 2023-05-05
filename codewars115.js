function sumTwoSmallestNumbers(numbers) {
    // Spread operator to access the array
    // lowest num 
    let low1 = Math.min(...numbers)
    numbers.splice(numbers.indexOf(low1), 1)
    //second lowest num
    let low2 = Math.min(...numbers)
    // add them together
    return(low1+low2)
  }