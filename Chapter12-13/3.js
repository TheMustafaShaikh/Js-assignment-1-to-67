var user = prompt("Enter the number");
user = parseInt(user);
if (user > 0) {
    alert("Positive");
} else if (user < 0) {
    alert("Negative");
} else {
    alert("Zero!");
}