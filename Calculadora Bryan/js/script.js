function calculateDiscount() {
    const purchaseAmount = parseFloat(document.getElementById("purchaseAmount").value);
    const result = document.getElementById("result");

    if (isNaN(purchaseAmount) || purchaseAmount <= 0) {
        result.textContent = "Por favor, introduce un monto válido.";
        return;
    }

    let discount = 0;

    if (purchaseAmount >= 1000) {
        discount = 15;
    } else if (purchaseAmount >= 500) {
        discount = 10;
    } else {
        discount = 5;
    }

    const discountAmount = (purchaseAmount * discount) / 100;
    const total = purchaseAmount - discountAmount;

    result.textContent = `Se aplica un descuento del ${discount}%. Total a pagar: $${total.toFixed(2)}`;
}
