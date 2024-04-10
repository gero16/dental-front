
import "./HoraReserva.css"
import './Calendar.css';


import Navbar from "../Navbar/Navbar";
import Calendar from 'react-calendar';
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";


const HoraReserva = () => {

    const [horasDisponibles, setHorasDisponibles] = useState([])
    const [diaSeleccionado, setDiaSeleccionado] = useState("Martes")

    const [horaSeleccionada, setHoraSeleccionada] = useState("")

    const [datosAgenda, setDatosAgenda] = useState({
        dia: "",
        hora: "",
        nombre:"",
        correo: "",
        asunto: "",
        mensaje: ""
    })

    const url = "https://global-system-back-production.up.railway.app/horarios"

    const deshabilitarHorariosDia = (dia, arrayHoras) => {
        const diaLowerCase =  dia.toLowerCase()
        console.log(diaLowerCase)
      if(diaLowerCase === "sabado") {
          const horariosSabado = arrayHoras.map((hora) => ({
              ...hora,
              habilitado: hora.dia === "sabado" ? true : false,
              disponible: hora.dia === "sabado" ? true : false
          }));
          console.log(horariosSabado)
          setHorasDisponibles(horariosSabado)
      }

      
      if(diaLowerCase !== "sabado") {
          const horariosSemanales = arrayHoras.map((hora) => ({
              ...hora,
              habilitado: hora.dia === "sabado" ? false : true,
              disponible: hora.dia === "sabado" ? false : true
          }));

          console.log(horariosSemanales)
          setHorasDisponibles(horariosSemanales)
      }
      return horasDisponibles
    }

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

            // setHorasDisponibles esta dentro de esta funcion
            deshabilitarHorariosDia(diaSeleccionado, data.horarios)
          }
        } catch (error) {
          console.error(error.message);
          return null;
        }
    }
      
    const conversionDias = {
        "Tue" : "Martes",
        "Wed" : "Miercoles",
        "Thu" : "Jueves",
        "Sat" : "Sabado"     
    }

    const indiceUno = 6; 
    const indiceDosInicio = 7; 
    const indiceDosFinal = 13; 
    const indiceTresInicio = 14; 
    const indiceTresFinal = 20; 


    const seleccionarHora = (hora) => {

            console.log(hora.target.dataset)
        const horaElegida = hora.target.dataset.id
        console.log(horaElegida)

        setHoraSeleccionada(horaElegida)
        console.log(horaSeleccionada)
        setDatosAgenda({...datosAgenda,  hora : horaElegida})

    }
    
    
    const seleccionarDia = (e) => {
        const obtenerDia = e.toString().split(" ")
        console.log(obtenerDia[0])
        let nombreDay = obtenerDia[0] 
        setDiaSeleccionado(conversionDias[nombreDay])
     
    }

          
    const calcularClases = (elemento) => {
        let clases = "btn-habilitado"; // Clase por defecto
        
        if (!elemento.habilitado || !elemento.disponible) {
          clases = "btn-deshabilitar"; // Cambiar clase si no está habilitado o disponible
        }
      
        if (horaSeleccionada === elemento.horario && (elemento.habilitado || elemento.disponible) ) {
        
          clases += " btn-elegido"; // Agregar clase si cumple la condición de elegido
        }
      
        return clases;
      };
      
      
    useEffect(() => {
        fetchHorasDisponibles()
        
        console.log(horasDisponibles)
    }, [])

    useEffect(() => {
        deshabilitarHorariosDia(diaSeleccionado, horasDisponibles)

    }, [diaSeleccionado])


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
                                
                            { horasDisponibles.slice(0, indiceUno + 1).map((elemento, index) => (
                                   <li  key={index}
                                        className={calcularClases(elemento)}
                                        data-id={elemento.horario}
                                    >
                                    { elemento.horario.split("-").join(" - ") }
                                 </li>
                                ))
                            }
                            </ul>

                            <ul className="lista-horas-disponibles-2"  onClick={(e) => seleccionarHora(e)} >
                                { horasDisponibles.slice(indiceDosInicio,  indiceDosFinal +1).map((elemento, index) => (
                                
                                <li key={index}
                                    className={calcularClases(elemento)}
                                    data-id={elemento.horario}
                                >
                                    { elemento.horario.split("-").join(" - ") }
                                </li>
                                    ))
                                }
                            </ul>

                            <ul className="lista-horas-disponibles-2" onClick={(e) => seleccionarHora(e)}>
                                { horasDisponibles.slice(indiceTresInicio,  indiceTresFinal +1).map((elemento, index) => (
                                        <li key={index}
                                            className={calcularClases(elemento)}
                                            data-id={elemento.horario}
                                        >
                                            { elemento.horario.split("-").join(" - ") }
                                        </li>
                                    ))
                                }
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

export default HoraReserva