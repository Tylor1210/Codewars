function checkExam(array1, array2) {
    // start with unscored grade 
    var grade = 0 
    // compare arrays via loop add 4 if correct 0 if empty -1 if wrong
    for (var i = 0; i < array1.length; i++ ) {
      if (array1[i] === array2[i]) {
        grade += 4
      } else if(array2[i] === ""){
        grade -= 0
      } else {
        grade -= 1
      }
    }// now we need if score < 0 
      if (grade < 0) {
        return 0
      }
      return grade
    
    }