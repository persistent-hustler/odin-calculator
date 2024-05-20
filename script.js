function operate(operand1, operator, operand2) {
    switch (operator) {
        case 'plus': return +operand1 + +operand2;
        case 'minus': return +operand1 - +operand2;
        case 'times': return +operand1 * +operand2;
        case 'divide-by': return +operand1 / +operand2;
        default: return 'ERROR';
    }
}

let calculator = document.querySelector('.calculator');
let display = document.querySelector('.display');
let operand1 = null;
let operator = null;
let operand2 = null;
let displayValue = '0';

calculator.addEventListener('click', function (event) {
    let id = event.target.id;

    switch (id) {
        case '.': if (displayValue.includes('.')) return;
        case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
            if (displayValue.length < 8) {
                displayValue = (displayValue === '0') ? id : (displayValue + id);
                display.textContent = displayValue;
            }
            break;
        case 'plus': case 'minus': case 'times': case 'divide-by': case 'equals':
            if(displayValue==='0' && id==='minus') {
                displayValue = '-';
                display.textContent = displayValue;
                return;
            }
            if (operand1 && operator) {
                operand2 = display.textContent;
                let result = operate(operand1, operator, operand2).toString();
                result = handleFloatingPoint(result);
                display.textContent = result;
                operand2 = null;
                operator = null;
            }
            displayValue = '0';
            operand1 = display.textContent;
            if (id !== 'equals') { operator = id; }
            break;
            case 'backspace': if(display.textContent!==0) {
                display.textContent = display.textContent.slice(0,-1);
                displayValue = display.textContent;
            }
            break;
            case 'all-clear': operand1 = null;
            operator = null;
            operand2 = null;
            displayValue = '0';
            display.textContent = displayValue;
            break;
            case '+/-':
                display.textContent = (Number(display.textContent) * -1).toString();
                displayValue = display.textContent;
            break;
    }
    let displayInt = parseInt(display.textContent);
    if (displayInt > 99999999 && displayInt !== 'Infinity') {
        display.textContent = 'too big';
    } else if((displayInt< -9999999 && displayInt!== '-Infinity')) {
        display.textContent='too small';
    }
});

function handleFloatingPoint(result) {
    if(!result.includes('.')) {
        return result;
    }
    let intLength = parseInt(result).toString().length;
    let floatLength = 8 - intLength;
    result = Number(result).toFixed(floatLength).toString();
    result = parseFloat(result);
    return result;
}