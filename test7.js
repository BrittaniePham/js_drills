// 7 Fizzbuzz ---------------------------------

function fizzBuzz() {
  var arr = [...Array(100)].map( function(_, i) {
    return i + 1
  })

  return arr.map( function(n) {
    if (n % 15 === 0)
      return 'FizzBuzz'
    else if (n % 3 === 0)
      return 'Fizz'
    else if (n % 5 === 0)
      return 'Buzz'
    else 
      return n
  })
}

//---------------------------------------------