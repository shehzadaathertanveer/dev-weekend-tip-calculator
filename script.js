let currentTip = 0;

function calculate() 
{
    let bill = parseFloat(document.getElementById('bill-input').value);
    let people = parseInt(document.getElementById('people-input').value);

    if (people <= 0) 
    {
        document.getElementById('error-message').innerText = "Can't be zero";
        document.getElementById('tip-per-person').innerText = "0.00";
        document.getElementById('total-per-person').innerText = "0.00";
        return;
    }
    else 
    {
        document.getElementById('error-message').innerText = "";
    }

    let tipDecimal = currentTip / 100;
    let totalTip = bill * tipDecimal;
    
    let tipPerPerson = totalTip / people;
    let totalPerPerson = (bill + totalTip) / people;

    if (bill > 0 && people > 0) 
    {
        document.getElementById('tip-per-person').innerText = tipPerPerson.toFixed(2);
        document.getElementById('total-per-person').innerText = totalPerPerson.toFixed(2);
    }
}

function clickBtn(percentageNumber) 
{
    document.getElementById('custom-tip-input').value = ""; 
    currentTip = percentageNumber; 
    calculate(); 
}

function typeCustom() 
{
    let customVal = parseFloat(document.getElementById('custom-tip-input').value);
    
    if (customVal > 0) 
    {
        currentTip = customVal;
    } 
    else 
    {
        currentTip = 0;
    }

    calculate(); 
}

function resetAll() 
{
    document.getElementById('bill-input').value = "";
    document.getElementById('custom-tip-input').value = "";
    document.getElementById('people-input').value = "";
    
    document.getElementById('error-message').innerText = "";
    document.getElementById('tip-per-person').innerText = "0.00";
    document.getElementById('total-per-person').innerText = "0.00";
    
    currentTip = 0;
}