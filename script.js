const billAmountInput = document.getElementById('billAmount');
const tipPercentageInput = document.getElementById('tipPercentage');
const calculateTipButton = document.getElementById('calculateTip');
const tipAmountElement = document.getElementById('tipAmount');
const totalAmountElement = document.getElementById('totalAmount');

calculateTipButton.addEventListener('click', calculateTip);

function calculateTip() {
    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = parseFloat(tipPercentageInput.value);

    if (billAmount <= 0 || tipPercentage < 0 || tipPercentage > 100) {
        alert('Invalid input. Please enter a positive bill amount and a valid tip percentage.');
        return;
    }

    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;

    tipAmountElement.textContent = `$${tipAmount.toFixed(2)}`;
    totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
}