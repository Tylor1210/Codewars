//are you playing banjo

function areYouPlayingBanjo(name) {
    let firstChar = name.charAt(0)
    if (firstChar === "R"){
      return name + " plays banjo"
      }else if (firstChar === "r"){
        return name + " plays banjo"
      }else{
        return name + " does not play banjo"
      }
}