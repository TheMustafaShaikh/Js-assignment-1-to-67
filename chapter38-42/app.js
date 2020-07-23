//q1

// function power(a, b) {
//     var result = 1;
//     for (var i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }

// console.log(power(2, 4));


//q2

// var getInput = prompt("Enter the year: ");
// if (parseInt(getInput) % 4 == 0) {
//     document.write("This is leap year!");
// } else {
//     document.write("Not an Leap year!")


//q3

// var a = 20,
//     b = 20,
//     c = 30;

// function caluclateS() {
//     return ((a + b + c) / 2);
// }

// var s = caluclateS();

// function area(s) {
//     return (s * (s - a) * (s - b) * (s - c))
// }
// var Area = area(s);
// console.log(Area);

//q4
// var english = 80;
// var maths = 50;
// var science = 70;

// function average(sub1, sub2, sub3) {
//     return ((sub1 + sub2 + sub3) / 3);
// }

// function percentage(sub1, sub2, sub3) {
//     var total = sub1 + sub2 + sub3;
//     return ((total / 300) * 100);
// }

// function mainFunction(sub1, sub2, sub3) {
//     console.log("average : ", average(sub1, sub2, sub3));
//     console.log("Percentage: ", percentage(sub1, sub2, sub3));
// }

// mainFunction(english, maths, science);

//q5
//this is for full string.
// var array = ["apple", "banana", "orange"];

// function getIndex(params) {
//     for (var i = 0; i < params.length; i++) {
//         if (params == array[i]) {
//             return i;
//             break;
//         }
//     }
// }

// console.log(getIndex("apple"));

//q6
//mustafa  = mstf

// function removeVowels(params) {
//     var result = "";
//     for (var i = 0; i < params.length; i++) {
//         if (params[i] == 'a' || params[i] == 'A') {
//             continue;
//         } else if (params[i] == 'e' || params[i] == 'E') {
//             continue;
//         } else if (params[i] == 'I' || params[i] == 'i') {
//             continue;
//         } else if (params[i] == 'o' || params[i] == 'O') {
//             continue;
//         } else if (params[i] == 'u' || params[i] == 'U') {
//             continue;
//         } else {
//             result += params[i];
//         }
//     }
//     return result;
// }

// console.log(removeVowels("mustafa"))


//q7

// var string = "Pleases read this application and give me gratuity";

// function isVowel(params1, params2) {
//     if ((params1 == 'a' || params1 == 'A' || params1 == 'e' || params1 == 'e' || params1 == 'i' || params1 == 'I' || params1 == 'o' || params1 == 'O') && (params2 == 'a' || params2 == 'A' || params2 == 'e' || params2 == 'e' || params2 == 'i' || params2 == 'I' || params2 == 'o' || params2 == 'O')) {
//         return true;
//     } else {
//         return false;

//     }

// }

// function getTwoVowels(string) {
//     for (var i = 0; i < string.length - 1; i++) {
//         let check = isVowel(string[i], string[i + 1]);
//         switch (check) {
//             case true:
//                 console.log(string[i], string[i + 1])
//                 break;
//             case false:
//                 break;
//         }
//     }
// }

// getTwoVowels(string);


//q8
// var inputDistance = prompt("Enret the distance in km: ");
// inputDistance = (+inputDistance);

// function toMeter(params) {
//     return params * 1000;
// }

// function toFeets(params) {
//     return params * 3280.84;
// }

// function toInches(params) {
//     return params * 39370.08;
// }

// function toCentimeter(params) {
//     return params * 100000;
// }

// console.log(toMeter(inputDistance));

//q9
// var getHoursOfWorking = prompt("Enter the working hours: ");
// getHoursOfWorking = (+getHoursOfWorking);
// var getOverTime = getHoursOfWorking - 40;

// function overTime(overTimeHours) {
//     return overTimeHours * 12;
// }


// //q10
// var getInput = +prompt("Enter the amount to withdraw!!");

// var tens = getInput % 100;
// var dv = getInput / 10;
// var hundred = Math.floor(dv / 10);
// var noteFifty = 0;
// var noteTens = 0;

// if (tens >= 50) {
//     noteFifty += 1;
//     noteTens = tens - 50;
// } else {
//     noteTens = tens / 10;
// }


// document.write(`${hundred} hundred notes, ${noteFifty} fifty notes, ${noteTens} ten notes`);