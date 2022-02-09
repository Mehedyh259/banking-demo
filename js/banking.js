// deposti button event handler
document.getElementById('deposit-btn').addEventListener('click', function() {
    const depositInput = document.getElementById('deposit-input');
    let newDepositAmount = 00;
    if (depositInput.value.length != 0) {
        newDepositAmount = Math.abs(parseFloat(depositInput.value));
    }

    const depositTotal = document.getElementById('deposit-total');
    const currentDepositAmount = parseFloat(depositTotal.innerText);
    const newDepositTotal = currentDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;


    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const currentBalance = parseFloat(balanceTotal.innerText);
    const newBalance = currentBalance + newDepositAmount;
    balanceTotal.innerText = newBalance;

    depositInput.value = "";
});

// withdraw button event listener
document.getElementById('withdraw-btn').addEventListener('click', function() {

    const withdrawInput = document.getElementById('withdraw-input');
    let newWithdrawAmount = 0;
    if (withdrawInput.value.length != 0) {
        newWithdrawAmount = Math.abs(parseFloat(withdrawInput.value));
    }
    console.log(newWithdrawAmount);

    // old withdraw value
    const withdrawTotal = document.getElementById('withdraw-total');
    const currentWithdrawAmount = parseFloat(withdrawTotal.innerText);

    // old balance total
    const balanceTotal = document.getElementById('balance-total');
    const currentBalance = parseFloat(balanceTotal.innerText);

    if (newWithdrawAmount > currentBalance) {
        alert('Action Denied....Withdraw Amount is more than Account balance !!!');
    } else {

        // update withdraw total
        const newWithdrawtotal = currentWithdrawAmount + newWithdrawAmount;
        withdrawTotal.innerText = newWithdrawtotal;

        // update account balance

        const newBalance = currentBalance - newWithdrawAmount;
        balanceTotal.innerText = newBalance;
    }


    withdrawInput.value = "";

})