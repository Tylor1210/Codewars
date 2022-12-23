class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallest = args[0] // set var fsmallest 
      //loop through the index and if the number is smaller then current smallest make IT the smallest
      for(let i = 0; i < args.length; i++){
          if(args[i] < smallest) smallest = args[i]
      }
    //return result
      return smallest
    }
  }
// ARRAY 1.06