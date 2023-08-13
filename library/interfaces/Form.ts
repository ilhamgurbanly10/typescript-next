import { ReactNode} from "react";

export interface useFormHook {
    values: Values;
    setValues: any;
    changeValue?: (key: string, value: any) => void;
    reset?: (initialValues: Values) => void;
    submit?: () => void;
    errors: Values;
    setErrors: any;
    validation: (key: string, value: any, required: boolean, min: boolean | number, max: boolean | number ) => void;
    validationOnSubmit: (rules: Rules) => boolean;
    errorExist: boolean;
    allowNumbers: (value: string) => string;
    findRule: (name: string, type: string, rules: Rules) => void;
}

export interface Rule {
    type: 'required' | 'min' | 'max';
    length?: number;
    message: string;
}

export interface Rules {
    [key: string]: Rule[];
}

export interface Form {
    children: ReactNode; 
    initialValues: Values; 
    onFinish?: (e: Values) => void;
    className?: string;
    rules?: Rules;
}

export interface Values {
    [key: string]: any;
}

export interface Messages {
    [key: string]: JSX.Element;
}

export interface InputProps {
    name: string;
    label?: string;
    placeholder?: string;
    onChange?: (e: string) => void;
    required?: boolean;
    requiredMessage?: string;
    min?: number | string;
    max?: number | string;
    minMessage?: string;
    maxMessage?: string;
    className?: string;
    type?: string;
}

export interface ResetProps {
    text: string;
    className?: string;
}

export interface SubmitProps {
    text: string;
    className?: string;
}


