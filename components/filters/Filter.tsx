import React, {useMemo, memo} from "react";
import styles from "./Filter.module.scss";
import useDarkMode from '../../hooks/useDarkMode';
import { ModeClasses } from "../../interfaces/Mode";

const Filter: React.FC<any> = ({}) => {

    const { mode } = useDarkMode();

    const modeClasses = useMemo<ModeClasses>(() => { return {
        'light': null,
        'dark': styles.darkMode
    }}, [])

    return (
        <div className={`${styles.container} ${modeClasses[mode]} py-2`}>

            <div className="main-container">
                {/* I am Filter */}
            </div>
            
        </div>
    )

}

export default memo(Filter);