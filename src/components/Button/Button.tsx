import React from 'react';

interface ButtonProps{
    label : String;
}

const Button = (props :  ButtonProps) => {
    return <button className='button'>{props.label}</button>
}

export default Button;