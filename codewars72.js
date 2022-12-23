function getCount(str) {
    // first we must declare the counter and set to 0 / then declare our vowels 
    let vowelCount = 0
    const vowels = ["a", "e", "i", "o", "u"]
    // now we must loop trough the str characters to identify vowels and if vowel included in char add 1 to count 
    for(let char of str) {
        if(vowels.includes(char)) {
            vowelCount++
        }
    }
    return vowelCount
    
  }
  
  // string coming in lowercase letters / spaces  and a number going out 
  // 'abracadabra' should return 5
  // 