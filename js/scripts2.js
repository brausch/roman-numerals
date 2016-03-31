$(document).ready(function() {
  $("#roman-numeral").submit(function(event) {
    event.preventDefault();
    var input = $("#number").val();
var ones = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
var tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
var hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
var thousands = ["M", "MM", "MMM"]
var answer = []
var numeral = input
var numeralR = numeral.split("").reverse();
  answer.push(ones[numeralR[0] - 1]);
  if(numeralR.length > 1){
    answer.push(tens[numeralR[1]- 1]);
  }
  if(numeralR.length > 2){
    answer.push(hundreds[numeralR[2] - 1]);
  }
  if(numeralR.length > 3){
    answer.push(thousands[numeralR[3] - 1]);
  }
  var result = answer.reverse().join("");
  console.log(result);







    $("#result").show();

    $(".roman").append();


  });
});
