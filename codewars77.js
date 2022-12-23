function getSum(a,b){
    let sum = 0;
    if (a == b) return a;
    if(a < b){
      for (; a <= b; a++){
        sum += a;
      }
    } else if (a > b){
        for(; b <= a; b++){
          sum += b;
        }
    }
    return sum;
  }
  
  //a & b === numbers that can be positive or negative 
  //return the sum of all between them (looop) OR if their equal return one of the two nums 
  //1,0 = (1+0 = 1) ; 1,1 = (1) since both are same 
  //