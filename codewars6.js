//Multiple of Index

function multipleOfIndex(array) {
    // creating a result array where we'll save the needed elements
    let res = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % i === 0) {
        res.push(array[i]);
      }
    }
  
    return res;
}