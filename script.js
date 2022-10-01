// Assignment Code
const alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 
const number = ["1","2","3","4","5","6","7","8","9"]
const specialChar = ["!","@","#","$","%","^","&","*","-", "/", ".","{","}","[","]"]
const alphaUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] 
// let passCombo;

generateBtn = document.querySelector("#generate");

// Write password to the #password input
const writePassword = () => {
  generatePassword()
  let password = passwordCriteria();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);


// Add event listener to generate button

const generatePassword = () => {
  let passwordLength = prompt("How many characters do you want your password to contain? ")
  // Conditional statement using the ternary operator to see if password length is 0, less than 8 or greater than 60 and will throw an alert and ask to put in the correct criteria or will then run the passwordCriteria function
  if(!passwordLength || passwordLength <= 7 || passwordLength >= 61) {
    alert("Password must be between 8 and 60 characters.")
    generatePassword()
  }
  else{
    return passwordLength;
  }
  
  
}


const passwordCriteria = () => {

  let passCombo;
  let confirmUpper = confirm("Do you want to have Uppercase letters?")
  let confirmLower = confirm("Do you want to have Lowercase letters?")
  let confirmNum = confirm("Do you want to have Numbers?")
  let confirmSpecChar = confirm("Do you want to have Special characters?")
  
  // checking to see if no options were chosen
  if (!confirmUpper && !confirmLower && !confirmNum && !confirmSpecChar) {
    alert("Please select at least 1 Criteria.")
  }
  // Checking to see if all options were chosen
  else if (confirmUpper && confirmLower && confirmNum && confirmSpecChar) {
    passCombo = alphaUpper.concat(alphaLower, number, specialChar)
  }
  // Checking variations of just 3 options chosen
  else if (confirmUpper && confirmLower && confirmNum) {
    passCombo = alphaUpper.concat(alphaLower, number)
  }
  else if (confirmUpper && confirmLower && confirmSpecChar) {
    passCombo = alphaUpper.concat(alphaLower, specialChar)
  }
  else if (confirmUpper && confirmNum && confirmSpecChar) {
    passCombo = alphaUpper.concat(number, specialChar)
  }
  else if (confirmLower && confirmNum && confirmSpecChar) {
    passCombo = alphaLower.concat(number, specialChar)
  }
  // Checking variations of just 2 options chosen
  else if (confirmUpper && confirmLower) {
    passCombo = alphaUpper.concat(alphaLower)
  }
  else if (confirmNum && confirmSpecChar) {
    passCombo = number.concat(specialChar)
  }
  else if (confirmUpper && confirmSpecChar) {
    passCombo = alphaUpper.concat(specialChar)
  }
  else if (confirmUpper && confirmNum) {
    passCombo = alphaUpper.concat(number)
  }
  else if (confirmLower && confirmNum) {
    passCombo = alphaLower.concat(number)
  }
  else if (confirmLower && confirmSpecChar) {
    passCombo = alphaLower.concat(specialChar)
  }
  // Checking variations of just 1 option chosen
  else if (confirmUpper) {
    passCombo = alphaUpper
  }
  else if (confirmLower) {
    passCombo = alphaLower
  }
  else if (confirmNum) {
    passCombo = number
  }
  else {
    passCombo = specialChar
  }
  return passCombo
}

const randomizePassword = () => {

  let randomPassword = []
  
  for (let i = 0; i < passwordLength; i++) {
    let newPassword = passCombo[Math.floor(Math.random() * passCombo.passwordLength())]
    randomPassword.push(newPassword)
  }
  let finalPassword = randomPassword.join()

  return finalPassword;
}




/* 
1. Ask the user to put in the amount of characters they want in their password and veryify if it meets the standards of 8 to 60 characters
 if password is 0, return an alert and if password is smaller than 8 or larger than 60 characters return an alert error else move on to step 2.

2. Ask the user if they would like to have capital letters in their password, lowercase, numbers, or special characters

3. Once have answers, make some conditional statements on whether they chose yes or no for the questions in step 2  to see if they selected all the items, none, or only some of them and then join the arrays into 1

4. 


*/