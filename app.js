// handle input function
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear the input field
    inputField.value = '';
    return amountValue;

}


// // handle calculate button event
document.getElementById('calculate-button').addEventListener('click', function () {
    // // get amount expense
    const newFoodAmount = getInputValue('food-input');
    const newRentAmount = getInputValue('rent-input');
    const newClothesAmount = getInputValue('clothes-input');

    // update expense total
    const expenseTotal = document.getElementById('expense-total');
    const expenseText = expenseTotal.innerText;
    const expenseAmount = parseFloat(expenseText);

    // // get the income amount
    const incomeTotal = getInputValue('income-input');

    // account balance total
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const balanceAmountfinal = parseFloat(balanceText);

    // condition and error handling
    if (newFoodAmount > 0 && newRentAmount > 0 && newClothesAmount > 0 && incomeTotal > 0) {
        const expenseTotalFinal = newFoodAmount + newRentAmount + newClothesAmount + expenseAmount;

        if (incomeTotal > expenseTotalFinal) {
            const expenseTotalFinal = newFoodAmount + newRentAmount + newClothesAmount + expenseAmount;
            expenseTotal.innerText = expenseTotalFinal;
            const balanceAmount = incomeTotal - expenseTotalFinal;
            balanceTotal.innerText = balanceAmount;
        }
        else {
            alert("control your self!!!")
        }
    }
    else {
        alert("Please,Enter Positive Value!!!");
    }
});

// // handle save button event
document.getElementById('save-button').addEventListener('click', function () {

    // get the save input
    const saveInput = document.getElementById('save-input');
    const saveInputText = saveInput.value;
    const newSaveInput = parseFloat(saveInputText);

    // clear the save input field
    saveInput.value = '';

    // get previous account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const balanceAmountfinal = parseFloat(balanceText);

    // show save amount
    const saveAmount = document.getElementById('amount-save');
    const SaveAmountText = saveAmount.innerText;
    const newSaveAmount = parseFloat(SaveAmountText);

    const balanceAmount = balanceAmountfinal * newSaveInput / 100;
    saveAmount.innerText = balanceAmount;

    // update ramaining balance
    const remainingBalance = document.getElementById('balance-remain');
    const remainingBalanceText = remainingBalance.innerText;
    const remainingBalanceAmount = parseFloat(remainingBalanceText);

    const remainAmount = balanceAmountfinal - balanceAmount;
    remainingBalance.innerText = remainAmount;

});