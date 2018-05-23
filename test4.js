// 4 Vowel Count ------------------------------
function vowelCount(string){
  var vowels = ['a','e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  var count = 0
  var array = string.split("")
  for(var i = 0; i < array.length; i++) {
    if (vowels.includes(array[i])) {
      count++
    }
  } 
  console.log(count)
}

var sentence = "I'm sleepy all of the time"

vowelCount(sentence)

//---------------------------------------------