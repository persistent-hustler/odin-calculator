function operate(operand1,operator,operand2) {
    switch(operator) {
        case 'plus': return +operand1 + +operand2;
        case 'minus': return +operand1 - +operand2;
        case 'times': return +operand1 * +operand2;
        case 'divide-by': return +operand1/+operand2;
        default: return 'ERROR';
    }
}