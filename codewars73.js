function reverseWords(str) {
    // first lets split the char of string | then add on the reverse | join them back together | and split them at the spaces | flip index position of each str in array | convert back to string using join since last split had a ' ' join needs to be the same 
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
  }
  // Incomin string of char | 
  // desired output is string of same chars in reverse order 
  // apple => 'elppa'
  //