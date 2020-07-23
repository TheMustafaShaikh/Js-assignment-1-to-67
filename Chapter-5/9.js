var dollarsToPKR = 104.80;
var riyaalToPKR = 28;

var dollarsOnHand = 10;
var riyaalOnHand = 25;

var totalExchangeRate = (dollarsOnHand * dollarsToPKR) + (riyaalToPKR * riyaalOnHand);

document.write("Total exchange amount: " + totalExchangeRate + "PKR");