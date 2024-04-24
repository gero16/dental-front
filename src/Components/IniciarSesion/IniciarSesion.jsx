import { useContext, useState } from "react"
import Navbar from "../Navbar/Navbar"
import "./IniciarSesion.css"
import { Navigate, useNavigate } from "react-router-dom"
import { Context } from "../../Context/Context";

const IniciarSesion = () => {
    const navigate = useNavigate()
    const { urlBackend_Desarrollo, urlBackend_Produccion } = useContext(Context)

    const [sesion, setSesion] = useState("")
    const [error, setError] = useState(false)

    const [dataSesion, setDataSesion] = useState({
        correo : "",
        password: "",
    })
 
    const fetchIniciarSesion = async (data) => {
        console.log(data)

        const response = await fetch(`${ urlBackend_Produccion }/usuario/iniciar-sesion`,  
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
            
                }),
                body : JSON.stringify(data),
            })
        console.log(response)
        const resp = await response.json()
        console.log(resp)
        // geronicola1696@gmail.com

        if(response.status === 200) {
            console.log(resp)
            const objeto = {usuario : resp.usuario, rol : resp.rol}
            localStorage.setItem("sesion", JSON.stringify(objeto));
         
            setSesion(true)
            setError(false)

            setTimeout(function(){
                setSesion(false)
                navigate(`/`)
            }, 5000); 
        }
        if(response.status === 401) {
            setSesion(false)
            setError(true)
        }
  
        
    }

    return (
        <> 
            <Navbar> </Navbar>

            
            <section className="flex-column-center section-sesion fondo-blanco-img">
                    { sesion === true 
                        ? <h1> Bienvenido! </h1>    
                        : error === true 
                            ? <h1> Usuario y/o Contraseña Incorrectos! </h1>  : <> </> 
                    }
                    <ul className="ul-iniciar-sesion flex-column">
                        <li className="text-center">  <h1> Iniciar Sesión </h1>  </li>
                        <li className="flex-around gap-20">
                            <label htmlFor="" className="label-sesion"> Correo </label>
                            <input 
                                type="text" 
                                className="input-sesion"
                                onChange={(evento) => setDataSesion({
                                ...dataSesion, 
                                correo : evento.target.value
                            })} />
                        </li>
                        <li className="flex-around gap-20">
                            <label htmlFor=""className="label-sesion">Contraseña </label>
                            <input 
                                type="text" 
                                className="input-sesion"
                                onChange={(evento) => setDataSesion({
                                ...dataSesion, 
                                password : evento.target.value
                            })} />
                        </li>
                        <li className="flex-column text-center">
                            <span className="btn-iniciar-sesion" onClick={() => fetchIniciarSesion(dataSesion)}> Iniciar Sesión </span>
                        </li>
                    </ul>
             
                
            </section>
        </>
    )
}

export default IniciarSesion