/*
Problem Statement:-
Create a simple calculator which can perform arithmetic operations such as +, -, *, / on two integer operands.

Requirements
The page must contain two text type input fields to accept operands and radio buttons to input an operator.

By default '+' must be checked. On clicking the 'Calculate' button, the arithmetic operation must be performed and result must be rounded off to 3 decimal places and displayed in green color.

Both the operands must be provided as input. Otherwise on clicking the 'Calculate' button, an error message must be displayed in red as "Input all values"

The operands must contain only numerical values. Otherwise on clicking the 'Calculate' button, an error message "Operands can only be digits" should be displayed in red

Make sure that user does not divide a number by zero. If the user tries to divide a number by zero, then display error message "Cannot divide by 0" in red

If result goes beyond -100000 to 1000000, an error instance with message "Result out of bounds" must be thrown.
*/

function calculate() {
    const operand1 = document.getElementById("operand1").value.trim();
    const operand2 = document.getElementById("operand2").value.trim();
    const operator = document.querySelector('input[name="operator"]:checked').value;

    document.getElementById("error").innerText = '';
    document.getElementById("result").innerText = '';

    if (!operand1 || !operand2) {
        document.getElementById("error").innerText = "Input all values";
        return;
    }

    if (!/^\d+$/.test(operand1) || !/^\d+$/.test(operand2)) {
        document.getElementById("error").innerText = "Operands can only be digits";
        return;
    }

    const num1 = parseInt(operand1);
    const num2 = parseInt(operand2);

    if (operator === '/' && num2 === 0) {
        document.getElementById("error").innerText = "Cannot divide by 0";
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    if (result < -100000 || result > 1000000) {
        throw new Error("Result out of bounds");
    }

    document.getElementById("result").innerText = "Result: " + result.toFixed(3);
    document.getElementById("result").classList.add("result");
}