import { useState } from "react";
import Navbar from "../../Navbar/Navbar"

import { Link as Navigate, NavLink,} from "react-router-dom";
import { useEffect } from "react";
import Calendar from 'react-calendar';
import Footer from "../../Footer/Footer";


const AdminReservaHora = () => {

    const [horaSeleccionada, setHoraSeleccionada] = useState("")
    const [sabado, setSabado] = useState(false)
    const [habilitado, setHabilitado] = useState(false)

    const [datosAgenda, setDatosAgenda] = useState({
        dia: "",
        hora: "",
        nombre:"",
        correo: "",
        asunto: "",
        mensaje: ""
    })

    const cambiarEstadoHora = (e) => {
        setHoraSeleccionada()
    }

    return (

    <> 

        <Navbar /> 

        <section className="fondo-blanco-img">

        <ul className="flex-column-center lista-reservar color-blog small" >
            <li> Martes y Jueves 13:00 - 20:00 (Las Piedras) </li>
            <li> Miercoles 13:00 - 20:00 (Montevideo) </li>
            <li> Sabados 09:00 - 14:00 (Las Piedras) </li>
        </ul>

    
        <section className="flex-center">
            <h1 className="h1-reservar"> Habitar/Deshabilitar turnos </h1>
        </section>
        <section className="container flex-column-center section-contacto-turno">

            <article className="flex section-calendario">

            <div className="div-calendario flex-column">
            <h2> Fechas Disponibles </h2> 

                <Calendar 
                    onChange={(e) => seleccionarDia(e)} 
                    onClickDay={(e) => console.log(e)} 
                    locale={"es-uy"} 
                    tileDisabled= { ({ date, view }) => 
                        (view === "month" && date.getDay() === 0) 
                            || date.getDay() === 1 || date.getDay() === 5 }  
                />
                
            </div>

        
            </article>
            
            <article className="flex-column section-horas-disponibles p-20">

                <h2> Horarios Disponibles </h2> 
                <div className="flex-center div-horas">   

                    <ul className="lista-horas-disponibles-1" onClick={(e) => seleccionarHora(e) }>
                        {
                            /*             <Hora seleccionado={hora} estadoSabado={sabado} hora={"09:00-09:30"} > </Hora>  
                        <Hora seleccionado={hora} estadoSabado={sabado} hora={"09:30-10:00"} > </Hora>      */
                        }

                        <li data-id="09:00-09:30" className={ `${ (!sabado ? 'btn-deshabilitar' : 'sabado li-hora' ) } ` } > 09:00 - 09:30 </li>
                        <li data-id="09:30-10:00" className={`${ (!sabado ? 'btn-deshabilitar' : 'sabado li-hora') } `} > 09:30 - 10:00 </li>
                        <li data-id="10:00-10:30" className={`${ (!sabado ? 'btn-deshabilitar' : 'sabado li-hora') } `} > 10:00 - 10:30 </li>
                        <li data-id="10:30-11:30" className={`${ (!sabado ? 'btn-deshabilitar' : 'sabado li-hora') } `} > 10:30 - 11:30 </li>
                        <li data-id="11:30-12:00" className={`${ (!sabado ? 'btn-deshabilitar' : 'sabado li-hora') } `} > 11:30 - 12:00 </li>
                        <li data-id="12:00-12:30" className={`${ (!sabado ? 'btn-deshabilitar' : 'sabado li-hora') } `} > 12:00 - 12:30 </li>
                        <li data-id="12:30-13:00" className={`${ (!sabado ? 'btn-deshabilitar' : 'sabado li-hora') } `} > 12:30 - 13:00 </li>
                    </ul>

                    <ul className="lista-horas-disponibles-2"  onClick={(e) => seleccionarHora(e)} >
                        <li data-id="13:00-13:30" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 13:00 - 13:30 </li>
                        <li data-id="13:30-14:00" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 13:30 - 14:00 </li>
                        <li data-id="14:00-14:30" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 14:00 - 14:30 </li>
                        <li data-id="14:30-15:00" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 14:30 - 15:00 </li>
                        <li data-id="14:30-15:00" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 15:00 - 15:30 </li>
                        <li data-id="14:30-15:00" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 15:30 - 16:00 </li>
                        <li data-id="16:00-16:30" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 16:00 - 16:30 </li>
                    </ul>
                    <ul className="lista-horas-disponibles-2" onClick={(e) => seleccionarHora(e)}>
                        <li data-id="" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 16:30 - 17:00 </li>
                        <li data-id="" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 17:00 - 17:30 </li>
                        <li data-id="" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 17:30 - 18:00 </li>
                        <li data-id="" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 18:00 - 18:30 </li>
                        <li data-id="" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 18:30 - 19:00 </li>
                        <li data-id="" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 19:00 - 19:30 </li>
                        <li data-id="" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 19:30 - 20:00 </li>
                        
                    </ul>
                </div>


                </article> 

            </section>

        </section>

        <Footer> </Footer>
                                      
         
    </>
    )
}

export default AdminReservaHora