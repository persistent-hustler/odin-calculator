function operate(operand1,operator,operand2) {
    switch(operator) {
        case 'plus': return +operand1 + +operand2;
        case 'minus': return +operand1 - +operand2;
        case 'times': return +operand1 * +operand2;
        case 'divide-by': return +operand1/+operand2;
        default: return 'ERROR';
    }
}

let calculator = document.querySelector('.calculator');
let display = document.querySelector('.display');
let operand1 = null;
let operator = null;
let operand2 = null;
let displayValue = '0';

calculator.addEventListener('click', function(event) {
    let id = event.target.id;

    switch(id) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9': if(displayValue.length < 8) {
                    displayValue = (displayValue==='0')? id: (displayValue + id);
                    display.textContent = displayValue;
                }
        break;
        case 'plus':
        case 'minus':
        case 'times':
        case 'divide-by':
        case 'equals': if(operand1 && operator) {
            operand2 = display.textContent;
            let result = operate(operand1,operator,operand2);
            display.textContent = result;
            operand2 = null;
            operator = null;
        }
        displayValue = '0';
        operand1 = display.textContent;
        if(id!== 'equals') {operator = id;}
    }
});