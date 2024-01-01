// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  function generatePassword(){
    var passReqs = [];
    /*prompts that go into specific array positions to manipulate password pool*/
    var passLength = window.prompt("Enter a Value between 8 to 128 for password length");
    passReqs[0] = window.prompt("Do you want to include lowercase?", "Yes or No");
    passReqs[1] = window.prompt("Do you want to include uppercase?", "Yes or No");
    passReqs[2] = window.prompt("Do you want to include numbers?", "Yes or No");
    passReqs[3] = window.prompt("Do you want to include special characters?", "Yes or No");

    /*Makes answers uppercase to be easier to work with*/
    for(var i = 0; i < passReqs.length; i++){
      passReqs[i] = passReqs[i].toUpperCase();
      console.log(passReqs[i]);
    }

    /*Yes to every requirement*/
    if(passReqs[0] === "YES" && passReqs[1] === "YES" && passReqs[2] === "YES" && passReqs[3] === "YES") {
      
   
    /*Yes to every requirement except special characters*/
    } else if(passReqs[0] === "YES" && passReqs[1] === "YES" && passReqs[2] === "YES" && passReqs[3] === "NO"){
    
    /*Yes to lower and uppercase*/
    } else if(passReqs[0] === "YES" && passReqs[1] === "YES" && passReqs[2] === "NO" && passReqs[3] === "NO"){
      
    /*Yes to just lowercase*/
    } else if(passReqs[0] === "YES" && passReqs[1] === "NO" && passReqs[2] === "NO" && passReqs[3] === "NO"){
      
    /*Window alert for failing to choose a single character type*/
    } else{
      window.alert("You must select to use at least one character type. Please try again.")
    }

    }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
