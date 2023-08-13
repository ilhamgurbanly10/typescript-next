import React, { useMemo, memo, useRef } from "react";
import styles from "./Filter.module.scss";
import useDarkMode from '../../hooks/useDarkMode';
import { ModeClasses } from "../../interfaces/Mode";
import Select from "../library/Select";
import Form, {Input, Reset, Submit} from "../../library/components/Form";

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

            <Form
                initialValues={{
                    city: '',
                    country: '',
                    price: ''
                }}
                rules={{
                    city: [
                        {
                            type: 'required',
                            message: "Bu sahə doldurulmalıdır",
                        }, 
                        {
                            type: 'min',
                            length: 10,
                            message: "Minimum 10 xarakter olmalıdır",
                        },
                        {
                            type: 'max',
                            length: 20,
                            message: "Maksimum 20 xarakter olmalıdır",
                        }
                    ],
                    country: [
                        {
                            type: 'required',
                            message: "Bu sahə doldurulmalıdır",
                        }, 
                        {
                            type: 'min',
                            length: 5,
                            message: "Minimum 5 xarakter olmalıdır",
                        },
                        {
                            type: 'max',
                            length: 10,
                            message: "Maksimum 10 xarakter olmalıdır",
                        }
                    ],
                    price: [
                        {
                            type: 'max',
                            length: 10,
                            message: "Maksimum 10 reqem olmalıdır",
                        }
                    ]
                }}
                onFinish={(response) => { console.log(response)} }
                className="my-form-style"
            >
                
                <Input 
                    name="country" 
                    label="Ölkə" 
                    placeholder="Ölkə daxil edin"
                    onChange={(e) => {  console.log(e); }}
                    className="my-input-style"
                />

                <Input 
                    name="city" 
                    label="Şəhər" 
                    placeholder="Şəhər daxil edin"
                    onChange={(e) => {  console.log(e); }}
                    className="my-input-style"
                />

                <Input 
                    name="price" 
                    label="Qiymet" 
                    placeholder="Ölkə daxil edin"
                    onChange={(e) => {  console.log(e); }}
                    className="my-input-style"
                    type="number"
                />

                <Reset 
                    text="Təmizlə"
                    className="my-reset-style" 
                />

                <Submit 
                    text="Göndər"
                    className="my-submit-style"
                />

            </Form>

        </div>
    )

}

export default memo(Filter);