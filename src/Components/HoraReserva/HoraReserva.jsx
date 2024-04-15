
import "./HoraReserva.css"
import './Calendar.css';


import Navbar from "../Navbar/Navbar";
import Calendar from 'react-calendar';
import { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { Context } from "../../Context/Context"

const HoraReserva = () => {
    const { transformarFecha, conversionDias, fetchHorasDisponibles, horasDisponibles, diaSeleccionado, 
        horaSeleccionada,fechaSeleccionada, seleccionarDia, seleccionarHora, setDatosAgenda, datosAgenda } = useContext(Context)
       
    const indiceUno = 6; 
    const indiceDosInicio = 7; 
    const indiceDosFinal = 13; 
    const indiceTresInicio = 14; 
    const indiceTresFinal = 20; 

    
    const calcularDisponibilidad = (elemento) => {
        let clases = "btn-habilitado"; // Clase por defecto
        if (!elemento.habilitado || !elemento.disponible) {
          clases = "btn-deshabilitar"; // Cambiar clase si no está habilitado o disponible
        }
      
        if (horaSeleccionada === elemento.horario && (elemento.habilitado || elemento.disponible) ) {
        
          clases += " btn-elegido"; // Agregar clase si cumple la condición de elegido
        }
      
        return clases;
      };
      
    
    const fetchInfoAgenda = async (data) => {
        console.log(data)
        let response = await fetch(`http://localhost:3000/horarios/agendar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify(data)
        });
          
        let result = await response.json();
        if(result) {
            console.log(result);
        }
    }


    useEffect(() => {
        var fechaHoy = new Date();
        const fechaFormateada = transformarFecha(fechaHoy)
        console.log(fechaFormateada)
        fetchHorasDisponibles(fechaFormateada)

    }, [])

    useEffect(() => {

        fetchHorasDisponibles(fechaSeleccionada)

    }, [fechaSeleccionada])

    
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
                        
                        <ul className="flex-column">
                            <li> 
                                <span className="color-calendario-1 cuadrado-color"> </span> 
                                <span> Fecha Seleccionada </span> 
                            </li>
                            <li> 
                                <span className="color-calendario-2 cuadrado-color"> </span> 
                                <span> Fecha Actual </span> 
                            </li>
                            <li> 
                                <span className="color-calendario-3 cuadrado-color"> </span> 
                                <span> Fechas Deshabilitadas </span> 
                            </li>
                        </ul>
                    </div>

                    </article>
                    
                    <article className="flex-column section-horas-disponibles p-20">

                        <h2> Horarios Disponibles </h2> 
                        <div className="flex-center div-horas">   

                            <ul className="lista-horas-disponibles-1" onClick={(e) => seleccionarHora(e) }>
                                
                            { horasDisponibles.length > 0 ?
                            
                            horasDisponibles.slice(0, indiceUno + 1).map((elemento, index) => (
                                   <li  key={index}
                                        className={calcularDisponibilidad(elemento)}
                                        data-id={elemento.horario}
                                    >
                                    { elemento.horario.split("-").join(" - ") }
                                 </li>
                                ))   
                                : <>  </>
                            }
                            </ul>

                            <ul className="lista-horas-disponibles-2 "  onClick={(e) => seleccionarHora(e)} >
                                { horasDisponibles.length > 0 ?
                                    horasDisponibles.slice(indiceDosInicio,  indiceDosFinal +1).map((elemento, index) => (
                                
                                <li key={index}
                                    className={calcularDisponibilidad(elemento)}
                                    data-id={elemento.horario}
                                >
                                    { elemento.horario.split("-").join(" - ") }
                                </li>
                                    ))
                                    : <> No hay horarios disponibles para los dias { diaSeleccionado }!  </>
                                }
                            </ul>

                            <ul className="lista-horas-disponibles-2" onClick={(e) => seleccionarHora(e)}>
                                { horasDisponibles.length > 0 ?
                                    horasDisponibles.slice(indiceTresInicio,  indiceTresFinal +1).map((elemento, index) => (
                                        <li key={index}
                                            className={calcularDisponibilidad(elemento)}
                                            data-id={elemento.horario}
                                        >
                                            { elemento.horario.split("-").join(" - ") }
                                        </li>
                                    ))
                                    : <> </>
                                }
                            </ul>
                            </div>
                            <ul className="flex-column">
                                <li> 
                                    <span className="color-horarios-1 cuadrado-color"> </span> 
                                    <span> Horario Seleccionado </span> 
                                </li>
                                <li> 
                                    <span className="color-horarios-2 cuadrado-color"> </span> 
                                    <span> Horarios Disponibles </span> 
                                </li>
                                <li> 
                                    <span className="color-horarios-3 cuadrado-color"> </span> 
                                    <span> Horario Deshabilitado  </span> 
                                </li>
                            </ul>

                    </article> 

                </section>
          

                <main className="flex-center section-formulario-contacto">

                    <div className="div-reservar-hora ">

                        <ul className="ul-formulario-reserva flex-column-center gap-30">
                                <li>
                                    <h2> Llenar Formulario </h2>
                                </li>
                                <li className="li-formulario flex-center-center">
                                    <label htmlFor="">Nombre Completo </label>
                                    <input className="input-reserva" type="text" onChange={(evento) => setDatosAgenda({...datosAgenda,  nombre : evento.target.value} )} />
                                </li>
                        
                                <li  className="li-formulario flex-center-center">
                                    <label htmlFor=""> Correo Electronico </label>
                                    <input className="input-reserva" type="text" onChange={(evento) => setDatosAgenda({...datosAgenda,  correo : evento.target.value} )} />
                                </li>
                                <li className="li-formulario flex-center-center">
                                    <label htmlFor=""> Telefono </label>
                                    <input className="input-reserva" type="text" onChange={(evento) => setDatosAgenda({...datosAgenda,  telefono : evento.target.value} )} />
                                </li>
                                <li  className="li-formulario">
                                    <label htmlFor=""> Mensaje </label>
                                    <textarea type="text" onChange={(evento) => setDatosAgenda({...datosAgenda,  mensaje : evento.target.value} )} />
                                </li>
                                
                                <li className="li-formulario text-center">
                                    <span>  </span>
                                    <span className="btn-enviar-reserva" onClick={() => fetchInfoAgenda(datosAgenda) }> Enviar </span>
                                </li>
                               
                            
                           
                        </ul>
                    </div>

                </main>


            </section>

         

         
            <Footer> </Footer>
            
        </>
    )
}

export default HoraReserva