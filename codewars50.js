String.prototype.capitalize = function() {
    let code = this.charCodeAt(0)
    if (code > 96 && code < 123) {
      code -= 32
    }
    //returns string created from specified sequence of UTF-16 codes and adds back the rest
    return String.fromCharCode(code) + this.slice(1)
  }
