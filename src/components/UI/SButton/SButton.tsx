import React, {FC, PropsWithChildren} from 'react';
import styles from './SButton.module.css'


interface ICustomButton{
    children: string,
    onClick: () => void

}
const SButton : FC<PropsWithChildren<ICustomButton>> = ({children, ...props}) => {
    return (
        <button {...props} className={styles.customButton}>
            {children}
        </button>
    );
};

export default SButton;