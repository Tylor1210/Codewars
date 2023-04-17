function twoSort(s) {
    const sorted = s.sort(); // the default sort function works
    return sorted[0] // take first element
      .split("") // split string into chars
      .join("***"); // join chars with ***
  }