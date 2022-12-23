function find_average(array) {
    //first i need if else for incase its empty sooo
    if (array. length > 0) {
      //Now i need my average using reduce to add all the numbers andd length
      let average = array.reduce((a, b) => a + b) / array.length
      return average
    }else {
      return 0;
    }
    
  }