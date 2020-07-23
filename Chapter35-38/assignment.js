//1
// function currentTime() {
//     var date = new Date()
//     document.write(date)
// }
// currentTime();


//2
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter the last name: ");

// function combine(firstName, lastName) {
//     alert("Hello, " + firstName + " " + lastName);
// }
// combine(firstName, lastName);

//3
// function Add(num1, num2) {
//     return num1 + num2;
// }

// var num1 = prompt("Enter number 1: ");
// var num2 = prompt("Enter the number 2: ");
// alert("Sum " + Add(parseInt(num1), parseInt(num2)));

//4
// function calculator(num1, num2, opertor) {
//     if (opertor == "+") {
//         return num1 + num2;
//     } else if (operator == "-") {
//         return num1 - num2;
//     } else if (operator == "/") {
//         return num1 / num2;
//     } else if (operator == "*") {
//         return num1 * num2;
//     }
// }
// var num1 = prompt("Enter number 1: ");
// var num2 = prompt("Enter the number 2: ");
// var operator = prompt("Enter the operator: ");
// alert("Sum " + calculator(parseInt(num1), parseInt(num2), operator));


//5
// function square(number) {
//     return number * number;
// }

// alert(square(10));'

//6
// function factorial(number) {
//     var num = number;
//     var fact = 1;
//     while (num != 1) {
//         fact *= num;
//         num--;
//     }
//     return fact;
// }

// alert(factorial(5));

//7
// function count(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br/>");
//     }
// }

// var start = prompt("Enter the starting number: ");
// var end = prompt("Enter the ending number: ");
// count(parseInt(start), parseInt(end));


//8



// function calHypotenuse(num1, num2) {
//     function square(number) {
//         return number * number;
//     }
//     var hypto;
//     var base = square(num1);
//     var perp = square(num2);

//     hypto = base + perp;
//     alert("Hypotenuse: " + hypto)

// }

// calHypotenuse(10, 20);

//9
// function areaOfRectangle(num1, num2) {
//     return num1 * num2;
// }
// var width = 10;
// var height = 10;

// alert(areaOfRectangle(width, height));
// alert(areaOfRectangle(10, 10));

//10

// var string = "madam";
// var reverse = "";
// var j = 0;

// function palindrome(string, reverse) {
//     for (var i = string.length - 1; i >= 0; i--) {
//         reverse += string[i];
//     }

//     if (reverse == string) {
//         alert("Yes, it is palindrome.");
//     } else {
//         alert("No, its not palindrome");
//     }
// }
// palindrome(string, reverse);


//11
// var string = "the quick brown fox";

// function firstLetterCap(string) {
//     var breakString = string.split(" ");
//     var result = breakString;

//     for (var i = 0; i < breakString.length; i++) {
//         breakString[i] = breakString[i][0].toUpperCase() + breakString[i].slice(1);
//     }

//     return breakString.join(" ")
// }

// var result = firstLetterCap(string);
// document.write(result);

//12

// var string = "Web Development Tutorial";

// function maxLength(string) {
//     var split = string.split(" ");
//     var lengths = [];
//     for (var i = 0; i < split.length; i++) {
//         lengths.push(split[i].length);
//     }

//     max = lengths[0];

//     for (var i = 0; i < lengths.length; i++) {
//         if (lengths[i] > max) {
//             max = lengths[i];
//         }
//     }



//     for (var i = 0; i < split.length; i++) {
//         if (max == split[i].length) {
//             return split[i];
//         }
//     }


// }
// var max = maxLength(string)
// document.write(max);


//13
// var string = "JSResourceS.com";
// var char = "o"

// function repeatedChar(string, char) {
//     var count = 0;
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] == char) {
//             count++;
//         }
//     }
//     return count;

// }
// document.write("This " + char + " is occurred " + repeatedChar(string, char) + " times")

//14

function calcCircumference(radius) {
    return 2 * 3.141 * radius;
}

function calcArea(radius) {
    return 3.141 * (radius * radius);
}

document.write("Circumference: " + calcCircumference(2) + "<br/>Area: " + calcArea(2))