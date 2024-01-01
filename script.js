// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  function generatePassword(){
    var passChars = [];
    var passReqs = [];
    var passTest = [];


    //prompts that go into specific array positions to manipulate password pool
    var passAmt = window.prompt("Enter a Value between 8 to 128 for password length");
    passReqs[0] = window.prompt("Do you want to include lowercase?", "Yes or No");
    passReqs[1] = window.prompt("Do you want to include uppercase?", "Yes or No");
    passReqs[2] = window.prompt("Do you want to include numbers?", "Yes or No");
    passReqs[3] = window.prompt("Do you want to include special characters?", "Yes or No");

    //Makes answers uppercase to be easier to work with
    for(var i = 0; i < passReqs.length; i++){
      passReqs[i] = passReqs[i].toUpperCase();
    }
    //adds lowercase if selected
    if(passReqs[0] === "YES"){
      passChars.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
    }
    //adds uppercase if selected
    if(passReqs[1] === "YES"){
      passChars.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
    }
    //adds numbers if selected
    if(passReqs[2] === "YES"){
      passChars.push("0","1","2","3","4","5","6","7","8","9");
    }
    //adds special characters if selected
    if(passReqs[3] === "YES"){
      passChars.push("!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~");
    } 
    //tells user they must select one character requirement if they answer no to all
    if(passReqs[0] === "NO" && passReqs[1] === "NO" && passReqs[2] === "NO" && passReqs[3] === "NO" ){
      window.alert("You must select to use at least one character type. Please try again.")
    }

    //generates random values and assigns the random value to a character in the selected character base
    for(var i = 0; i < passAmt; i++){
        var index = Math.floor(Math.random() * passChars.length);
        passTest[i] = passChars[index];
    }
    //concatinates the password from a string
    password = passTest.join("");
    return password;
    
  }
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);