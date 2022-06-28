import React from "react";
import './Button.css';

export interface ButtonProps {
    variant: string,
    children: string
}
const Button = (props: ButtonProps): JSX.Element => {
    const { variant = 'primary', children, ...rest} = props;
    return (
        <button className={`button ${variant}`} {...rest}>
           {children} 
        </button>
    )
}

export default Button;