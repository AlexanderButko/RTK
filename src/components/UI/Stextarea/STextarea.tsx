import React, {FC} from 'react';
import styles from './STextarea.module.css';

interface ISTextareaProps{
    value: string,
    onChange: (e : React.ChangeEvent<HTMLTextAreaElement>) => void,
    placeholder: string

}
const STextarea : FC<ISTextareaProps> = (props) => {
    return (
        <textarea className={styles.textarea} {...props}/>
    );
};

export default STextarea;