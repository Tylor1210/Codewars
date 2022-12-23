var capitals = function (word) {
	var caps = [];
  //Use a for loop to loop through the string 
  for(var i = 0; i < word.length; i++) {
    //find if the letter of the current iteration of the  string at whatever index is equal to uppercase and if so push into the caps var we created. 
    if(word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps; //return result 
};