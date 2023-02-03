function nameShuffler(str){
    // taking in a string with two names
    // reversing them and returning a string 
    //"john McClane" --> "McClane john"
    // so essentially we want to return ths split and reversed string 
    return str.split(" ").reverse().join(" ");
  }