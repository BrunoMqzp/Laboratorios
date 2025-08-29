import React from "react";
import { useInput } from "../hooks/useInput";
import { useData } from "../hooks/useData";
import "./Form.css"

export const Form = () =>{
    const {inputvalue, onChange} = useInput({
        matricula: "",
        nombre: "",
        apellidos:"",
        edad: "",
        universidad: "",
        carrera: "",
    });

    const Entregar = (e) =>{
        e.preventDefault();
        console.log("Formulario enviado", inputvalue);
        showData(inputvalue);
    };

    const {matricula, nombre, apellidos, edad, universidad, carrera} = inputvalue
    const{data, showData} = useData();
    
    return(
        <div>
        <h2>Formulario</h2>
        <form onSubmit={Entregar}>
            <input
            type="text"
            name="matricula"
            value={matricula}
            onChange={onChange}
            placeholder= "Matricula"
            />
            <br/>
            <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={onChange}
            placeholder= "Nombre"
            />
            <br/>
            <input
            type="text"
            name="apellidos"
            value={apellidos}
            onChange={onChange}
            placeholder= "Apellidos"
            />
            <br/>
            <input
            type="text"
            name="edad"
            value={edad}
            onChange={onChange}
            placeholder= "Edad"
            />
            <br/>
            <input
            type="text"
            name="universidad"
            value={universidad}
            onChange={onChange}
            placeholder= "Universidad"
            />
            <br/>
            <input
            type="text"
            name="carrera"
            value={carrera}
            onChange={onChange}
            placeholder= "Carrera"
            />
            <button type="submit">Enviar</button>
        </form>
        {data &&(
        <div>
            <h3>Resultado: </h3>
            <p>Matricula: {data.matricula}</p>
            <p>Nombre: {data.nombre}</p>
            <p>Apellidos: {data.apellidos}</p>
            <p>Edad: {data.edad}</p>
            <p>Universidad: {data.universidad}</p>
            <p>Carrera: {data.carrera}</p>
        </div>
        )}
        </div>
    );
};