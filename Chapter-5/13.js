var favSnacks = "Chocolate chips";
var currentAge = 20;
var maxAge = 65;
var estimatedSnacksPerDay = 3;

document.write("Favourite snacks: " + favSnacks + "<br/>");
document.write("current age: " + currentAge + "<br/>");
document.write("maximum age: " + maxAge + "<br/>");
document.write("Amount of snacks per day: " + estimatedSnacksPerDay + "<br/>");
document.write("You will need " + (maxAge - currentAge) * estimatedSnacksPerDay + " chocolate chip to last you until the ripe old age of 65");