import React , { useState } from 'react';
import { evaluate } from 'mathjs';

import './BasicCalculator.css';

const BasicCalculator = () => {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = ()  => {
        setInput('');
    };

    const handleCalculate = ()  => {
        try {
            setInput(evaluate(input).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    return(
        <div className="calculator">
            <div className="calculator-display">{input || ''}</div>
            <div className="calculator-buttons">
                {['7', '8', '9', '/'
                    ,'4', '5', '6', '*'
                    ,'1', '2', '3', '-'
                    ,'0', '.', '=', '+'].map((item) => (
                        <button key={item} onClick={() => (item === '=' ? handleCalculate() : handleClick(item))} className="calculator-button">
                            {item}
                        </button>
                    ))}
                    <button onClick={handleClear} className="calculator-button clear-button">
                        Clear
                    </button>
            </div>
        </div>
    );
}


export default BasicCalculator;