import { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar"
import Calendar from "react-calendar";

const HorasDisponibles = () => {
    const [horasDisponibles, setHorasDisponibles] = useState([])
    const [horaSeleccionada, setHoraSeleccionada] = useState("")
    const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date())

    const [diaSeleccionado, setDiaSeleccionado] = useState("Martes")
    
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



    async function fetchHorasDisponibles(fecha) {
        console.log(fecha)
      
        try {
            let response = await fetch(`http://localhost:3000/horarios/fechas/${fecha}`, {
                method: 'POST',
            });

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
            console.log(data.horarios)
            setHorasDisponibles(data.horarios)
          }
        } catch (error) {
          console.error(error.message);
          return null;
        }
    }

      
  
    const seleccionarDia = (e) => {
        console.log(e)
        const obtenerDia = e.toString().split(" ")
        console.log(obtenerDia)
        let nombreDay = obtenerDia[0] 

        setDiaSeleccionado(conversionDias[nombreDay])
        setFechaSeleccionada(e)
    }



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

const transformarFecha = (fechaSinFormato) => {
    // "Thu Apr 12 2024 00:00:00 GMT-0300"
    let fechaOriginal = new Date(fechaSinFormato);

    let año = fechaOriginal.getFullYear();
    let mes = ("0" + (fechaOriginal.getMonth() + 1)).slice(-2); 
    let dia = ("0" + fechaOriginal.getDate()).slice(-2);
    let fechaFormateada = año + "-" + mes + "-" + dia;
    return fechaFormateada
    
}


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
  

const fetchCambiarHorarios = async (datos) => {
    console.log(datos)
    console.log(diaSeleccionado)
    const horasFiltradas = datos.filter((e) => e.dia === diaSeleccionado)

    const horariosDiposniblesFecha = {
        horas : horasFiltradas,
        dia : diaSeleccionado,
        fecha : new Date("2021-03-25")
    }

    let response = await fetch(`http://localhost:3000/horarios/agendar`, {
        method: 'POST',
        body: JSON.stringify(datos)
    });
        
    console.log(response)
}


function obtenerDiasMesActual() {
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth();

    // Obtener el número de días en el mes actual
    const numeroDias = new Date(añoActual, mesActual + 1, 0).getDate();

    // Obtener el día de la semana en que comienza el mes actual (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
    const primerDiaSemana = new Date(añoActual, mesActual, 1).getDay();

    // Array para almacenar los días del mes actual con sus fechas
    const diasDelMes = [];

    // Iterar sobre los días del mes y añadirlos al array
    for (let dia = 1; dia <= numeroDias; dia++) {
        diasDelMes.push({
            diaSemana: (primerDiaSemana + dia - 1) % 7, // Convertir al formato 0-6
            fecha: new Date(añoActual, mesActual, dia)
        });
    }

    return diasDelMes;
}


const seleccionarHora = (hora) => {

    console.log(hora.target.dataset)
    const horaElegida = hora.target.dataset.id
    console.log(horaElegida)

    setHoraSeleccionada(horaElegida)
    console.log(horaSeleccionada)
    setDatosAgenda({...datosAgenda,  horario : horaElegida})

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




// Ejemplo de uso
const diasMesActual = obtenerDiasMesActual();
console.log(diasMesActual);

    return (

        <> 
            <Navbar> </Navbar>
            
            <section className="flex-center">
                    <h1 className="h1-reservar"> Habilitar/Deshabilitar - Horarios  </h1>
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
                
                <article className="flex-column section-horas-disponibles">

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
                                : <> Cargando horariooooooos  1 </>
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
                                    : <> Cargando horariooooooos 2 </>
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
                                    : <> Cargando horariooooooos 3 </>
                                }
                            </ul>
                    </div>


                </article> 

                <section className="container">
                    <span className="btn-deshabilitar-horarios" onClick={() => fetchCambiarHorarios(horasDisponibles) }> Deshabilitar horarios </span>
                </section>
            </section>

        </>
    )
}

export default HorasDisponibles