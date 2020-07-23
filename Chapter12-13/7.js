var user = prompt("Enter the time in 24 hours");

user = parseInt(user.slice(0, 2));

if (user <= 12 && user >= 1) {
    alert(user + "AM");
} else if (user == 13) {
    alert("1 pm");
} else if (user == 14) {
    alert("2 pm");
} else if (user == 15) {
    alert("3 pm");
} else if (user == 16) {
    alert("4 pm");
} else if (user == 17) {
    alert("5 pm");
} else if (user == 18) {
    alert("6 pm");
} else if (user == 19) {
    alert("7 pm");
} else if (user == 20) {
    alert("8 pm");
} else if (user == 21) {
    alert("9 pm");
} else if (user == 22) {
    alert("10 pm");
} else if (user == 23) {
    alert("11 pm");
} else if (user == 00) {
    alert("12 AM");
}