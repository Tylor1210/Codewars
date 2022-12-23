function fakeBin(x){
    //need too loop through 
    var bin = ''
    for(var i = 0; i < x.length; i++){
      if(x[i] < '5')bin += 0;
      else if (x[i] >= '5')bin += '1';
    }
    return(bin)
  }