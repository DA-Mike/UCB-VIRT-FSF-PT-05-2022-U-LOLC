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
  
  //Input validation function
  function choiceValidation(choiceInput) {
    choiceInput = choiceInput.toUpperCase();
    if ((choiceInput !== "Y") && (choiceInput !== "N")) {
      window.alert("Please only type Y or N when selecting characters for your password.");
      selectParams();
    }
    return;
  }
  
  //Input prompts with calls to validation function
  lengthChoice = window.prompt("Choose length of password (8-128)");
  if (lengthChoice < 8 || lengthChoice > 128) {
    window.alert("Incorrect value for password length, please choose a value between 8 and 128");
    selectParams();
  }
  charChoiceLower = window.prompt("Would you like to include lowercase letters? (Y/N)");
  choiceValidation(charChoiceLower);
  charChoiceUpper = window.prompt("Would you like to include uppercase letters? (Y/N)");
  choiceValidation(charChoiceUpper)
  charChoiceNum = window.prompt("Would you like to include numbers? (Y/N)");
  choiceValidation(charChoiceNum);
  charChoiceSpec = window.prompt("Would you like to include special characters? (Y/N)");
  choiceValidation(charChoiceSpec);
  
  //Validates that there is at least one parameter set by user
  if ((charChoiceLower.toUpperCase() === "N") && (charChoiceUpper.toUpperCase() === "N") && (charChoiceNum.toUpperCase() === "N") && 
  (charChoiceSpec.toUpperCase() === "N")) {
    window.alert("Please enter 'Y' for at least one password parameter.");
    selectParams();
  } else {
    window.alert("All password parameters successfully selected!");
  }

  return;
}

selectParams();

//Generates password
function generatePassword() {
  var pwArr = [];
  var pwString = "";
  //Checks user input and adds parameter selection to pwARR
  //Lowercase parameter
  charChoiceLower = charChoiceLower.toUpperCase();
  if (charChoiceLower == "Y"){
    pwArr = pwArr.concat(alphaArr);
  } 
  //Uppercase parameter
  charChoiceUpper = charChoiceUpper.toUpperCase();
  if (charChoiceUpper == "Y") {
    var upperArr = alphaArr.map(element => {
      return element.toUpperCase();
    });
    pwArr = pwArr.concat(upperArr);
  }
  //Number parameter 
  charChoiceNum = charChoiceNum.toUpperCase();
  if (charChoiceNum == "Y") {
    pwArr = pwArr.concat(intArr);
  }
  //Special character parameter
  charChoiceSpec = charChoiceSpec.toUpperCase();
  if (charChoiceSpec == "Y") {
    pwArr = pwArr.concat(spArr);
  }
  //After the parameter array is created, we generate the password
  for (i = 0; i < lengthChoice; i++) {
    pwString = pwString.concat(pwArr[Math.floor(Math.random() * pwArr.length)]);
  }
  //Function validates that password meets parameter requirements
  function validatePW(arr, pwstr) {
    var n = 0;
    for (x = 0; x < pwstr.length; x++) {
      for (y = 0; y < arr.length; y++){
        if (pwstr[x] == arr[y]) {
          n++;
        }
      }
    }
    if (n === 0) {
      pwstr = pwstr.slice(0, pwstr.length - 1);
      pwstr = arr[Math.floor(Math.random() * arr.length)] + pwstr;
    }
    pwString = pwstr;
    return pwString;
  }
  //Calls password validation function
  var charArr = [alphaArr, upperArr, intArr, spArr];
  for (i = 0; i < charArr.length; i++){
    validatePW(charArr[i], pwString);
  }
  return pwString;
}

//Writes password to DOM
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
