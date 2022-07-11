function abbrevName(name){
    const newArr = name.split(" ")
    //new array will return the 0 position of both words in array and add a .
    //            FW   FL                SW  FL   uppercase
    return (newArr[0] [0] + "." + newArr [1] [0]).toUpperCase()
  }