import React, { ReactNode, useState, createContext, useContext, useEffect, useMemo } from "react";
import styles from './Form.module.scss';
import useForm from '../hooks/useForm';
import {useFormHook, Form,  Values, InputProps, ResetProps, SubmitProps, Messages} from '../interfaces/Form';

const FormContext = createContext<useFormHook | any>(undefined);

const Form: React.FC<Form> = ({children, rules = {}, initialValues = {}, onFinish = () => {}, className = ""}) => {

    const { values, setValues, changeValue, reset, errors, setErrors, validation, validationOnSubmit, errorExist, allowNumbers, findRule } = useForm();

    useEffect(() => {
        setValues(initialValues);
    }, [])

    const submit = (): void => {

        new Promise<{ success: boolean }>((resolve, reject) => {
            Object.keys(errors).length == 0 && !validationOnSubmit(rules) ? resolve({ success: true }) : reject({ success: false });
        })
        .then((response) => {
            response.success ? onFinish(values) : onFinish({error: true, errors: errors});
        })
        .catch((error) => {
            onFinish({error: true, errors: errors});
        });

    }

    return (
        <FormContext.Provider value={{rules: rules, values: values, initialValues: initialValues, errors: errors, setErrors: setErrors, setValues: setValues, errorExist: errorExist, changeValue: changeValue, reset: reset, submit: submit, validation: validation, allowNumbers: allowNumbers, findRule: findRule}}>
            <form className={`${styles?.form} ${className} ${errorExist ? styles.error : ''}`}>{children}</form>
        </FormContext.Provider>
    )

}

export const Input: React.FC<InputProps> = ({name, type = "text", label, className = "", placeholder = "Enter text...", onChange = () => {}}) => {

    const data = useContext(FormContext);

    const { required, requiredMessage }: { required: boolean, requiredMessage: string } = data.findRule(name, 'required', data.rules);
    const { min, minMessage }: { min: number | boolean, minMessage: string } = data.findRule(name, 'min', data.rules);
    const { max, maxMessage }: { max: number | boolean, maxMessage: string } = data.findRule(name, 'max', data.rules);
    
    const messages = useMemo<Messages>(() => {
        return {
            required: <p className={styles.errorMes}>{requiredMessage}</p>,
            min: <p className={styles.errorMes}>{minMessage}</p>,
            max: <p className={styles.errorMes}>{maxMessage}</p>
        }
    }, [])

    return (
        <div className={`${styles.group} ${className}`}>
            { label && <label htmlFor={name}  className={styles.label}>{required || min ? <span className={styles.required}></span> : null} {label}</label> }
            <input placeholder={placeholder} type="text" value={`${data?.values[name] ? data?.values[name] : ''}`} className={`${styles.input} ${messages[data.errors[name]] ? styles.error : ''}`} id={name} onChange={(e) => { const val = type == 'number' ? data.allowNumbers(e.target.value.trim()) : e.target.value.trim(); data.changeValue(name, val); onChange(val); data.validation(name, val, required, min, max); }}  />
            {messages[data.errors[name]]}
        </div>
    )

}

export const Reset: React.FC<ResetProps> = ({text = "Reset", className = ""}) => {

    const data = useContext(FormContext);
    
    return (
        <div className={`${styles.group} ${className}`}>
            <button type="button" onClick={() => { data.reset(data.initialValues); }} className={styles.reset}>{text}</button>
        </div>
    )

}

export const Submit: React.FC<SubmitProps> = ({text = "Submit", className = ""}) => {

    const data = useContext(FormContext);
    
    return (
        <div className={`${styles.group} ${className}`}>
            <button type="button" onClick={() => { data.submit(); }} className={`${styles.submit} ${data.errorExist ? styles.disabled : ''}`}>{text}</button>
        </div>
    )

}

export default Form;