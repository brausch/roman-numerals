var numbers = [1000, 500, 100, 50, 10, 5, 1]
var letters = ["M", "D", "C", "L", "X", "V", "I"]
var lettersOutput = []
var romanNumerals = function(numeral){
  var numeral2 = numeral

for (var index = 0; index < numbers.length; index ++) {
 for(var i = 0, numeral2; (0 <= (numeral2 - numbers[index])) && (i < 4); i++, numeral2 -= numbers[index]){
   if(i === 3){
     numeral2 += (4*numbers[index]);
     lettersOutput.pop();
     lettersOutput.pop();
     lettersOutput.pop();
    }
     else {
    lettersOutput.push(letters[index]);
  }
  }
  }
  console.log(numbers)

  for (var number1 = 0; number1 < numbers.length; number1 ++) {
    var number2 = 0
    numbers.forEach(function(number2){
      if(0 < (numbers[number1] - number2)){
        console.log(numbers[number1])
        console.log(number2)
        console.log(numbers[number1] - number2);
        if((numbers[number1] - number2) === numeral2)
        {
          lettersOutput.push(letters[numbers.indexOf(number2)] + letters[number1]);
        }
    }
    });
    }
    }



$(document).ready(function() {
  $("#roman-numeral").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#number").val());
    var result = romanNumerals(input);


    $("#result").show();

    $(".roman").append(lettersOutput);


  });
});
