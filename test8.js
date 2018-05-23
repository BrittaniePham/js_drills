// 8 Factorial --------------------------------

function iFact(num) {
  var val = 1
  for (var i = 2; i <= num; i++)
    val *= i
  return val
}

function rFact(num) {
  if (num === 0)
    return 1
  else 
    return num * rFact(num - 1)
}

//---------------------------------------------