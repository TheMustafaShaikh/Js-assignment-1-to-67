var user = prompt("Enter the temperature");
user = parseInt(user);

if (user > 40) {
    alert("It is too hot outside");
} else if (user > 30) {

    alert("The Weather today is Normal");
} else if (user > 20) {
    alert("Today’s Weather is cool")
} else if (user > 10) {
    alert("“OMG! Today’s weather is so Cool")
}