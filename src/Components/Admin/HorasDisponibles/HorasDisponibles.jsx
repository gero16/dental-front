import { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar"
import Calendar from "react-calendar";

const HorasDisponibles = () => {
    const [horasDisponibles, setHorasDisponibles] = useState([])
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

    const [diaSeleccionado, setDiaSeleccionado] = useState("Martes")
    
    const conversionDias = {
        "Tue" : "Martes",
        "Wed" : "Miercoles",
        "Thu" : "Jueves",
        "Sat" : "Sabado"     
    }


    const url = "https://global-system-back-production.up.railway.app/horarios"

    
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
      
      
    const seleccionarDia = (e) => {
        const obtenerDia = e.toString().split(" ")
        console.log(obtenerDia[0])
        let nombreDay = obtenerDia[0] 
        console.log(conversionDias)
        console.log(conversionDias[nombreDay])
        setDiaSeleccionado(conversionDias[nombreDay])
     
    }

      useEffect(() => {
            fetchHorasDisponibles()
      }, [])


      const inicioSabado = "09:00-09:30"
      const finSabado = "12:30-13:00"

      useEffect(() => {
       
     console.log(diaSeleccionado)
  }, [diaSeleccionado])


      const deshabilitarHorario = (horario) => {
        const buscarHorario = horasDisponibles
        console.log(horario)

        let horarioEncontrado = buscarHorario.find((e) => e.horario === (horario.target.dataset.id))
        console.log(horarioEncontrado)
        horarioEncontrado.disponible = false
      }


      const indiceUno = 6; 
      const indiceDosInicio = 7; 
      const indiceDosFinal = 13; 
      const indiceTresInicio = 14; 
      const indiceTresFinal = 20; 


    return (

        <> 
            <Navbar> </Navbar>
            <h1> Horas Disponibles </h1>

            
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

                        <ul className="lista-horas-disponibles-1" onClick={(e) => deshabilitarHorario(e) }>
                            
                           { horasDisponibles.slice(0, indiceUno + 1).map((elemento, index) => (
                                <li 
                                    key={ index } 
                                    className={diaSeleccionado !=="Sabado" ? "btn-deshabilitar" : ""}> 
                                    { elemento.horario } 
                                </li>
                            ))
                           }
                        </ul>

                        <ul className="lista-horas-disponibles-2"  onClick={(e) => deshabilitarHorario(e)} >
                            { horasDisponibles.slice(indiceDosInicio,  indiceDosFinal +1).map((elemento, index) => (
                                    <li key={ index } className={diaSeleccionado === "Sabado" ? "btn-deshabilitar" : ""}> { elemento.horario } </li>
                                ))
                            }
                        </ul>

                        <ul className="lista-horas-disponibles-2" onClick={(e) => deshabilitarHorario(e)}>
                            { horasDisponibles.slice(indiceTresInicio,  indiceTresFinal +1).map((elemento, index) => (
                                    <li key={ index } className={diaSeleccionado === "Sabado"? "btn-deshabilitar" : ""}> { elemento.horario } </li>
                                ))
                            }
                        </ul>
                    </div>


                </article> 

            </section>

        </>
    )
}

export default HorasDisponibles