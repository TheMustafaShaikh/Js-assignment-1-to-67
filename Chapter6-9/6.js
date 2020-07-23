var subject1 = prompt("Enter the name for subject 1");
var subject2 = prompt("Enter the name for subject 2");
var subject3 = prompt("Enter the name for subject 3");




var obtainedMarksForSub1 = prompt("Enter the obtained marks for " + subject1);
var obtainedMarksForSub2 = prompt("Enter the obtained marks for " + subject2);
var obtainedMarksForSub3 = prompt("Enter the obtained marks for " + subject3);
obtainedMarksForSub1 = parseInt(obtainedMarksForSub1);
obtainedMarksForSub2 = parseInt(obtainedMarksForSub2);
obtainedMarksForSub3 = parseInt(obtainedMarksForSub3);


document.write("<table><tr><th>subject</th><th>total marks</th><th>obtained</th><th>percentage</th></tr><tr><td>" + subject1 + "</td> <td>100</td><td>" + obtainedMarksForSub1 + "</td><td>" + (obtainedMarksForSub1 / 100) * 100 + "</td></tr>  <tr><td>" + subject2 + "</td> <td>100</td><td>" + obtainedMarksForSub2 + "</td><td>" + (obtainedMarksForSub2 / 100) * 100 + "</td></tr>  <tr><td>" + subject3 + "</td> <td>100</td><td>" + obtainedMarksForSub3 + "</td><td>" + (obtainedMarksForSub3 / 100) * 100 + "</td></tr>   <tr><td> </td> <td>300</td><td>" + (obtainedMarksForSub1 + obtainedMarksForSub2 + obtainedMarksForSub3) + "</td><td>" + (obtainedMarksForSub1 + obtainedMarksForSub2 + obtainedMarksForSub3 / 3) + "%</td> </tr></table>");