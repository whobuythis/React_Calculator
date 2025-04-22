import React, { useState } from 'react';

import './InputCalculator.css';

function InputCalculator ()  {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');

    const calculate = ()  => {
        let res;
        switch (operator) {
            case'+':
                res = parseFloat(num1) + parseFloat(num2);
                break;
            case'-':
                res = parseFloat(num1) - parseFloat(num2);
                break;
            case'*':
                res = parseFloat(num1) * parseFloat(num2);
                break;
            case'/':
                if (num2 === '0') {
                    res = 'Error: Division by zero';
                }
                else {
                    res = parseFloat(num1) / parseFloat(num2);
                }
                break;
            default:
                res = 'Error: Invalid operator';
        }
        setResult(res);
    };

    const handleNum1Change = (e) => {
        setNum1(e.target.value);
        setResult('');
    }

    const handleNum2Change = (e) => {   
        setNum2(e.target.value);
        setResult('');
    }

    return (
        <div className="container">
            <h1>Input Calculator</h1>
            <input type="number" value={num1} onChange={handleNum1Change} placeholder="첫 번째 숫자"/>
            <input type="number" value={num2} onChange={handleNum2Change} placeholder="두 번째 숫자"/>
            <select value = {operator} onChange={(e) => setOperator(e.target.value)}>
                <option value="">연산자 선택</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <button onClick={calculate}>계산</button>
            {result !== '' && <h2>결과: {result}</h2>}
        </div>
    )
}

export default InputCalculator;