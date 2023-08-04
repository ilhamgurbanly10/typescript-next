import React, { useMemo, memo, useRef } from "react";
import styles from "./Filter.module.scss";
import useDarkMode from '../../hooks/useDarkMode';
import { ModeClasses } from "../../interfaces/Mode";
import Select from "../library/Select";

const Filter: React.FC<any> = ({ }) => {

    const { mode } = useDarkMode();

    const cities = [
        {
            value: "baki",
            name: "Bakı",
            disabled: false
        },
        {
            value: "qebele",
            name: "Qəbələ",
            disabled: false
        },
        {
            value: "sumqayit",
            name: "Sumqayıt",
            disabled: false
        }
    ]

    const modeClasses = useMemo<ModeClasses>(() => {
        return {
            'light': null,
            'dark': styles.darkMode
        }
    }, [])

    return (
        <div className={`${styles.container} ${modeClasses[mode]} py-2`}>

            <div className="main-container">
                <Select
                    data={cities}
                    onChange={(e) => { console.log(e); }}
                    placeholder="Şəhər seçin"
                    fullWidth={false}
                    defaultValue={"baki"}
                    className="select-style"
                    allowClear={true}
                    searchPlaceholder="Şəhər axtarın"
                    notFoundedText="Axtarışınıza uyğun şəhər tapılmadı"
                />
            </div>

        </div>
    )

}

export default memo(Filter);