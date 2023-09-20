const input = require('readline-sync');
let word = input.question("Please enter a word: ")
let numsToSlice = Number(input.question("Please enter a number of characters to slice (minium 3): "))

let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let firstThree = "";
//str.slice(0,3);
let theRemaining = "";
//str.slice(3);
let finalStr2 = "";
//(theRemaining + firstThree);
 

//Use a template literal to print the original and modified string in a descriptive phrase.//
//console.log(` Your string ${word} has been converted to ${finalStr2} `);

//console.log(str + " is the string in proper order. " + finalStr + " shows the orginial string with letters rearranged.")//


//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
 

if (word.length < 4) {
    console.log(`Your word ${word} is too short, so we have changed it to LaunchCode.`); 
    word = "LaunchCode";
}

if (numsToSlice < 3 || numsToSlice > word.length) {
    console.log(`The number of letters you want to slice off your word will not go smoothly, so we are changing it to 3. `) ;
    numsToSlice = 3; 
}
// 
firstThree = str.slice(0, numsToSlice );
theRemaining = str.slice(numsToSlice);
finalStr2 = theRemaining + firstThree;  

console.log(`Your string ${word} has been converted to ${finalStr2}.`);


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
