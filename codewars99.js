function shortcut (string) {
    // use the string.replace method to identify the vowels and remove them per mdn
    return string.replace (/[aeiou]/g, '')
  }