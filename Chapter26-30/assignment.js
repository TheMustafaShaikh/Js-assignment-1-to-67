//1
// var user = prompt("Enter the positive number: ");
// user = parseFloat(user);
// if (user > 0) {
//     alert("Number: " + user + "\nround off: " + Math.round(user) + "\nFloor value: " + Math.floor(user) + "\nceil number: " + Math.ceil(user));
// } else {
//     alert("please enter positive number");
// }

//2
// var user = prompt("enter the negative number: ");
// user = parseFloat(user);
// if (user < 0) {
//     alert("Number: " + user + "\nround off: " + Math.round(user) + "\nFloor value: " + Math.floor(user) + "\nceil number: " + Math.ceil(user));
// } else {
//     alert("please enter negative number");
// }

//3
// var number = -4;
// alert(Math.abs(number));

//4
// var diceNumber = Math.floor(Math.random() * 6) + 1;
// alert("Dice value is: " + diceNumber);

//5
// var diceNumber = Math.floor(Math.random() * 2) + 1;
// if (diceNumber == 1) {
//     alert("Heads is the call.");
// } else {
//     alert("Tails is the call.");
// }

//6
// var randomNumber = Math.floor(Math.random() * 100) + 1;
// alert("Random number from 1 to 100: " + randomNumber);

//7
// var string = prompt("Enter your weight in kilograms");
// var breakString = string.split("k");
// var gotWeight = parseFloat(breakString[0]);
// alert("The weight of user is " + gotWeight + " kilograms");

//8
// var randomGenerated = Math.floor(Math.random() * 10) + 1;
// var userGuessed = prompt("Enter the number from 1 to 10.");
// if (randomGenerated == parseInt(userGuessed)) {
//     alert("Congratulations you guess right!");
// } else {
//     alert("Please, try again!");
// }