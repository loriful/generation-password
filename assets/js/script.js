// Assignment code here

/* **************************************************************************************** */
// function to gather and validate password length
var pwLength = function() {

  // prime loop entry
  var len = "";
  
  // get password length, check for integer, iterate until valid input
  while (Number.isNaN(len - parseInt(len)) || len < 8 || len > 128) {
  
    // prompt user for pw length between 8 and 128, bash away until valid input received
    len = window.prompt("Welcome to the Password Generator. Please provide password character length as a whole number between 8 and 128.");  

  } // end while

  // validate input number and range, confirm
  if (window.confirm("Your password will be " + len + " characters long. Please confirm.")) {
  }
  else {
    // repeat until valid number recieved
    pwLength();
  }
  // password length input gathered and validated 
  return len;

}; // end function pwlength

/* **************************************************************************************** */
// get password character types, input a string for promt, return boolean for user preferance
var getCharType = function(charType) {
  
  var getType = window.confirm("Should your password include " + charType + " ?");
  
  return getType;
}; // end getCharType

/* **************************************************************************************** */
// generate random numbers
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
}; // end function randomNumber

/* **************************************************************************************** */
// build password from options
var generatePassword = function() {

  var pwRulesObj = {
    length: pwLength(),
    upper: getCharType("upper case characters"),
    lower: getCharType("lower case characters"),
    num: getCharType("numbers"),
    sym: getCharType("symbols")
  }

  // store potential character types for random selection
  var charArray = [];
  // prove valid selection
  var charOptions = 0;
  // the randomized characters
  var pwArray = [];

  // build an array of requested character types based on response
  if (pwRulesObj.upper) {
      charArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
      charOptions += 1;
  }
  if (pwRulesObj.lower) {
      charArray.push('a','b','c','d','e','f','g','h','i','j','k','l','m','p','q','r','s','t','u','v','w','x','y','z');
      charOptions += 1;
  }
  if (pwRulesObj.num) {
      charArray.push('0','1','2','3','4','5','6','7','8','9');
      charOptions += 1;
  }
  if (pwRulesObj.sym) {
    charArray.push('!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~');  
    charOptions += 1;
  }
  if (charOptions === 0) {  // No selections made, force entry
    window.alert("You have not selected a character type.  All lower case has been selected for you.");
    var charArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','p','q','r','s','t','u','v','w','x','y','z'];
  }
    
  // build a randomized password from allowed rules
  for (var i = 0; i < pwRulesObj.length; i++) {
    pwArray[i] = charArray[(randomNumber(0,charArray.length-1))];
  } 

  // send back a clean password string
  return pwArray.join("");

}; // end function generatePassword

// *****************Class provided code below********** //

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}  // end function writePassword

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
