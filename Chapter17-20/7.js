var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt("welcome to xyz bakers, please enter what you want?");
var boolean = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == input) {
        boolean = true;
        break;
    }
}

if (boolean) {
    alert(arr[i] + "is available at index " + i + " in our bakery!");
} else {
    alert("We are sorry, " + input + " is currently not available!");
}