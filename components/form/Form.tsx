import React, { ReactNode, useState, createContext, useContext } from "react";

interface ValuesObj {
    [key: string]: string | number | boolean;
}

interface FormContextType {
    values: ValuesObj,
    setValues: any
}

const FormContext = createContext<FormContextType | undefined>(undefined);

const Form: React.FC<{children: ReactNode}> = ({children}) => {

    const [values, setValues] = useState<ValuesObj>({name: 'ilham'});

    return (
        <FormContext.Provider value={{values: values, setValues: setValues}}>
            <div>{children}</div>
        </FormContext.Provider>
    )

}

export const Input: React.FC = () => {

    const user = useContext(FormContext);
    
    return (
        <div>
            {user?.values?.name} 
            <button onClick={() => { user?.setValues({name: "John"}) }}>Click Me</button>
        </div>
    )

}

export default Form;