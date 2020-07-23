var sub1 = prompt("enter the marks for subject 1");
var sub2 = prompt("enter the marks for subject 2");
var sub3 = prompt("enter the marks for subject 3");

sub1 = parseInt(sub1);
sub2 = parseInt(sub2);
sub3 = parseInt(sub3);

var totalNumbers = sub1 + sub2 + sub3;

var percentage = ((sub1 + sub2 + sub3) / 300) * 100;
var grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You needs to improve";
} else {
    grade = "F"
    remarks = "Sorry.";
}

document.write("Total marks: 300 <br/> marks obtained: " + totalNumbers + "<br/>Percentage: " + percentage + "% <br/> Grade: " + grade + "<br/>Remarks: " + remarks);