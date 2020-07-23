var guessnumber = 9;
var user = prompt("Enter the number from 1 to 10");

user = parseInt(user);
if (user == guessnumber) {
    alert("Bingo! Correct answer!");
} else if ((user + 1) == guessnumber) {
    alert("Close enough to the correct answer!");
}