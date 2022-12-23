//What is between

function between(a, b) {
    return Array(b - a + 1).fill().map((_, idx) => a + idx)
}
  