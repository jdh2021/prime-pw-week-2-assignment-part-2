// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to 'Dane' as a string.
// We check if the variable name is equal to Mary. If it is, we console.log 'Hi, Mary!' If it's not, we console.log 'How do you do?'
// Since the variable name is not equal to Mary, we console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make an undefined variable called secret and a variable called code that is set to 123 as a number.
// We check if the variable code is equal to 123. If it is, the variable secret is set to the value of 'super' as a string, 
// and the variable code is set to the value of itself multiplied by two.
// If the variable code is greater than 250, the variable secret is set to the value of 'duper' as a string.
// Since the variable code is equal to 123, the variable secret is set to the value of 'super' as a string, 
// and the variable code is set to the value of 246 as a number. We console.log the variable secret which outputs 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make three variables: isStudent, age and zip. isStudent is set to to the boolean value true. Age is set to 34 as a number. Zip is set to 55407 as a number.
// We first check if both the variable isStudent is true and the variable zip is greater than 80000. isStudent is true, but zip is not greater than 80000.
// We then check if the variable isStudent is false or the variable age is less than 30. isStudent is not false, and age is not less than 30.
// We then check only if the variable isStudent is true. isStudent is true so we console.log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne is set to 'red' but should be set to 'blue'. colorTwo is set to 'blue' but should be set to 'red'.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  // FIX - colorTwo should also be set to 'purple'. Should add a line: colorTwo = 'purple';
  colorOne = 'purple'; 
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX || indicates 'or'. || should be changed to && so that 'throw away the food!' is only logged when both conditions are true.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX Should be: if (age >= minAge) because we are checking if age is greater than or equal to minAge, not if minAge is less than or equal to age.
if(minAge <= age) {
  // FIX We should first console.log 'enter' since that is the output we want when the condition is true. 
  // For the else output we should console.log 'no entry'. This applies when the condition is false (age is not greater than or equal to minAge).
  console.log('no entry');
} else {
  console.log('enter');
}
*/

