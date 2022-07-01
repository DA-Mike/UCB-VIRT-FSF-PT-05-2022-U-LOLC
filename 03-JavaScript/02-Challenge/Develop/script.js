// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphaArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var intArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var spArr = ['"', "!", "#", "$", "%", "&", "'", "(", ")", "*", 
"+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\"", "]", "^", 
"_", "`", "{", "|", "}", "~"];
var lengthChoice = "";
var charChoiceLower = "";
var charChoiceUpper = "";
var charChoiceNum = "";
var charChoiceSpec = "";

// Write password to the #password input
function selectParams() {
  lengthChoice = window.prompt("Choose length of password (8-128)");
  if (lengthChoice < 8 || lengthChoice > 128) {
    window.alert("Incorrect value for password length, please choose a value between 8 and 128");
    selectParams();
  }
  console.log(lengthChoice);
  charChoiceLower = window.prompt("Would you like to include lowercase letters? (Y/N)");
  if ((charChoiceLower !== "Y") && (charChoiceLower !== "N")) {
    window.alert("Please only type Y or N when selecting characters for your password.");
    selectParams();
  }
  console.log(charChoiceLower);
  charChoiceUpper = window.prompt("Would you like to include uppercase letters? (Y/N)");
  if ((charChoiceUpper !== "Y") && (charChoiceUpper !== "N")) {
    window.alert("Please only type Y or N when selecting characters for your password.");
    selectParams();
  }  
  console.log(charChoiceUpper);
  charChoiceNum = window.prompt("Would you like to include numbers? (Y/N)");
  if ((charChoiceNum !== "Y") && (charChoiceNum !== "N")) {
    window.alert("Please only type Y or N when selecting characters for your password.");
    selectParams();
  }
  console.log(charChoiceNum);
  charChoiceSpec = window.prompt("Would you like to include special characters? (Y/N)");
  if ((charChoiceSpec !== "Y") && (charChoiceSpec !== "N")) {
    window.alert("Please only type Y or N when selecting characters for your password.");
    selectParams();
  } 
  console.log(charChoiceSpec);
  
  if (charChoiceLower === "N" && charChoiceUpper === "N" && charChoiceNum === "N" && 
  charChoiceSpec === "N") {
    window.alert("Please enter 'Y' for at least one password parameter.");
    selectParams();
  } else {
    window.alert("All password parameters successfully selected!");
  }


  // if (lengthChoice < 8 || lengthChoice > 128) {
  //   window.alert("Incorrect value for password length, please choose a value between 8 and 128");
  // } else if ((charChoiceLower) !== ("Y" || "N")) {
  //   window.alert("Please only type Y or N when selecting characters for your password.");
  //   selectParams();
  // } else {
  //   window.alert("Password parameters successfully selected!");
  // }
  return;
}

selectParams();

function generatePassword() {
  var pwArr = [];
  var pwString = "";
    console.log(charChoiceLower + charChoiceUpper + charChoiceNum + charChoiceSpec);
  if (charChoiceLower == "Y"){
    pwArr = pwArr.concat(alphaArr);
    console.log("pwArr: " + pwArr);
  } 
  
  if (charChoiceUpper == "Y") {
    var upperArr = alphaArr.map(element => {
      return element.toUpperCase();
    });
    console.log(upperArr);
    pwArr = pwArr.concat(upperArr);
  } 
  
  if (charChoiceNum == "Y") {
    pwArr = pwArr.concat(intArr);
  }
  
  if (charChoiceSpec == "Y") {
    pwArr = pwArr.concat(spArr);
  }

  console.log("pwArr: " + pwArr);
  
  
  for (i = 0; i <= lengthChoice; i++) {
    pwString = pwString.concat(pwArr[Math.floor(Math.random() * pwArr.length)]);
  }
  
  console.log("pwString: " + pwString);
  return pwString;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
