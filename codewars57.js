function digitize(n) {
    // first convert to sting then we need to add seperation then reverse and combine back to an array
    return n.toString().split('').reverse().map(Number);
  }
  //Array 1.03