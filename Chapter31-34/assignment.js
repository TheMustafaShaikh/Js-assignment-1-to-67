//1
var date = new Date();
// document.write(date);

//2
// var getMonth = date.getMonth();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// alert(months[getMonth]);

//3
var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
// alert(days[date.getDay()]);

//4
// if (days[date.getDay()] == "sun" || days[date.getDay()] == "sat") {
//     alert("its fun day!");
// }


//5
// if (date.getDate() <= "15") {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }

//6
// alert("Current date: " + date + "\nElapsed miliseconds since january 1,1970: " + date.getTime() + "\nElapsed minutes since junary 1,1970" + date.getTime() / 1000 * 60);

//7
// var breakString = date.toString();
// breakString = breakString.split(" ");
// console.log(breakString[4]);
// realTimeFetch = breakString[4].split(":");
// var checkTime = parseInt(realTimeFetch[0]);
// if (checkTime >= 00 && checkTime <= 12) {
//     alert("its AM");
// } else {
//     alert("Its PM");
// }

//8
// var newDate = new Date("Dec 31,2020");
// alert(newDate);


//9
// var ramadhanDate = new Date("Apr 24,2020");
// var rDate = ramadhanDate.getTime() / (1000 * 60 * 60 * 24);
// var currentDate = date.getTime() / (1000 * 60 * 60 * 24);
// alert(Math.floor(currentDate - rDate) + " Days has been passed since 1st ramadhan of 2020");

//10
// var firstSet = new Date("Jan 01,2015");
// var secondSet = new Date("Dec 05,2015");
// var getFirstSecond = firstSet.getTime() / (1000 * 60);
// var getSecondSec = secondSet.getTime() / (1000 * 60);
// alert(getSecondSec - getFirstSecond + " Has been passed since beginning of the 2015");

//11
var changeDate = new Date();
// changeDate.setTime(changeDate.getTime() + 3600000)
// alert(changeDate);

//12
// changeDate.setTime(changeDate.getTime() - 3155695200000);
// alert(changeDate);

//13
// var userAge = prompt("Enter the age: ");
// var splitDate = date.toString().split(" ");
// alert("Your birth year is: " + splitDate[3] - userAge);

//14
var customerName = "Mustafa";
var currentMonth = date.getMonth();
var numberOfUnits = 410;
var chargesPerUnit = 16;

var payableInDueDate = numberOfUnits * chargesPerUnit;
var lateCharges = 350;
var payableAfterDueDate = payableInDueDate + lateCharges;

document.write(`
    <b> K-Electric Bill</b>
    <br/>
    customer name: <b>${customerName}</b>
    <br/>
    month: <b>${months[currentMonth]}</b>
    <br/>
    Number of units: <b>${numberOfUnits}</b>
    <br/>
    Charges of units: <b>${chargesPerUnit}</b>
    <br/>
    <br/>
    <br/>
    Net amount payable (within due date): <b>${payableInDueDate}</b>
    <br/>
    Late payment surcharge: <b>${lateCharges}</b>
    <br/>
    Gross amount payable (after due date): <b>${payableAfterDueDate}</b>


`);