
import "./ReservaHora.css"

import 'react-calendar/dist/Calendar.css';

import Navbar from "../Navbar/Navbar";
import Calendar from 'react-calendar';
import { useState } from "react";
import Imagen from "../../../public/vista.jpg"
const ReservaHora = () => {
    const [value, onChange] = useState(new Date());
    
    return (
        <> 
            <Navbar /> 

            <section className="container">
                <h1> Reservar Hora </h1>
            </section>

            <section className="flex section-calendario">

            <div className="div-calendario flex-column">
            <h2> Fechas Disponibles </h2> 
                <Calendar 
                    onChange={onChange} 
                    value={value} 
                    locale={"es-uy"} 
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

                <div className="portada-reservar-hora">
                    <img src={Imagen} className="imagen-reservar-hora" alt="" />
                </div>
              
                <div className="div-reservar-hora">

                    <ul className="ul-formulario-contacto flex-column-center">
                            <li className="li-formulario-contacto">
                                <label htmlFor="">Nombre </label>
                                <input type="text" />
                            </li>
                            <li  className="li-formulario-contacto">
                                <label htmlFor=""> Apellido  </label>
                                <input type="text" />
                            </li>
                            <li  className="li-formulario-contacto">
                                <label htmlFor=""> Correo Electronico </label>
                                <input type="text" />
                            </li>
                            <li  className="li-formulario-contacto">
                                <label htmlFor=""> Telefono </label>
                                <input type="text" />
                            </li>
                            <li  className="li-formulario-contacto">
                                <label htmlFor=""> Titulo </label>
                                <input type="text" />
                            </li>
                            <li  className="li-formulario-contacto">
                                <label htmlFor=""> Mensaje </label>
                                <textarea type="text" />
                            </li>

                            <button> Enviar </button>
                    </ul>
                </div>
            </section>

         
            
            
        </>
    )
}

export default ReservaHora