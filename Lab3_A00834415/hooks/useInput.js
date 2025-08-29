import { useState } from "react";

export const useInput = (initialValue = {}) =>{
    const [inputvalue, setValue] = useState(initialValue);
    
    const onChange = (e) =>{
        const {name, value} = e.target;
        setValue({
            ...inputvalue,
            [name]: value,
        });
    };

    return{
        inputvalue,
        onChange,
    };
};