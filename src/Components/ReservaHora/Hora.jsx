import { useState } from "react"


const Hora = ({hora, estadoSabado, seleccionado}) => {

    const splitHora = hora.split("-")
    const nuevaHora = `${splitHora[0]} - ${splitHora[1]}`
    console.log(nuevaHora)

    console.log(seleccionado)
    console.log(estadoSabado)

    return (
            <>
             {
                seleccionado 
                    ? <li 
                    data-id={`${ hora }`}
                    className={`${ (!estadoSabado ? 'btn-deshabilitar' : 'sabado li-hora seleccionado') } ` } > 
                    { nuevaHora }
                </li>
                    : 
                    <li 
                    data-id={`${ hora }`}
                    className={`${ (!estadoSabado ? 'btn-deshabilitar' : 'sabado li-hora') } ` } > 
                    { nuevaHora }
                </li>
             }
                
              
        
         </>
       
    )
}

export default Hora