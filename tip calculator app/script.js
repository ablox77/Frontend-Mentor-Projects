//Variable Declarations

let billInput = document.querySelector('.bill-input');
let tipPercentButtons = document.querySelectorAll('.dark-green-percent-btn');
let customTipPercentButton = document.querySelector('.custom-percent-btn');
let peopleInput = document.querySelector('.number-of-people-input');
let tipAmount = document.querySelector('.tip-amount');
let totalAmount = document.querySelector('.total-amount');
let resetButton = document.querySelector('.reset-button');
let errorMessage = document.querySelector('.error-message');

//Functions

//tipPercentButton => on-click => 
    //tipAmount = (billInput * tipPercentButtons) / peopleInput
    
    //totalAmount = ((billInput * tipPercentButtons) + billAmount) / peopleInput

function tipCalculator () {
    tipPercentButtons.forEach(element => {
        element.addEventListener('click', function event() {
            tipAmount.innerHTML = "$" + Number((Number(billInput.value) * Number(parseFloat(element.value) / 100)) / Number(peopleInput.value)).toFixed(2);
            totalAmount.innerHTML = "$" + Number(((Number(billInput.value) * Number(parseFloat(element.value) / 100)) + Number(billInput.value)) / Number(peopleInput.value)).toFixed(2);
            console.log(tipAmount.innerHTML)
            console.log(Number(Number(billInput.value) * Number(parseFloat(element.value) / 100)))
            console.log(parseFloat(element.value) / 100)
            if(peopleInput.value == "") {
                peopleInput.classList.add('active-input-error-border');
                errorMessage.classList.add('active-input-error-message');
            } else {
                peopleInput.classList.remove('active-input-error-border');
                errorMessage.classList.remove('active-input-error-message');
            }
            if(tipAmount.innerHTML === "$NaN" || tipAmount.innerHTML === "$Infinity") {
                tipAmount.innerHTML = "$0.00";
            }
            if(totalAmount.innerHTML === "$NaN" || totalAmount.innerHTML === "$Infinity") {
                totalAmount.innerHTML = "$0.00";
            }
        })
    });
    customTipPercentButton.addEventListener('input', function event() {
        tipAmount.innerHTML = "$" + Number((Number(billInput.value) * Number(parseFloat(customTipPercentButton.value) / 100)) / Number(peopleInput.value)).toFixed(2);
        totalAmount.innerHTML = "$" + Number(((Number(billInput.value) * Number(parseFloat(customTipPercentButton.value) / 100)) + Number(billInput.value)) / Number(peopleInput.value)).toFixed(2);
        if(tipAmount.innerHTML === "$NaN" || tipAmount.innerHTML === "$Infinity") {
            tipAmount.innerHTML = "$0.00";
        }
        if(totalAmount.innerHTML === "$NaN" || totalAmount.innerHTML === "$Infinity") {
            totalAmount.innerHTML = "$0.00";
        }
        if(peopleInput.value == "") {
            peopleInput.classList.add('active-input-error-border');
            errorMessage.classList.add('active-input-error-message');
        } else {
            peopleInput.classList.remove('active-input-error-border');
            errorMessage.classList.remove('active-input-error-message');
        }
    });
    resetButton.addEventListener('click', function event() {
        billInput.value = "";
        customTipPercentButton.value = "";
        peopleInput.value = ""
        tipAmount.innerHTML = "$0.00"
        totalAmount.innerHTML = "$0.00"
        peopleInput.classList.remove('active-input-error-border');
        errorMessage.classList.remove('active-input-error-message');
    });
}

tipCalculator()