var colorArr = ["red", "blue", "yellow", "green"];
document.write(colorArr);
var arBegining = prompt("What color you want to add at beginning: ");
colorArr.unshift(arBegining);
document.write("<br/>" + colorArr);

var atEnd = prompt("what color you want to add at ending");
colorArr.push(atEnd);
document.write("<br/>" + colorArr);


var oneColorMore = prompt("Add 2 more color");
var secondColorMore = prompt("second color");

colorArr.push(oneColorMore);
colorArr.push(secondColorMore);

document.write("<br/>" + colorArr);


colorArr.shift();
document.write("<br/>" + colorArr);

colorArr.pop();
document.write("<br/>" + colorArr);

var atDesireLocation = prompt("Enter desired index to add element");
var valueAtDesiredLocation = prompt("The value you want to add at desired location");
atDesireLocation = parseInt(atDesireLocation);

colorArr.splice(atDesireLocation, 0, valueAtDesiredLocation);
document.write("<br/>" + colorArr);

var desireLocationToDelete = prompt("Enter the index number you want to delete");
desireLocationToDelete = parseInt(desireLocationToDelete);

var toBeDeleted = prompt("how many you want to delete");
toBeDeleted = parseInt(toBeDeleted);

colorArr.splice(desireLocationToDelete, toBeDeleted);
document.write("<br/>" + colorArr);