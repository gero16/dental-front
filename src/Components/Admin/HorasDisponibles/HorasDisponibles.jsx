import { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar"
import Calendar from "react-calendar";

const HorasDisponibles = () => {
    const [horasDisponibles, setHorasDisponibles] = useState([])
    const [horaSeleccionada, setHoraSeleccionada] = useState("")

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

            // setHorasDisponibles esta dentro de esta funcion
            deshabilitarHorariosDia(diaSeleccionado, data.horarios)
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
        setDiaSeleccionado(conversionDias[nombreDay])
     
    }

   
    

      useEffect(() => {
            fetchHorasDisponibles()
      }, [])


      const inicioSabado = "09:00-09:30"
      const finSabado = "12:30-13:00"


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
    useEffect(() => {
       

        deshabilitarHorariosDia(diaSeleccionado, horasDisponibles)


  }, [diaSeleccionado])

  const deshabilitarHorario = (hora) => {
    const horaElegida = hora.target.dataset.id;
    // Crear una copia de horasDisponibles
    const nuevaHorasDisponibles = horasDisponibles.map((elemento) => {
        // Si el horario coincide con el horario elegido, deshabilitarlo
        if (elemento.horario === horaElegida) {
            return {
                ...elemento,
                disponible: !elemento.disponible
            };
        }
        // De lo contrario, mantener el elemento sin cambios
        return elemento;
    });
    // Establecer el nuevo estado
    setHorasDisponibles(nuevaHorasDisponibles);
};


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
                
                <article className="flex-column section-horas-disponibles">

                    <h2> Horarios Disponibles </h2> 
                    <div className="flex-center div-horas">   

                        <ul className="lista-horas-disponibles-1" onClick={(e) => deshabilitarHorario(e) }>
                            
                           { horasDisponibles.slice(0, indiceUno + 1).map((elemento, index) => (
                                <li 
                                    key={ index } 
                                    className={!elemento.habilitado  || !elemento.disponible  ? "btn-deshabilitar" : "btn-habilitado"}
                                    data-id={elemento.horario}
                                    > 
                                    { elemento.horario } 
                                </li>
                            ))
                           }
                        </ul>

                        <ul className="lista-horas-disponibles-2"  onClick={(e) => deshabilitarHorario(e)} >
                            { horasDisponibles.slice(indiceDosInicio,  indiceDosFinal +1).map((elemento, index) => (
                                    <li 
                                        key={ index } 
                                        className={!elemento.habilitado  || !elemento.disponible  ? "btn-deshabilitar" : "btn-habilitado"}
                                        data-id={elemento.horario}
                                        > { elemento.horario }

                                    </li>
                                ))
                            }
                        </ul>

                        <ul className="lista-horas-disponibles-2" onClick={(e) => deshabilitarHorario(e)}>
                            { horasDisponibles.slice(indiceTresInicio,  indiceTresFinal +1).map((elemento, index) => (
                                    <li 
                                        key={ index } 
                                        className={!elemento.habilitado  || !elemento.disponible  ? "btn-deshabilitar" : "btn-habilitado"}
                                        data-id={elemento.horario}
                                        > { elemento.horario } 
                                        </li>
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