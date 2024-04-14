import { useState, createContext } from "react"

export const Context = createContext()

export const CustomProvider = ({ children }) => {

    const transformarFecha = (fechaSinFormato) => {
        // "Thu Apr 12 2024 00:00:00 GMT-0300"
        let fechaOriginal = new Date(fechaSinFormato);

        let año = fechaOriginal.getFullYear();
        let mes = ("0" + (fechaOriginal.getMonth() + 1)).slice(-2); 
        let dia = ("0" + fechaOriginal.getDate()).slice(-2);
        let fechaFormateada = año + "-" + mes + "-" + dia;
        return fechaFormateada
        
    }

    const conversionDias = {
        "Mon" : "Lunes",
        "Tue" : "Martes",
        "Wed" : "Miercoles",
        "Thu" : "Jueves",
        "Fri": "Friday",
        "Sat" : "Sabado",  
        "Sun": "Domingo"   
    }

    async function fetchHorasDisponibles(fecha) {
        console.log(fecha)
      
        try {
            let response = await fetch(`http://localhost:3000/horarios/fechas/${fecha}`, {
                method: 'POST',
            });
      
          if (!response.ok) {
            throw new Error('Error al obtener los horarios: ' + response.statusText);
          }
      
          const contentType = response.headers.get('content-type');
          if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Respuesta no válida: No es JSON');
          }
      
          const data = await response.json();

          if (data && data.horarios) {
            console.log(data.horarios)
            setHorasDisponibles(data.horarios)
          }
        } catch (error) {
          console.error(error.message);
          return null;
        }
    }
      
return (
    <Context.Provider 
        value={{ transformarFecha, conversionDias, fetchHorasDisponibles }}> 
            
        { children } 

    </Context.Provider>
    )
}