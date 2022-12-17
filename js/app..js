
function updateCaseNumber(isIncrease) {
    const getNumberField = document.getElementById('case-id-field');
    const numberString = getNumberField.value;
    const previousNumber = parseInt(numberString);
    let newNumber;
    if (isIncrease === true) {
        newNumber = previousNumber + 1;
    } else {
        newNumber = previousNumber - 1;
    }
    getNumberField.value = newNumber;
    return newNumber;
}

function updatePhoneNumber(isPhoneIncrease) {
    const getPhoneField = document.getElementById('phone-id-field');
    const phoneString = getPhoneField.value;
    const previousPhone = parseInt(phoneString);
    let newPhone;
    if (isPhoneIncrease === true) {
        newPhone = previousPhone + 1;
    } else {
        newPhone = previousPhone - 1;
    }
    getPhoneField.value = newPhone;
    return newPhone;
}

function updatePhoneTotalPrice(totalPhoneNumber) {
    const totalPhonePrice = totalPhoneNumber * 1219;
    const getPhonePrice = document.getElementById('phone-price');
    getPhonePrice.innerText = totalPhonePrice;
}


function updateCaseTotalPrice(totalCaseNumber) {
    const totalcasePrice = totalCaseNumber * 59;
    const getCasePrice = document.getElementById('case-price');
    getCasePrice.innerText = totalcasePrice;
}

function getElementById(elementID) {
    const getElement = document.getElementById(elementID);
    const elementValue = getElement.innerText;
    const currentElementValue = parseFloat(elementValue);
    return currentElementValue;

}

function setElement(setId, setValue) {
    const getElementId = document.getElementById(setId);
    getElementId.innerText = setValue;
}

function totalCalculation() {
    const phonePrice = getElementById('phone-price');
    const casePrice = getElementById('case-price');
    const subTotalPrice = phonePrice + casePrice;
    setElement('sub-total', subTotalPrice);
    const calculateTax = (subTotalPrice * 0.1).toFixed(2);
    const taxAmount = parseFloat(calculateTax);
    setElement('tax', taxAmount);
    const totalTax = subTotalPrice + calculateTax;
    setElement('total', totalTax);

}
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const totalCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(totalCaseNumber);
    totalCalculation()
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const totalCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(totalCaseNumber);
    totalCalculation()

})


document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const totalPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(totalPhoneNumber);
    totalCalculation()
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const totalPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(totalPhoneNumber);
    totalCalculation()
})