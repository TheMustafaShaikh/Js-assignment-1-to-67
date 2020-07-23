var studentNames = [];
var student1 = prompt("Enter the name of 1st student");
studentNames.push(student1);
var student2 = prompt("Enter the name of 2nd student");
studentNames.push(student2)
var student3 = prompt("Enter the name of 3rd student");
studentNames.push(student3);


var obtainedNumbers = [];
var obtainderNumber1 = prompt("Enter the obtained number of 1st student");
obtainderNumber1 = parseInt(obtainderNumber1);
var obtainderNumber2 = prompt("Enter the obtained number of 2nd student");
obtainderNumber2 = parseInt(obtainderNumber2);
var obtainderNumber3 = prompt("Enter the obtained number of 3rd student");
obtainderNumber3 = parseInt(obtainderNumber3);
obtainedNumbers.push(obtainderNumber1);
obtainedNumbers.push(obtainderNumber2);
obtainedNumbers.push(obtainderNumber3);



document.write("Score of " + studentNames[0] + " is " + obtainedNumbers[0] + ". Percentage " + (obtainedNumbers[0] / 500) * 100 + "<br/>");
document.write("Score of " + studentNames[1] + " is " + obtainedNumbers[1] + ". Percentage " + (obtainedNumbers[1] / 500) * 100 + "<br/>");
document.write("Score of " + studentNames[2] + " is " + obtainedNumbers[2] + ". Percentage " + (obtainedNumbers[2] / 500) * 100 + "<br/>");