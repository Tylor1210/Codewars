function nbYear(p0, percent, aug, p) {
    let years = 0
    for (let years = 0; p0 < p; years++){
       p0 += p0 * (percent / 100) + aug;
    }
  return years
}

function nbYear(p0, percent, aug, p, years = 0) {
  return p0 >= p
    ? years
    : nbYear(
        Math.floor(p0 + p0 * (percent / 100)) + aug,
        percent,
        aug,
        p,
        years + 1
      );
}

// P0 === STARTING POP WHICH IS 1000 | percent ===.002 |
// loop through for each years total population 
// 1000 += 1000 * (percent (.02) gained and added to pop + aug or 50 )
// return the year