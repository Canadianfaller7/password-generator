// Assignment Code
const alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 
const number = ["1","2","3","4","5","6","7","8","9"]
const specialChar = ["!","@","#","$","%","^","&","*","-", "/", "."]
const alphaUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] 

 generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);


// Add event listener to generate button

const generatePassword = checkLength => {
  let passwordLength = window.prompt("How many characters do you want your password to contain? ")
  
  if (!passwordLength) {
    alert("Password must be between 8 and 60 characters.")
    generatePassword()
  }
  else if (passwordLength <= 7 || passwordLength >= 61) {
    alert("Password must be between 8 and 60 characters.")
    generatePassword()
  }
  else {
    confirm("Do you want to have Capital letters?")
  }
}
