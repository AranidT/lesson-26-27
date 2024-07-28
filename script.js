let currentInputValue = "";
let lastInputIsOperator = false;

function clearDisplay(){
    currentInputValue = "";
    lastInputIsOperator = false;
    document.getElementById("result").value = "";
}

function appendValue(value){
    if (isOperator(value)) {
        if (lastInputIsOperator) {
            currentInputValue = currentInputValue.slice(0, -1) + value;
        } else {
            currentInputValue += value;
        }
        lastInputIsOperator = true;
    } else if (value === '+/-') {
        toggleSign();
    } else if (value === '%') {
        calculatePercentage();
    } else if (value === '.') {
        appendDot();
    } else {
        currentInputValue += value;
        lastInputIsOperator = false;
    }
    document.getElementById("result").value = currentInputValue;
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

function appendDot() {
    if (lastInputIsOperator || currentInputValue === "") {
        currentInputValue += "0.";
    } else if (!currentInputValue.endsWith(".")) {
        currentInputValue += ".";
    }
    lastInputIsOperator = false;
}

function calculateResult(){
    try {
        currentInputValue = eval(currentInputValue);
        document.getElementById("result").value = currentInputValue;
        lastInputIsOperator = false;
    } catch {
        document.getElementById("result").value = "ERROR";
    } 
}

function toggleSign(){
    if (currentInputValue) {
        if (currentInputValue.startsWith("-")) {
            currentInputValue = currentInputValue.slice(1);
        } else {
            currentInputValue = "-" + currentInputValue;
        }
        document.getElementById("result").value = currentInputValue;
    }
}

function calculatePercentage(){
    if (currentInputValue) {
        currentInputValue = (parseFloat(currentInputValue) / 100).toString();
        document.getElementById("result").value = currentInputValue;
    }
}
