// 1 Sum two numbers --------------------------
function sum(num1, num2) {
  return num1 + num2
}

console.log(sum(2, 5))

// 2 Sum an array -----------------------------

var arr = [4, 7, 1, 3]
var sum2 = 0
function sumArray(arr){
  arr.forEach(function(num) {
    sum2 += num
  })
  console.log(sum2)
}

sumArray(arr)

// 3 Fahrenheit to Celcius --------------------