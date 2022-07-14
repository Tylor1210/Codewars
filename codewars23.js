function enough(cap, on, wait) {
    let riders = (on + wait); 
    if (riders <= cap){
      return(0)
    }else{
      return (riders - cap)
    }
  }