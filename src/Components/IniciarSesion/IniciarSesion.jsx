import { useState } from "react"
import Navbar from "../Navbar/Navbar"
import "./IniciarSesion.css"

const IniciarSesion = () => {
    const urlBackend_Desarrollo = `http://localhost:3000`

    const [sesion, setSesion] = useState({
        correo : "",
        password: "",
    })
 
    const fetchIniciarSesion = async () => {
        const response = await fetch(`${ urlBackend_Desarrollo }/usuario/iniciar-sesion`,  
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
            // geronicola1696@gmail.com

            /*
        if(response.status === 200) {
            console.log(resp)
            const objeto = {usuario : resp.usuario, rol : resp.rol}
            localStorage.setItem("sesion", JSON.stringify(objeto));
            navigate(`/usuario/${resp.usuario}`)
        }
        if(response.status === 401) {
            setError(true)
        }
        */
    }

    return (
        <> 
            <Navbar> </Navbar>

            <section className="img-portada-sesion"> 
              
            </section>
            <section className="flex-column-center section-sesion">
                <h1> Iniciar Sesión </h1>
                    <ul className="ul-iniciar-sesion flex-column">
                        <li>
                            <label htmlFor=""> Correo </label>
                            <input type="text" onChange={(evento) => setSesion({
                                ...sesion, 
                                correo : evento.value
                            })} />
                        </li>
                        <li>
                            <label htmlFor="">Contraseña </label>
                            <input type="text" onChange={(evento) => setSesion({
                                ...sesion, 
                                password : evento.value
                            })} />
                        </li>
                        <li>
                            <span className="btn-iniciar-sesion" onClick={() => fetchIniciarSesion()}> Iniciar Sesión </span>
                        </li>
                    </ul>
             
                
            </section>
        </>
    )
}

export default IniciarSesion