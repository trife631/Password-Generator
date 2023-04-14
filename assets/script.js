// Assignment code here
var characterLength = 8;
var choiceArray = [];
var specialCharacterArray = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','?','<','>','.'];
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArray =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numberArray = ['0','1','2','3','4','5','6','7','8','9']

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();

    // Get references to the #password input
    var passwordText = document.querySelector("#password");

    if(correctPrompts) {
        var newPassword = generatePassword();
        passwordText.value = newPassword;
    } else {
        passwordText.value = "";
    }
}  

function getPrompts() {
    choiceArray = [];
  
    // Prompt user for password length
    characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters)"));

    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("character length has to be a number 8-128 digits. try again.");
        return false
    }

    // Prompt user for password criteria
    if (confirm("would you like lowercase letters in your password?")) {
        choiceArray = choiceArray.concat(lowerCaseArray);
    }

    if (confirm("would you like uppercase letters in your password?")) {
        choiceArray = choiceArray.concat(upperCaseArray);
    }

    if (confirm("would you like special characters in your password?")) {
        choiceArray = choiceArray.concat(specialCharacterArray);
    }

    if (confirm("would you like numbers in your password?")) {
        choiceArray = choiceArray.concat(numberArray);
    }
    
    return true;
}

function generatePassword() {
    var password = "";
  
    // Generate password based on user criteria
    for(var i = 0; i < characterLength; i++) {
        var randomIndex = Math.floor(Math.random() * choiceArray.length);
        password = password + choiceArray[randomIndex];
    }
  
    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
