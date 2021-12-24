// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowLetters = "abcdefghijklmnopqrstuvwxyz";
var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "1234567890";
var specials = "!\"#$%&'()*+,-./:;<=>?@[\\^_{|}~`"
var passwordArray = [];
var elements = [];
var passLength;
var upperCase;
var lowerCase;
var numbers;
var specialChar;

function criteria() {
  while (!(passLength >= 8) && !(passLength >= 128)) {
    passLength = window.prompt("How long do you want your password (8-128 characters)?");
    if (passLength < 8 || passLength > 128) {
      window.alert("Sorry, you did not choose a length between 8 to 128 characters.\nPlease try again.")
    }
  }

  while (!upperCase && !lowerCase && !numbers && !specialChar) {
     upperCase = window.confirm("Do you want to include uppercase letters?");

     lowerCase = window.confirm("Do you want to include lowercase letters?");

     numbers = window.confirm("Do you want to include numbers?");

     specialChar = window.confirm("Do you want to include special characters?");
    if (!upperCase && !lowerCase && !numbers && !specialChar) {
      window.alert("Please select at least 1 (uppercase, lowercase, numbers, or special characters.");
    }
  }
}

function generatePassword() {
  if (upperCase) {
    let u = upLetters.split("");
    passwordArray = passwordArray.concat(u);
  }
  if (lowerCase) {
    let l = lowLetters.split("");
    passwordArray = passwordArray.concat(l);
  }
  if (numbers) {
    let n = nums.split("");
    passwordArray = passwordArray.concat(n);
  }
  if (specialChar) {
    let s = specials.split("");
    passwordArray = passwordArray.concat(s);
  }

  for (let i = 0; i < passLength; i++) {
    elements[i] = passwordArray[Math.floor(Math.random() * passwordArray.length)]
  }
  var passwordString = elements.join("");

  return passwordString;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

criteria();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
