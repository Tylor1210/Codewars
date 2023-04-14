function twiceAsOld(dadYearsOld, sonYearsOld) {
    // formula for calcualting how far dads age is from 2x son  
    let age = dadYearsOld - 2 * (sonYearsOld)
    // gets rid of negative as requested 
    return(Math.abs(age))
  }