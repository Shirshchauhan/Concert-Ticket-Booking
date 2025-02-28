function showValue(x) {
    document.getElementById("ticketCount").innerHTML = x;
}

function costCalculation() {
    var numTickets = parseInt(document.getElementById("noOfTickets").value);
    var ticketType = document.getElementById("ticketType").value;
    var hasCoupon = document.getElementById("couponCode").checked;
    var refreshment = document.getElementById("refreshment").checked;

    var basePrice = (ticketType == "Floor") ? 400 : 500;
    var totalPrice = numTickets * basePrice;
    
    if (numTickets > 20) {
        totalPrice *= 0.90;
    }
    if (hasCoupon) {
        totalPrice *= 0.98;
    }
    if (refreshment) {
        totalPrice += 100;
    }

    totalPrice = Math.round(totalPrice);
    alert("Total Cost: Rs. " + totalPrice);
    return false;
}
