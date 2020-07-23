var arr = [123, 231, 442, 423];
var largestNumber = arr[0];
document.write(arr + "<br/>");

for (var i = 0; i < arr.length; i++) {

    if (arr[i] > largestNumber) {
        largestNumber = arr[i];
    }

}

document.write("Largest number is: " + largestNumber);