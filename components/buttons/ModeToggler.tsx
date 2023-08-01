import React, {memo, useLayoutEffect, useMemo} from "react";
import styles from './ModeToggler.module.scss';
import useDarkMode from "../../hooks/useDarkMode";
import { ModeClasses } from "../../interfaces/Mode";
import { FiSun, FiMoon } from 'react-icons/fi'; 

const ModeToggler: React.FC = () => {

    const { toDarkMode, toLightMode, toDefaultMode, mode } = useDarkMode();

    const modeClasses = useMemo<ModeClasses>(() => { return {
        'light': null,
        'dark': styles.darkMode
    }}, [])

    useLayoutEffect(() => {
        toDefaultMode();
    }, [])

    return (
        <div className={`${styles.container} ${modeClasses[mode]} ms-auto ms-lg-0`}>
            <button onClick={() => { toLightMode(); }} className={`${styles.btn} ${styles.lightBtn}`} > <FiSun size={24} /> </button> 
            <button onClick={() => { toDarkMode(); }} className={`${styles.btn} ${styles.darkBtn}`} > <FiMoon size={24} /> </button> 
        </div>
    )

}

export default memo(ModeToggler);