var fuel = prompt("Please enter the current fuel: ");
fuel = parseFloat(fuel);
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}