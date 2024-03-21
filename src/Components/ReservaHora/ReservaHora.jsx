
import "./ReservaHora.css"

import 'react-calendar/dist/Calendar.css';

import Navbar from "../Navbar/Navbar";
import Calendar from 'react-calendar';
import { useState } from "react";
import Imagen from "../../../public/vista.jpg"
import Footer from "../Footer/Footer";
const ReservaHora = () => {
    const [value, onChange] = useState(new Date());


    function diasDeshabilitados(date) {
        const dia = date.getDay(); // Intentamos usar getDay primero
        if (typeof dia !== 'number') { // Si falla, usamos una lógica alternativa
          const options = { weekday: 'long' };
          const diaString = new Intl.DateTimeFormat('es-UY', options).format(date);
          return diaString === 'domingo' || diaString === 'lunes' || diaString === 'viernes';
        }
        return dia === 0 || dia === 1 || dia === 5; // Deshabilita si getDay funciona
      }

    
    return (
        <> 
            <Navbar /> 

            <section className="portada-reservar flex-center-center">
                
                <h1 className="h1-reservar text-center"> Reservar Hora </h1>
             
            </section>

            <ul className="flex-column-center m-10 lista-reservar" >
                <li> Martes y Jueves 13:00 - 20:00 (Las Piedras) </li>
                <li> Miercoles 13:00 - 20:00 (Montevideo) </li>
                <li> Sabados 09:00 - 14:00 (Las Piedras) </li>
            </ul>

            <section className="flex section-calendario">

            <div className="div-calendario flex-column">
            <h2> Fechas Disponibles </h2> 
                <Calendar 
                    onChange={onChange} 
                    value={value} 
                    locale={"es-uy"} 
                    tileDisabled={({ date, view }) =>
                    (view === "month" && date.getDay() === 0) || date.getDay() === 1 || date.getDay() === 5
                     }
                    
                />
                
            </div>
                <section className="flex-column section-horas-disponibles ">

                    <h2> Horarios Disponibles </h2> 
                    <div className="flex-center div-horas">   
                        <ul className="lista-horas-disponibles-1">
                        <li> 13:00 - 13:30 </li>
                        <li> 13:30 - 14:00 </li>
                        <li> 14:00 - 14:30 </li>
                        <li> 14:30 - 15:00 </li>
                        <li> 15:00 - 15:30 </li>
                        <li> 15:30 - 16:00 </li>
                        <li> 16:00 - 16:30 </li>
                    </ul>

                    <ul className="lista-horas-disponibles-2">
                        <li> 16:30 - 17:00 </li>
                        <li> 17:00 - 17:30 </li>
                        <li> 17:30 - 18:00 </li>
                        <li> 18:00 - 18:30 </li>
                        <li> 18:30 - 19:00 </li>
                        <li> 19:00 - 19:30 </li>
                        <li> 19:30 - 20:00 </li>
                    </ul>
                    </div>
                  
                 
                </section> 

            </section>

            <section className="flex-center section-formulario-contacto">

            
                <img src={Imagen} className="imagen-reservar-hora" alt="" />
                
            
                <div className="div-reservar-hora">

                    <ul className="ul-formulario-reserva flex-column-center">
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

         
            <Footer> </Footer>
            
        </>
    )
}

export default ReservaHora