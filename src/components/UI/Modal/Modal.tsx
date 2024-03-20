import React, {FC, PropsWithChildren} from 'react';
import styles from './Modal.module.css'

interface IModalProps{
    visible: boolean,
    setVisible: (visible: boolean) => void
}
const Modal : FC<PropsWithChildren<IModalProps>> = ({children, visible, setVisible}) => {

    const rootClasses = [styles.modal];
    if (visible){
        rootClasses.push(styles.active);
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>

        </div>
    );
};

export default Modal;