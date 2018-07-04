function calculateChange() {
    var amountDue = document.getElementById('amount-due').value * 100;
    var amountReceived = document.getElementById('amount-received').value * 100;
    var change = amountReceived - amountDue;
    if (change > 100) {
        var dollars = change / 100 / 1;
        var change = change % 100;
        document.getElementById('dollars-output').innerHTML = Math.floor(dollars);
    };
    if (change > 25) {
        var quarters = change / 25 / 1;
        var change = change % 25;
        document.getElementById('quarters-output').innerHTML = Math.floor(quarters);
    };
    if (change > 10) {
        var dimes = change / 10 / 1;
        var change = change % 10;
        document.getElementById('dimes-output').innerHTML = Math.floor(dimes);
    };
    if (change > 5) {
        var nickels = change / 5 / 1;
        var change = change % 5;
        document.getElementById('nickels-output').innerHTML = Math.floor(nickels);
    };
    if (change > 0) {
        var pennies = change / 1 / 1;
        document.getElementById('pennies-output').innerHTML = Math.round(pennies);
    };
};

function handleClickEvent() {
    calculateChange();
};