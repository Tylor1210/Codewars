var number = (busStops) => {
    // declare var for people 
    var people = 0;
    for (let stop of busStops) {
      people += stop[0] - stop[1];
    }
    return people;
  };