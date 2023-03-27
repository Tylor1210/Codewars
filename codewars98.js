function twoSum(numbers, target) {
    // LOOP THROUGH BOTH NUMBERS AS VALUES I & J 
    for (let i=0; i< numbers.length; i++){
      for (let j=0; j< numbers.length; j++){
        if ( i === j ){
          continue;
        }
        //IF NUMS == TARGET RETURN NUMS AS AN ARRAY 
        if(numbers[i] + numbers[j] == target){
          return [i, j]
        }
      }
    }
  }