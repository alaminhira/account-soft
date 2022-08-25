function _(el) {
    return document.getElementById(el);
}
const summary = {
    deposit: 0,
    withdraw: 0,
    balance: 0
};

_('btn-deposit').addEventListener('click', function() {
    // 1. Get deposit amount
    const depositEl = _('deposit-amount');
    const depositAmount = parseFloat(depositEl.value);
    
    // 2. If amount is not a valid number, show error message
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert('Please provide a valid number!');
        depositEl.value = '';
        return;
    } 
    // 3. Store and calculate deposit and balance on the object
    summary.deposit += depositAmount;
    summary.balance += depositAmount;

    // 4. Display deposit and balance on the UI
    _('deposit-total').textContent = summary.deposit;
    _('balance-total').textContent = summary.balance;

    // 5. Clear the deposit field
    depositEl.value = '';
});

_('btn-withdraw').addEventListener('click', function() {
    // 1. Get withdraw amount
    const withdrawEl = _('withdraw-amount');
    const withdrawAmount = parseFloat(withdrawEl.value);

    // 2. If amount is not a valid, number show error message
    if (isNaN(withdrawAmount) || withdrawAmount <= 0 || withdrawAmount > summary.balance) {
        alert('Please provide a valid number or you can\'t withdraw more than your current balance!');
        withdrawEl.value = '';
        return;
    } 

    // 3. Store and calculate withdraw and balance
    summary.withdraw += withdrawAmount;
    summary.balance -= withdrawAmount;

    // 4. Display withdraw and balance on th UI
    _('withdraw-total').textContent = summary.withdraw;
    _('balance-total').textContent = summary.balance;

    // 5. Clear the withdraw field
    withdrawEl.value = '';
})