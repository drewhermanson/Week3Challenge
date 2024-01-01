// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  function generatePassword(){
    var passChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var passReqs = [];
    var passTest = [];


    /*prompts that go into specific array positions to manipulate password pool*/
    var passAmt = window.prompt("Enter a Value between 8 to 128 for password length");
    passReqs[0] = window.prompt("Do you want to include lowercase?", "Yes or No");
    passReqs[1] = window.prompt("Do you want to include uppercase?", "Yes or No");
    passReqs[2] = window.prompt("Do you want to include numbers?", "Yes or No");
    passReqs[3] = window.prompt("Do you want to include special characters?", "Yes or No");

    /*Makes answers uppercase to be easier to work with*/
    for(var i = 0; i < passReqs.length; i++){
      passReqs[i] = passReqs[i].toUpperCase();
    }

    /*Yes to every requirement*/
    if(passReqs[0] === "YES" && passReqs[1] === "YES" && passReqs[2] === "YES" && passReqs[3] === "YES") {
      passChars.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~");
      for(var i = 0; i < passAmt; i++){
        var index = Math.floor(Math.random() * passChars.length);
        passTest[i] = passChars[index];
        console.log(passTest[i]);
      }
    /*Yes to every requirement except special characters*/
    } else if(passReqs[0] === "YES" && passReqs[1] === "YES" && passReqs[2] === "YES" && passReqs[3] === "NO"){
      passChars.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9");
      for(var i = 0; i < passAmt; i++){
        var index = Math.floor(Math.random() * passChars.length);
        passTest[i] = passChars[index];
        console.log(passTest[i]);
      }
    /*Yes to lower and uppercase*/
    } else if(passReqs[0] === "YES" && passReqs[1] === "YES" && passReqs[2] === "NO" && passReqs[3] === "NO"){
      passChars.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
      for(var i = 0; i < passAmt; i++){
        var index = Math.floor(Math.random() * passChars.length);
        passTest[i] = passChars[index];
        console.log(passTest[i]);
      }
    /*Yes to just lowercase*/
    } else if(passReqs[0] === "YES" && passReqs[1] === "NO" && passReqs[2] === "NO" && passReqs[3] === "NO"){
      for(var i = 0; i < passAmt; i++){
        var index = Math.floor(Math.random() * passChars.length);
        passTest[i] = passChars[index];
        console.log(passTest[i]);
      }
    /*Window alert for failing to choose a single character type*/
    } else{
      window.alert("You must select to use at least one character type. Please try again.")
    }

    }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
