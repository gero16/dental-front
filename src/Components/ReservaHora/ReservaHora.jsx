
import "./ReservaHora.css"

import 'react-calendar/dist/Calendar.css';

import Navbar from "../Navbar/Navbar";
import Calendar from 'react-calendar';
import { useState } from "react";
import Imagen from "../../../public/vista.jpg"
import Footer from "../Footer/Footer";
import Hora from "./Hora";
const ReservaHora = () => {

    const [value, onChange] = useState(new Date());

    // Tendre que tener un objeto con todas las horas y su true o false 

    const horaSeleccionada = {
        "09:00-09:30" : false,
        "09:30-10:00": false
    }

    console.log(horaSeleccionada["09:00-09:30"])

    const [hora, setHora] = useState(false)
    const [horaAnterior, setHoraAnterior] = useState("")
    const [dia, setDia] = useState()
    const [sabado, setSabado] = useState(false)
    const [habilitado, setHabilitado] = useState(false)
    

    const seleccionarHora = (hora) => {
        
        const horaSeleccionada = hora.target.dataset.id
        console.log(horaSeleccionada)

        console.log(horaAnterior.length === 0)
        if(horaAnterior.length === 0) {
            setHora(hora[`${horaSeleccionada}`] = true)
            // Para posteriori
            setHoraAnterior(horaSeleccionada)
        }

        if (horaAnterior > 0) {
            setHora(hora[`${horaSeleccionada}`] = true)
            setHora(hora[horaAnterior] = false)
            // Para posteriori
            setHoraAnterior(horaSeleccionada)
        }
        
        console.log(hora)
        //return hora
    }
    
    const seleccionarDia = (e) => {
        console.log(e)
        const obtenerDia = e.toString().split(" ")
        console.log(obtenerDia[0])
        if(obtenerDia[0] === "Sat") setSabado(true)
        if(obtenerDia[0] !== "Sat") setSabado(false)


    }
    return (
        <> 
            <Navbar /> 


            <section className="fondo-blanco">

                <ul className="flex-column-center lista-reservar" >
                    <li> Martes y Jueves 13:00 - 20:00 (Las Piedras) </li>
                    <li> Miercoles 13:00 - 20:00 (Montevideo) </li>
                    <li> Sabados 09:00 - 14:00 (Las Piedras) </li>
                </ul>

                <section className="flex section-calendario">

                    <div className="div-calendario flex-column p-20">
                    <h2> Fechas Disponibles </h2> 
                    
                        <Calendar 
                            onChange={(e) => seleccionarDia(e)} 
                            value={value} 
                            locale={"es-uy"} 
                            tileDisabled= { ({ date, view }) => 
                                (view === "month" && date.getDay() === 0) 
                                    || date.getDay() === 1 || date.getDay() === 5 }  
                        />
                    </div>

                    <section className="flex-column section-horas-disponibles p-20">

                        <h2> Horarios Disponibles </h2> 
                        <div className="flex-center div-horas">   

                            <ul className="lista-horas-disponibles-1" onClick={(e) => seleccionarHora(e)}>
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

                            <ul className="lista-horas-disponibles-2">
                                <li data-id="13:00-13:30" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 13:00 - 13:30 </li>
                                <li data-id="13:30-14:00" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 13:30 - 14:00 </li>
                                <li data-id="14:00-14:30" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 14:00 - 14:30 </li>
                                <li data-id="14:30-15:00" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 14:30 - 15:00 </li>
                                <li data-id="14:30-15:00" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 15:00 - 15:30 </li>
                                <li data-id="14:30-15:00" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 15:30 - 16:00 </li>
                                <li data-id="16:00-16:30" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 16:00 - 16:30 </li>
                            </ul>
                            <ul className="lista-horas-disponibles-2">
                                <li data-id="" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 16:30 - 17:00 </li>
                                <li data-id="" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 17:00 - 17:30 </li>
                                <li data-id="" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 17:30 - 18:00 </li>
                                <li data-id="" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 18:00 - 18:30 </li>
                                <li data-id="" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 18:30 - 19:00 </li>
                                <li data-id="" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 19:00 - 19:30 </li>
                                <li data-id="" className={`${ (sabado ? 'btn-deshabilitar' : 'li-hora') } `}> 19:30 - 20:00 </li>
                                
                            </ul>
                        </div>
                    
                    
                    </section> 

                </section>

                <section className="flex-center section-formulario-contacto">

                    <img src={Imagen} className="imagen-reservar-hora" alt="" />
                    
                
                    <div className="div-reservar-hora">

                        <ul className="ul-formulario-reserva flex-column-center">
                                <li>
                                    <h2> Llenar Formulario </h2>
                                </li>
                                <li className="li-formulario">
                                    <label htmlFor="">Nombre </label>
                                    <input type="text" />
                                </li>
                                <li  className="li-formulario">
                                    <label htmlFor=""> Apellido  </label>
                                    <input type="text" />
                                </li>
                                <li  className="li-formulario">
                                    <label htmlFor=""> Correo Electronico </label>
                                    <input type="text" />
                                </li>
                                <li  className="li-formulario">
                                    <label htmlFor=""> Telefono </label>
                                    <input type="text" />
                                </li>
                                <li  className="li-formulario">
                                    <label htmlFor=""> Titulo </label>
                                    <input type="text" />
                                </li>
                                <li  className="li-formulario">
                                    <label htmlFor=""> Mensaje </label>
                                    <textarea type="text" />
                                </li>

                                <span className="btn-enviar-reserva"> Enviar </span>
                        </ul>
                    </div>

                </section>

            </section>

         

         
            <Footer> </Footer>
            
        </>
    )
}

export default ReservaHora