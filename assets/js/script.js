// Assignment code here

var getRules = function() {
  // Prompt the user for password rules within limits
  

} // end function getRules

// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
}; // end function randomNumber


var generatePassword = function() {
  var PW = "this is me";
  return PW;
}; // end function generatePassword

var pwCriteria = function() {
  length: window.prompt("Welcome to the Password Generator.  Please provide password character length as a whole number between 8 and 128.");
  window.prompt("You have chosen " + length + " as your password length. Please confirm.")
}

pwCriteria();
// *****************Class provided code below***************************// 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
