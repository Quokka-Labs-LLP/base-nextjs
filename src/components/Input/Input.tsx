import React from "react";
import './Input.css';

export interface InputProps {
    size: string,
    placeholder: string
}

const Input = (props: InputProps):JSX.Element => {
    const {size = 'medium', ...rest} = props;
    return (
        <input className={`input ${size}`} {...rest} />
    )
}

export default Input;