var arr = [123, 231, 442, 423];
var smallestNumber = arr[0];
document.write(arr + "<br/>");

for (var i = 0; i < arr.length; i++) {

    if (arr[i] < smallestNumber) {
        smallestNumber = arr[j];
    }

}

document.write("Largest number is: " + smallestNumber);