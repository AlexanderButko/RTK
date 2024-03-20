import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import styles from "./Navbar.module.css";


const Navbar : FC = () => {

    const navigate = useNavigate();
    const [activeNav, setActiveNav] = useState<string>('/postsJS')

    function highlightNav( url: string, e : React.MouseEvent<HTMLLIElement>) : void {

        setActiveNav(url);
       // (e.target as HTMLLIElement).className = styles.active_nav;
        navigate(url);
    }

    return (
        <div className={styles.navbar}>

            <h1>REDUX TOOLKIT APP</h1>

            <ul className={styles.navbar_items}>
                <li className={activeNav==='/photos'? styles.active_nav : ''}
                    onClick={e=> highlightNav('/photos', e)}>
                    Фото</li>

                <li className={activeNav==='/postsJPH'? styles.active_nav : ''}
                    onClick={e => highlightNav('/postsJPH', e)}>
                    Посты с JPH</li>

                <li className={activeNav==='/postsJS'? styles.active_nav : ''}
                    onClick={e => highlightNav('/postsJS', e)}>
                    Посты с JSONServer</li>
            </ul>
        </div>
    );
};

export default Navbar;