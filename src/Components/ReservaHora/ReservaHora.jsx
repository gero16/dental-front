
import "./ReservaHora.css"
import './Calendar.css';


import Navbar from "../Navbar/Navbar";
import Calendar from 'react-calendar';
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
const ReservaHora = () => {

    const [horasDisponibles, setHorasDisponibles] = useState([])
    const url = "global-system-back-production.up.railway.app/horarios"

    async function fetchHorasDisponibles() {
        try {
          const response = await fetch(url);
          console.log(response);
      
          if (!response.ok) {
            throw new Error('Error al obtener los horarios: ' + response.statusText);
          }
      
          const contentType = response.headers.get('content-type');
          if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Respuesta no válida: No es JSON');
          }
      
          const data = await response.json();
          if (data && data.horarios) {
            console.log(data.horarios);
            setHorasDisponibles(data.horarios);
            return data.horarios;
          }
        } catch (error) {
          console.error(error.message);
          return null;
        }
      }
      
      
      useEffect(() => {
            fetchHorasDisponibles()
            
            console.log(horasDisponibles)
      }, [])

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
    
    const conversionDias = {
        "Tue" : "Martes",
        "Wed" : "Miercoles",
        "Thu" : "Jueves",
        "Say" : "Sabado"     
    }

    const seleccionarHora = (hora) => {
        
        const horaElegida = hora.target.dataset.id
        console.log(horaElegida)
        console.log(horaElegida.target)

        setHoraSeleccionada(horaElegida)
        console.log(horaSeleccionada)
        setDatosAgenda({...datosAgenda,  hora : horaElegida})
    }
    
    const seleccionarDia = (e) => {

        console.log(e)
        const obtenerDia = e.toString().split(" ")
        console.log(obtenerDia[0])
        if(obtenerDia[0] === "Sat") setSabado(true)
        if(obtenerDia[0] !== "Sat") setSabado(false)

        let nombreDay = obtenerDia[0] 
        setDatosAgenda({...datosAgenda,  dia : conversionDias[nombreDay]})
        
    }

    console.log(datosAgenda)
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
                    <h1 className="h1-reservar"> Reserve un turno!</h1>
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
          

                <main className="flex-center section-formulario-contacto">

                    <div className="div-reservar-hora ">

                        <ul className="ul-formulario-reserva flex-column-center">
                                <li>
                                    <h2> Llenar Formulario </h2>
                                </li>
                                <li className="li-formulario">
                                    <label htmlFor="">Nombre Completo </label>
                                    <input type="text" onChange={(evento) => setDatosAgenda({...datosAgenda,  nombre : evento.target.value} )} />
                                </li>
                        
                                <li  className="li-formulario">
                                    <label htmlFor=""> Correo Electronico </label>
                                    <input type="text" onChange={(evento) => setDatosAgenda({...datosAgenda,  correo : evento.target.value} )} />
                                </li>
                                <li  className="li-formulario">
                                    <label htmlFor=""> Telefono </label>
                                    <input type="text" onChange={(evento) => setDatosAgenda({...datosAgenda,  telefono : evento.target.value} )} />
                                </li>
                                <li  className="li-formulario">
                                    <label htmlFor=""> Mensaje </label>
                                    <textarea type="text" onChange={(evento) => setDatosAgenda({...datosAgenda,  mensaje : evento.target.value} )} />
                                </li>
                                
                                <div className="text-center">
                                    <span className="btn-enviar-reserva"> Enviar </span>
                                </div>
                           
                        </ul>
                    </div>

                </main>


            </section>

         

         
            <Footer> </Footer>
            
        </>
    )
}

export default ReservaHora