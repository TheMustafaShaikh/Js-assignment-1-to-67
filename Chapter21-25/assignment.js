// //1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name: ");

// fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + ".")

//2
// var favMobile = prompt("Enter your favourite mobile phone: ")

// document.write("My favourite phone is: " + favMobile + "<br/>Length of string: " + favMobile.length)


//3
// var string = prompt("Enter the string:")
// document.write("String: " + string + "<br/>Index of 'n': " + string.indexOf("n"))


//4
// var string = prompt("Enter the string: ")
// document.write("String: " + string + "<br/>Last in lndex of 'l': " + string.lastIndexOf("l"))

//5
// var string = prompt("Enter the string: ")
// document.write("String: " + string + "<br/>Character at index 3: " + string.charAt(3))

//6
// var firstName = prompt("Enter the first name")
// var lastName = prompt("Enter the last name")
// var fullName = firstName.concat(lastName)
// alert(fullName)

//7
// var cityName = prompt("Enter the city name: ")
// cityName = "Islam" + cityName.slice(5)
// alert(cityName)

//8
// var message = "Ali and Sami are best friends. They play cricket and football together ";
// var remainString = message.slice(0, message.indexOf(".")).replace("and", "&") + message.slice(message.indexOf(".")).replace("and", "&")
// alert(remainString)

//9
// var string = prompt("Enter the number: ")
// document.write("Value: " + string + "<br/>Type: " + typeof(string) + "<br/> Value: " + parseInt(string) + "<br/>Type: " + typeof(parseInt(string)))

//10
// var lower = prompt("Enter the string: ")
// alert(lower.toUpperCase())

//11
// var string = prompt("Enter the string ")
// string = string.slice(0, 1).toUpperCase() + string.slice(1)
// alert(string)

//12
// var number = 35.36;
// var ToString = number.toString();
// var noDot = ToString.slice(0, ToString.indexOf(".")) + ToString.slice(ToString.indexOf(".") + 1)
// alert(noDot)

//13
// var userName = prompt("Enter username: ")
// if (userName.indexOf("!") != -1 || userName.indexOf("@") != -1 || userName.indexOf(".") != -1 || userName.indexOf(",") != -1) {
//     for (var i = 0; i < userName.length; i++) {
//         if (userName[i] == "!" || userName[i] == "@" || userName[i] == "." || userName[i] == ",") {
//             alert(userName[i] + " acsii code is : " + userName.charCodeAt(i))
//         }
//     }

// } else {
//     alert("Username is fine!")
// }

//14
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("WELCOME TO ABC BAKERS, what do you want order sir/ma'am?");
// var availableStatus = null;
// for (var i = 0; i < a.length; i++) {
//     if (a[i] == userInput) {
//         availableStatus = i;
//         break;
//     }
// }

// if (availableStatus != null) {
//     alert(userInput + " is available at index " + availableStatus + " in our bakery.")
// } else {
//     alert("we are sorry, " + userInput + " is not available in our bakery.")
// }

//15

// var password = prompt("Enter the password: ");
// var status = 0;
// if (password.length >= 6) {
//     for (var i = 0; i < password.length; i++) {
//         if (i == 0) {
//             if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
//                 alert("password can not be begin with a number")
//                 break
//             }
//         }

//         if ((password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)) {
//             status = 1;
//         } else {
//             alert("Doesn't match the requirements!")
//             status = 0;
//             break
//         }


//     }
// } else {
//     alert("password size is small.");
// }

// if (status == 1) {
//     alert("All thing is fine!");
// } else {
//     alert("doesn't meet the requirement.")
// }

//16

// var university = "University of Karachi";
// for (var i = 0; i < university.length; i++) {
//     document.write(university[i] + "<br/>");
// }

//17
// var inputUser = prompt("Enter the any string ");
// alert("user string: " + inputUser + "\nLast character of input: " + inputUser[inputUser.length - 1])


//18
var string = "The quick brown fox jumps over the lazy dog";
string = string.toLowerCase();
var wordsCount = 0;
var splitString = string.split(" ");
for (var i = 0; i < splitString.length; i++) {
    if (splitString[i] == "the") {
        wordsCount++;
    }
}
alert("There are " + wordsCount + " occurerrence(s) word of 'the'.");