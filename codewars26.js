function feast(beast, dish) {
    // grab the letters asked 
     let beastLetter = beast[0] + beast[beast.length - 1 ];
     let dishLetter = dish[0] + dish[dish.length - 1]
    //truthy falsey
     return beastLetter === dishLetter ? true : false
   }