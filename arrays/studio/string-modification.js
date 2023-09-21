const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(0,3);
let phrase = str.slice(3) + newStr;
console.log(`Original String: ${str} Modified String:${phrase}`);

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let userAns = input.question("Enter number of letters to be relocated:");
newStr = str.slice(userAns) + str.slice(0, userAns);
console.log(newStr);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
userAns = Number(userAns);
if (isNaN(userAns) || userAns > str.length || userAns < 0) {
    console.log("Invalid input!");
    userAns = 3;
  }
