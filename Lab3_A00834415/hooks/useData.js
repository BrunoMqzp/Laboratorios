import { useState } from "react";

export const useData = () =>{
    const[data, setData] = useState(null);
    const showData = (newData) =>{
        setData(newData);
    }
    return{
        data,
        showData
    };
};