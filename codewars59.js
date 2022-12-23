function arrAdder(arr) {
    let result = ''
    // where i loops through the the letters in the index specified as 0
    for (let i = 0; i < arr[0].length; i++){
      // now we need loop to specify next index when theres no more in first well call it c for collumn  
      for (let c = 0; c < arr.length; c++){
        // spit out result var + the 2 new arrays
        result += arr[c][i]
      }
      result += ' '
    }
    return result.trim() // at this point in test we have an extra space at the end so we need to knock off the last index using trim()
  }


// ARRAY 1.05