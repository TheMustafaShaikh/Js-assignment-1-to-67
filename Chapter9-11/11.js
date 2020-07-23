var user1 = prompt("Enter the number");
user1 = parseInt(user1);
var user2 = prompt("Enter the number");
user2 = parseInt(user2);
var operator = prompt("Enter the number");


if (operator == '+') {
    alert(user1 + user2);
} else if (operator == '-') {
    alert(user1 - user2);
} else if (operator == '/') {
    alert(user1 / user2);
} else if (operator == '*') {
    alert(user1 * user2);
} else if (operator == '%') {
    alert(user1 % user2)
}