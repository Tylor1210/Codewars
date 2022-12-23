Array.prototype.reverse = function() {
    // You can use the splice() method to remove the day names from the months method and add it to a new array at the same time:
    var arr = this.splice(0);
    
    //The push() method adds one or more elements to the end of an array and returns the new length of the array, pop method removes the last element from an array and returns
    while(arr.length) {
      this.push(arr.pop());
    }   
    
    return this;
  };

  // ARRAY 1.08