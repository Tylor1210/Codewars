function friend(friends){
    return friends.filter(el => el.length === 4)
  }
  
  //   list of strings coming in 
  //   4 letters === friend 
  //   otherwise not 
  //   example: ["ryan", "kieran", "mark",] == ["ryan", "mark"]
  //   return [friends in original order for output ]
  //
  //   thought: were returning a filtered out; more or less than 4 soooo