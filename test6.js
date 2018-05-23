// 6 Average of an array -------------------------

function avgArray(arr) {
  var size = arr.length
  return arr.reduce(sum, 0) / size
}

//------------------------------------------------