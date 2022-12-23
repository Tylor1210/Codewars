function XO(str) {
    // we need to var for x and o num so
    let Xnum = '';
    let Onum = '';
    //loop through strings to find num of x & o 
    for (let i = 0; i < str.length ; i++) {
      // make sure all lower case for count & create else and else if  
      if (str[i].toLowerCase() === 'x'){
        Xnum += str[i];
      } else if(str[i].toLowerCase() === 'o'){
        Onum += str[i];
      }
    }
    return Xnum.length === Onum.length ;
  }