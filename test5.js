// 5 Dice -------------------------
function dice() {
  var dice1 = Math.floor(Math.random() * 6) + 1 
  var dice2 = Math.floor(Math.random() * 6) + 1
  console.log("Dice 1 is: " + dice1)
  console.log("Dice 2 is: " + dice2)
  console.log("Total dice value: " + (dice1 + dice2))
}
dice()