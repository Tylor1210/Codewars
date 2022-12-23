function getAverage(marks){
    // set variable for the total 
    var total = 0;
    //loop through the array adding each value to the total
    for(var i = 0; i < marks.length; i++) {
      total += marks[i];
    }
    // average equation
    var average = total / marks.length
    //return average rounded to nearest integer
    return Math.round(average)
  }
  
// ARRAY 1.09  
