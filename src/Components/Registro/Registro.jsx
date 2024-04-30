import { useContext, useState } from "react"
import Navbar from "../Navbar/Navbar"
import "./Registro.css"
import { Context } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const Registro = () => {
    const { urlBackend_Desarrollo, urlBackend_Produccion } = useContext(Context)
    const navigate = useNavigate()
    
    const [registro, setRegistro] = useState(false)
    const [usuario, setUsuario] = useState()
    const [mensaje, setMensaje] = useState("")
    const [error, setError] = useState(false)
    const [cargando , setCargando] = useState(false)
 
    const fetchRegistro = async (usuario) => {
        console.log(usuario)
        setCargando(true)
        const response = await fetch(`${ urlBackend_Produccion }/usuario/registrarse`,  
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
            
                }),
                body : JSON.stringify(usuario),
            })
        console.log(response)
        const resp = await response.json()
        console.log(resp)
            // geronicola1696@gmail.com

        if(response.status === 400) {
            setCargando(true)
            setError(true)
        }
            
        if(response.status === 200) {
            console.log(resp)
            const objeto = {usuario : resp.usuario, rol : resp.rol}
            localStorage.setItem("sesion", JSON.stringify(objeto));

            setCargando(true)
            setRegistro(true)
            setMensaje(resp.mensaje)
            setTimeout(function(){
                  navigate(`/`)
            }, 6000); 

        }
    }

    return (
        <> 
            <Navbar> </Navbar>

            
            <section className="flex-column-center section-sesion fondo-blanco-img">
                
                    { registro === true 
                        ? <h1> { mensaje } </h1>    
                        : error.status === 400 
                            ? <h2> Debe Completar todos los campos! </h2>  
                            : cargando === true 
                                ? <h2> Cargando...  </h2> 
                                : <> </>
                    }

                  
                    <ul className="ul-iniciar-sesion flex-column-center">
                        <li>  <h1> Registrarse </h1> </li>
                        <li className="flex-around gap-20">
                            <label htmlFor="" className="label-sesion"> Correo </label>
                            <input 
                                type="text" 
                                className="input-sesion"
                                onChange={(evento) => setUsuario({
                                ...usuario, 
                                correo : evento.target.value
                            })} />
                        </li>
                        <li className="flex-around gap-20">
                            <label htmlFor="" className="label-sesion"> Nombre </label>
                            <input 
                                type="text" 
                                className="input-sesion"
                                onChange={(evento) => setUsuario({
                                ...usuario, 
                                nombre : evento.target.value
                            })} />
                        </li>
                        
                        <li className="flex-around gap-20">
                            <label htmlFor=""className="label-sesion"> Contraseña </label>
                            <input 
                                type="text" 
                                className="input-sesion"
                                onChange={(evento) => setUsuario({
                                ...usuario, 
                                password : evento.target.value
                            })} />
                        </li>
                        <li className="flex-column text-center">
                            <span className="btn-iniciar-sesion" onClick={() => fetchRegistro(usuario)}> Registrarse </span>
                        </li>
                    </ul>
             
                
            </section>
        </>
    )
}

export default Registro