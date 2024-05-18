function operate(operand1,operator,operand2) {
    switch(operator) {
        case 'plus': return +operand1 + +operand2;
        break;
        case 'minus': return +operand1 - +operand2;
        break;
        case 'times': return +operand1 * +operand2;
        break;
        case 'divide-by': return +operand1/+operand2;
        break;
        default: return 'ERROR';
    }
}