import { useState, createContext } from "react"

export const Context = createContext()

export const CustomProvider = ({ children }) => {

  const urlBackend_Produccion = import.meta.env.VITE_URL_BACKEND_PRODUCCION
 const urlBackend_Desarrollo = import.meta.env.VITE_URL_BACKEND_DESARROLLO

  const conversionDias = {
    "Mon" : "Lunes",
    "Tue" : "Martes",
    "Wed" : "Miercoles",
    "Thu" : "Jueves",
    "Fri": "Friday",
    "Sat" : "Sabado",  
    "Sun": "Domingo"   
}

  const [datosAgenda, setDatosAgenda] = useState({
    dia: "",
    nombre:"",
    correo: "",
    mensaje: "",
    horario: ""
  })

  const stringDia = new Date().toString().split(" ")
  console.log(stringDia)

  const [horasDisponibles, setHorasDisponibles] = useState([])
  const [diaSeleccionado, setDiaSeleccionado] = useState(conversionDias[stringDia[0]])
  const [horaSeleccionada, setHoraSeleccionada] = useState("")
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date())

  const [agenda, setAgenda] = useState([])


    const transformarFecha = (fechaSinFormato) => {
        // "Thu Apr 12 2024 00:00:00 GMT-0300"
        let fechaOriginal = new Date(fechaSinFormato);

        let año = fechaOriginal.getFullYear();
        let mes = ("0" + (fechaOriginal.getMonth() + 1)).slice(-2); 
        let dia = ("0" + fechaOriginal.getDate()).slice(-2);
        let fechaFormateada = año + "-" + mes + "-" + dia;
        return fechaFormateada
        
    }

    const meses = { "Jan": 0, "Feb": 1, "Mar": 2, "Apr": 3,"May": 4,"Jun": 5,"Jul": 6, "Aug": 7, "Sep": 8,"Oct": 9, "Nov": 10, "Dec": 11 };

    async function fetchHorasDisponibles(fecha) {
        console.log(fecha)
      
        try {
            let response = await fetch(`${ urlBackend_Produccion }/horarios/fechas/${ fecha }`, {
                method: 'POST',
            });
      
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

    const seleccionarHora = (hora) => {

      console.log(hora.target.dataset)
      const horaElegida = hora.target.dataset.id
      console.log(horaElegida)

      setHoraSeleccionada(horaElegida)
      console.log(horaSeleccionada)
      setDatosAgenda({...datosAgenda,  horario : horaElegida})

  }
  
  
  const seleccionarDia = (e) => {
      const obtenerDia = e.toString().split(" ")
      let nombreDay = obtenerDia[0] 
      let numeroMes = obtenerDia[1]

      var año = obtenerDia[3];
      var mes = meses[numeroMes];
      var dia = obtenerDia[2];
      var fechaFormateada = año + "-" + mes + "-" + dia;

      setDiaSeleccionado(conversionDias[nombreDay])
      setFechaSeleccionada(e)
   
      setDatosAgenda({...datosAgenda,  dia : conversionDias[nombreDay]})
  }

      
return (
    <Context.Provider 
        value={{ transformarFecha, conversionDias, fetchHorasDisponibles, seleccionarDia, seleccionarHora, horasDisponibles, setHorasDisponibles,
           diaSeleccionado, horaSeleccionada,fechaSeleccionada, meses, stringDia,  setDatosAgenda, datosAgenda, urlBackend_Produccion, urlBackend_Desarrollo
        
        }}> 
            
        { children } 

    </Context.Provider>
    )
}