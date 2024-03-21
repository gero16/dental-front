import { useParams } from "react-router-dom"
import Navbar from "../Navbar/Navbar"

const Servicios = () => {
    let { servicio } = useParams();

    const separarTexto = (texto, separador) => {
        if(texto.split(separador)) {
            const result = texto.split(separador)
            return result
        }
    }

    const transformarMayuscula = (texto, palabras) => {
        const textoSeparado = separarTexto(texto, "-")
        if(palabras > 1) {
            let tituloFinal = ""
            for (let i = 0; i < textoSeparado.length; i++) {
                const palabra = textoSeparado[i].charAt(0).toUpperCase() + textoSeparado[i].slice(1)
                tituloFinal = tituloFinal +  " " + palabra
            }
            return tituloFinal
        }

        if(palabras === 1) {
            const resultadoFinal = texto.charAt(0).toUpperCase() + texto.slice(1)
            return resultadoFinal
        }

        
}

 const servicioSeleccionado = transformarMayuscula(servicio, 2)
 console.log(servicioSeleccionado)
  
    return (
        <> 
            <Navbar> </Navbar>

            <main className="container">

                <h1> Servicios </h1>

                <h2> { ` ${ servicioSeleccionado } ` } </h2>
            </main>
        </>
    )
}

export default Servicios