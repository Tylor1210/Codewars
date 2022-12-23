function sumMix(x){
    // reduce adds all numbers so i need to turn all values in the array to nums and then reduce for the sum
    return x.map(a => +a).reduce((a, b) => a + b);
  }
  //ARRAY 1.04