function mergeArrays(arr1, arr2) {
    // if there is no nums in arr return empty array
     if (arr1.length == 0 && arr2.length == 0) {
      return []
    } else {
      //return sorted array in ascending order
       return Array.from(new Set(arr1.concat(arr2))).sort((a,b) => a - b)
      }
  }