function squareDigits(num){
    //first we must split the nums        // then multiply num by itself using val // then join
      return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}