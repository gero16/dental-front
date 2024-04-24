import { useContext, useState } from "react"
import Navbar from "../Navbar/Navbar"
import "./Registro.css"
import { Context } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const Registro = () => {
    const { urlBackend_Desarrollo, urlBackend_Produccion } = useContext(Context)
    const navigate = useNavigate()
    
    const [sesion, setSesion] = useState("")
    const [error, setError] = useState(false)
 
    const fetchRegistro = async () => {
        console.log(sesion)
        const response = await fetch(`${ urlBackend_Produccion }/usuario/registrarse`,  
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
            
                }),
                body : JSON.stringify(sesion),
            })
        console.log(response)
        const resp = await response.json()
        console.log(resp)
            // geronicola1696@gmail.com

        if(response.status === 400) {
            setError(true)
        }
            
        if(response.status === 200) {
            console.log(resp)
            const objeto = {usuario : resp.usuario, rol : resp.rol}
            localStorage.setItem("sesion", JSON.stringify(objeto));
            
            
            setTimeout(function(){
                setSesion(false)
                  navigate(`/`)
            }, 5000); 

        }

      
        
    }

    return (
        <> 
            <Navbar> </Navbar>

            
            <section className="flex-column-center section-sesion fondo-blanco-img">
                <h1> Registrarse </h1>
                    { sesion === true ? 
                    <h1>  </h1>    
                    : error.status === 400 ? <h1> Debe Completar todos los campos! </h1>  : <> </> 
                    }
                    <ul className="ul-iniciar-sesion flex-column">
                        <li className="flex-around gap-20">
                            <label htmlFor="" className="label-sesion"> Correo </label>
                            <input 
                                type="text" 
                                className="input-sesion"
                                onChange={(evento) => setSesion({
                                ...sesion, 
                                correo : evento.target.value
                            })} />
                        </li>
                        <li className="flex-around gap-20">
                            <label htmlFor="" className="label-sesion"> Nombre </label>
                            <input 
                                type="text" 
                                className="input-sesion"
                                onChange={(evento) => setSesion({
                                ...sesion, 
                                nombre : evento.target.value
                            })} />
                        </li>
                        
                        <li className="flex-around gap-20">
                            <label htmlFor=""className="label-sesion"> Contraseña </label>
                            <input 
                                type="text" 
                                className="input-sesion"
                                onChange={(evento) => setSesion({
                                ...sesion, 
                                password : evento.target.value
                            })} />
                        </li>
                        <li className="flex-column text-center">
                            <span className="btn-iniciar-sesion" onClick={() => fetchRegistro()}> Registrarse </span>
                        </li>
                    </ul>
             
                
            </section>
        </>
    )
}

export default Registro