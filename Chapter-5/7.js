var priceOfItem1 = 100;
var quantityOfItem1 = 3;
var priceOfItem2 = 200;
var quantityOfItem2 = 3;
var shippingCharges = 200;
var totalBill = (priceOfItem1 * quantityOfItem1) + (priceOfItem2 * quantityOfItem2) + shippingCharges;


document.write("price for item1 : " + priceOfItem1 + "<br/>");
document.write("quantity of item1  : " + quantityOfItem1 + "<br/>");
document.write("price for item2 : " + priceOfItem2 + "<br/>");
document.write("quantity of item2 : " + quantityOfItem2 + "<br/>");
document.write("Shipping charges : " + shippingCharges + "<br/>");
document.write("Total Bill : " + totalBill);