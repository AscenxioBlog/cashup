
import React from 'react';

const CustomInput = ({ type, name, value, onInput, placeholder, className, ...rest }) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onInput={onInput}
            placeholder={placeholder}
            className={className}
            {...rest}
        />
    );
};

export default CustomInput;



