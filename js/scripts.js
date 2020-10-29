// Business Logic
const romanNumeral = function(num) {//we want this function to run until there's no remainders
  let remainder = num;
  let numerals = "";
  while (remainder > 0) {
    if (remainder >= 1000) {
      remainder -= 1000;
      numerals += "M";
    } else if (remainder >= 900) {
      remainder -= 900;
      numerals += "CM";
    } else if (remainder >= 500) {
      remainder -= 500;
      numerals += "D";
    } else if (remainder >= 400) {
      remainder -= 400;
      numerals += "CD";
    } else if (remainder >= 100) {
      remainder -= 100;
      numerals += "C";
    } else if (remainder >= 90) {
      remainder -= 90;
      numerals += "XC";
    } else if (remainder >= 50) {
      remainder -= 50;
      numerals += "L";
    } else if (remainder >= 40) {
      remainder -= 40;
      numerals += "XL";
    } else if (remainder >= 10) {
      remainder -= 10;
      numerals += "X";
    } else if (remainder >= 9) {
      remainder -= 9;
      numerals += "IX";
    } else if (remainder >= 5) {
      remainder -= 5;
      numerals += "V";
    } else if (remainder >= 4) {
      remainder -= 4;
      numerals += "IV";
    } else if (remainder >= 1) {
      remainder -= 1;
      numerals += "I";
    }
  }
  return numerals;
}

// User Logic
$(document).ready(function() { //when the document is ready it's going to call the function
  $("#romanTranslate").submit(function(event) { //the submit is a "listener" and the actual function is what's below within this bracket
    event.preventDefault();
    
    const numbers = parseInt($("input[name=original]").val()); //we're converting a string into actual numbers even if it is a number to begin with

    if (numbers < 1 || numbers > 3999){ //makes sure that if user inputs a number less than 1 or higher than 3999 it will alert with an error
      alert ("Error Number must be between 1-3999");
      cancelFormSubimission(); //if you put in an error it won't still continue to put it in
    } //this is a callback function

    const romanLetters = romanNumeral(numbers);

    $("#number").append("<li>" + numbers + "</li>");
    $("#roman").append("<li>" + romanLetters + "</li>");

  });
});