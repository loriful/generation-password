// Assignment code here
//

// function to gather and validate password length
var pwLength = function() {

  // prime loop entry
  var len = "";

  while (!Number.isInteger(parseInt(len))  || len < 8 || len > 128) {
 
    // prompt user for pw length between 8 and 128, repeat until valid input received
    len = window.prompt("Welcome to the Password Generator. Please provide password character length as a whole number between 8 and 128.");  

  } // end while

  // validate input number and range, confirm
  if (window.confirm("Your password will be " + len + " characters long. Please confirm.")) {
  }
  else {
    pwLength();
  }
  // password length input gathered and validated 
  return len;

}; // end function pwlength

// get password character types
var getCharType = function(charType) {
  
  var getType = window.confirm("Should your password include " + charType + " ?");
  
  return getType;
}; // end getCharType

// randomly choose which character type to add to password array
// var charList = function(typeOption) {
  
//   switch(typeOption) {
//     case 1:
//       return getUpper();
//       break;
//     case 2:
//       return getLower();
//       break;
//     case 3: 
//       return randomNumber(0,9);
//       break;
//     case 4:
//       return getSym();
//       break;
//     default:
//       break;
//   } // switch
    
// }; // end function charList 

// function to create password based in user criteria
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);
  console.log(value + "randomnumber");

  return value;
}; // end function randomNumber

// build password from options
var generatePassword = function() {

  var pwRulesObj = {
    length: pwLength(),
    upper: getCharType("upper case characters"),
    lower: getCharType("lower case characters"),
    num: getCharType("numbers"),
    sym: getCharType("symbols")
  }
  
  console.log(pwRulesObj);
  var charOptions = 0;
  var charArray = [];
  
  if (pwRulesObj.upper) {
    charArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    console.log(charArray);
    charOptions += 1;
  }
  if (pwRulesObj.lower) {
    charArray.push('a','b','c','d','e','f','g','h','i','j','k','l','m','p','q','r','s','t','u','v','w','x','y','z');
    console.log(charArray);
    charOptions += 1;
  }
  if (pwRulesObj.num) {
    charArray.push('0','1','2','3','4','5','6','7','8','9');
    console.log("charArray in numbers" + charArray);
    charOptions += 1;
  }
  if (pwRulesObj.sym) {
    charArray.push('!','@','#','$','%','&','*','+');
    console.log("charArray in symbols" + charArray);
    charOptions += 1;
  }
  if (charOptions === 0) {
    window.alert("You have not selected a character type.  All lower case has been selected for you.");
    var charArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','p','q','r','s','t','u','v','w','x','y','z'];
  }
  
  var pwArray = []

  for (var i = 0; i < pwRulesObj.length; i++) {
    console.log("in for loop builing array");
    console.log("charArray length " + charArray.length + "pwRulesObj.lentgh " + pwRulesObj.length);
    pwArray[i] = charArray[(randomNumber(0,charArray.length-1))];
    console.log(pwArray[i]);
  } // for

  console.log("out of for loop");
  console.log(pwArray);

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
