function getPin() {
    const pin = Math.round(Math.random() * 1000000);
    let pinString = pin + '';
    if (pinString.length == 6) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    let pinField = document.getElementById('input-pin');
    pinField.value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    let digit = event.target.innerText;
    let inputTyped = document.getElementById('input-typed');
    if (isNaN(digit)) {
        if (digit == 'C') {
            inputTyped.value = '';
        }
    }
    else {
        let previousNumber = inputTyped.value;
        let newNumber = previousNumber + digit;
        inputTyped.value = newNumber;
    }
});


document.getElementById('key-pad').addEventListener('click', function () {
    let inputTyped = document.getElementById('input-typed').value;
    const submitID = document.getElementById('submit-id');
    if (inputTyped.length == 6) {
        submitID.removeAttribute('disabled');
    }
    else {
        submitID.setAttribute('disabled', true);
    }
    submitID.addEventListener('click', function () {
        inputTyped.value = '';
        submitID.setAttribute('disabled', true);
    });
});
function verifyPin() {
    let inputTyped = document.getElementById('input-typed').value;
    let pinField = document.getElementById('input-pin').value;
    let notifySuccess = document.getElementById('notify-success');
    let notifyFail = document.getElementById('notify-fail');

    if (inputTyped == pinField) {
        notifyFail.style.display = 'none';
        notifySuccess.style.display = 'block';
    }
    else {
        notifyFail.style.display = 'block';
        notifySuccess.style.display = 'none';
    }
}

