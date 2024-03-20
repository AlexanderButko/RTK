import React, {FC} from 'react';
import classes from './SInput.module.css';

interface ISInputProps{
    value?: string,
    onChange: (e : React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string

}
const SInput : FC<ISInputProps> = (props) => {
    return (
        <input className={classes.input} {...props}/>
    );
};

export default SInput;