let displayValue = '';

let appendValue = (value) => {
    displayValue += value;
    updateDisplay();
}

let clearDisplay = () => {
    displayValue = '';
    updateDisplay();
}

let calculateResult = () => {
    let result = evaluateExpression(displayValue);
    displayValue = result.toString()
    updateDisplay();
}

let evaluateExpression = (expression) => {
    let numbers = []; 
    let operators = [];
    let currentNumber = ''; 

    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        if (isDigit(char)) {
            currentNumber += char;
        } else {
            numbers.push(parseInt(currentNumber));
            currentNumber = '';
            operators.push(char);
        }
    }
    numbers.push(parseInt(currentNumber));

    while (operators.length > 0) {
        let operator = operators.shift();
        let num1 = numbers.shift();
        let num2 = numbers.shift();    
        let result = performOperation(num1, num2, operator);
        numbers.unshift(result);
    }

    return numbers[0];
}

let isDigit = (char) => {
    return /\d/.test(char);
}

let performOperation = (num1, num2, operator) => {
   
    switch (operator) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
    }

   
}


let updateDisplay = () => {
    document.getElementById('display').value = displayValue;
}
