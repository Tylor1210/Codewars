function removeEveryOther(arr){
    // filter array if index % 2 = 0 
    return arr.filter((item, index) => index % 2 === 0 )
    
  }
  //Were taking in an array and trying to remove every other value 
  //Spit out the array with only the first third fifth etc value
  //["Keep", "Remove", "Keep", "Remove", "Keep"]
  //