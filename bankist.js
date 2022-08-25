// Summary of Bankist Application
const summary = {
    deposit: 0,
    withdraw: 0,
    balance: 0
};

// Select elemend by ID
function select(id) {
    return document.getElementById(id);
}

// Get Input value by ID selector
function getInputVal(el) {
    // select and parse the input into number
    el = select(el);
    const inputVal = +el.value;

    // clear the input field
    el.value = '';

    // return input value if value is valid, otherwise return false
    return isInputValid(inputVal) ? inputVal : false;
}

// Check if an input is valid or not
function isInputValid(input) {
    return !isNaN(input) && input > 0;
}

// Display error msg in need
function displayErrorMsg(str) {
    alert(str);
    return;
}

// Update summary with one function
function updateSummary(key, newVal) {
    summary[key] += newVal;
    key === 'deposit' ? summary.balance += newVal : summary.balance -= newVal;
    select(`${key}-total`).textContent = summary[key];
    select('balance-total').textContent = summary.balance;
}

// 1. Add event listener on deposit button on click
select('btn-deposit').addEventListener('click', function () {

    // 1.2: Get the deposit amount
    const depositAmount = getInputVal('deposit-amount');

    // 1.3: if deposit amount is valid, update summary
    if (depositAmount) {
        updateSummary('deposit', depositAmount);

    // 1.4: Otherwise, display error message
    } else {
        displayErrorMsg('Deposit amount should be a number greater than 0!');
    }
});

// 2. Add event listener on withdraw button on click
select('btn-withdraw').addEventListener('click', function () {

    // 2.1 Get the withdraw amount
    const withdrawAmount = getInputVal('withdraw-amount');

    // 2.2: if Withdraw amount is greater than current balance, display error message
    if (withdrawAmount > summary.balance) {
        displayErrorMsg('Withdraw amount should not be greater than balance total.');

    // 2.3: Otherwise, update summary
    } else if (withdrawAmount) {
        updateSummary('withdraw', withdrawAmount);

    // 2.4 if withdraw amount is not a valid number, display error message
    } else {
        displayErrorMsg('Withdraw amount should be a number greater than 0!');
    }
})