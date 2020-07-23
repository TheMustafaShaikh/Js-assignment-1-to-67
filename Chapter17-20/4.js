var table = prompt("Enter the number for the table");
table = parseInt(table);
var length = prompt("Enter the mulitplication length");
length = parseInt(length);

for (var i = 0; i < length; i++) {
    document.write((table * (i + 1)) + "<br/>");
}