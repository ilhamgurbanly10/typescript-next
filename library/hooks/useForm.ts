import React, { useState } from 'react';
import {useRouter } from 'next/router';
import {useFormHook, Values, Rules} from '../interfaces/Form';

const useForm = (): useFormHook => {

  const [values, setValues] = useState<Values>({name: 'ilham'});
  const [errors, setErrors] = useState<Values>({});
  const [errorExist, setErrorExist] = useState<boolean>(false);
  const [rules, setRules] = useState();
  
  const changeValue = (key: string, value: any) => setValues({...values, [key]: value });

  const reset = (initialValues: Values) => { setValues(initialValues);  setErrors({});  setErrorExist(false); }

  const validation = (key: string, value: any, required: boolean, min: boolean | number, max: boolean | number ) => {

    if (value.trim() == "" && required) { setErrors({...errors, [key]: 'required'}); setErrorExist(true); } 
    else if (value.trim().length < min && min) { setErrors({...errors, [key]: 'min'}); setErrorExist(true); } 
    else if (value.trim().length > max && max) { setErrors({...errors, [key]: 'max'}); setErrorExist(true); }
    else { 
      const newObj = {...errors}; 
      delete newObj[key]; 
      setErrors(newObj); 
      if (Object.keys(newObj).length == 0) setErrorExist(false); }
  }

  const validationOnSubmit = (rules: Rules): boolean => {
    let error = false;
    let obj = {...errors};
    for (const key in values) {  if (!values[key] && hasRule(key, rules)) { obj[key] = 'required'; setErrorExist(true); error = true; } }
    setErrors({...obj});
    return error;
  }

  const hasRule = (name: string, rules: Rules): boolean => {

    let has = false;

    for (const key in rules) { 
      if (key == name) {
        const arr = rules[key].filter((d) => { return d.type == 'required' || d.type == 'min' })
        has = arr.length > 0 ? true : false
      } 
    }
    
    return has;

  }

  const allowNumbers = (value: string): string => value.replace(/\D/g, "")

  const findRule = (name: string, type: string = 'required', rules: Rules): any => {

    let obj = {};

    for (const key in rules) { 
        
        if (key == name && type == "required") {
            const arr = rules[key].filter((d) => { return d.type == 'required' })
            obj = arr.length > 0 ? {required: true, requiredMessage: arr[0].message} : {required: false, requiredMessage: ''}
        } 

        else if (key == name && type == "min") {
            const arr = rules[key].filter((d) => { return d.type == 'min' })
            obj = arr.length > 0 ? {min: arr[0].length, minMessage: arr[0].message} : {min: false, minMessage: ''}
        }

        else if (key == name && type == "max") {
            const arr = rules[key].filter((d) => { return d.type == 'max' })
            obj = arr.length > 0 ? {max: arr[0].length, maxMessage: arr[0].message} : {max: false, maxMessage: ''}
        }

    }

    return obj;

}

  return { values, errors, errorExist, setValues, setErrors, changeValue, reset, validation, validationOnSubmit, allowNumbers, findRule };

};

export default useForm;
