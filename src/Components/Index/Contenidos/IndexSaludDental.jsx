import { useState } from "react"
import { FaCaretDown } from "react-icons/fa";

const ContenidoSaludDental = () => {

    const [mostrar, setMostrar] = useState([false, false, false, false, false])

    const cambiarEstado = (posicion) => {
        let array = [false, false, false, false, false]
        array[posicion] = true
        console.log(array)
        setMostrar(array)
    }

    return (
        <>
            <article className="contenido-salud-dental container flex-column gap-10">

                <section className="contenido-salud-dental-h2 flex-column gap-10"> 
                    <h2 className="h2-salud-dental"> ¿Por qué es importante la salud dental? </h2>
                    <p className="p-salud-dental"> Nuestros dientes tienen un papel tan importante que desempeñar en nuestras vidas. Nos ayudan a masticar y digerir los alimentos, nos ayudan a hablar y hablar con claridad y también le dan forma a nuestra cara. </p>
                </section>

                <section className="contenido-salud-dental-divs">
                    <div className="div-salud-dental"> 
                        <h4 onClick={() => cambiarEstado(0)}> Conservar los dientes de por vida </h4> 
                        { mostrar[0] 
                            ? <p> Al cepillarnos los dientes dos veces al día, mantener una dieta baja en azúcar y visitar regularmente a nuestro profesional dental, 
                                podemos ayudar a reducir el riesgo de enfermedades como la caries dental y la enfermedad de las encías, las cuales pueden provocar la pérdida de 
                                dientes. </p> 
                            : <> </>
                        }
                    </div>

                    <div className="div-salud-dental"> 
                        <h4 onClick={() => cambiarEstado(1)}> Reducir el riesgo de enfermedad </h4> 
                        { mostrar[1]  
                            ? <p> 
                                La investigación ha encontrado que la cantidad de dientes que tenemos está fuertemente relacionada con cuánto tiempo viviremos. Aquellos con 20 
                                dientes o más a la edad de 70 años tenían una probabilidad considerablemente mayor de vivir más que aquellos con menos de 20 dientes.
                            </p> 
                            : <> </>
                        }
                    </div>
                    
                    <div className="div-salud-dental"> 
                        <h4 onClick={() => cambiarEstado(2)}> Reducir el riesgo de cáncer y demencia</h4> 
                        { mostrar[2]  
                            ? <p> 
                                La pérdida de dientes debido a la caries dental y la enfermedad de las encías se puede prevenir casi en su totalidad y no hay 
                                razón por la cual, con una buena rutina diaria de salud bucal, no podamos conservar nuestros dientes de por vida
                            </p> 
                            : <> </>
                        }
                    </div>

                      
                    <div className="div-salud-dental"> 
                        <h4 onClick={() => cambiarEstado(3)}> Tener un bebé saludable </h4> 
                        { mostrar[3]  
                            ? <p> 
                               La investigación ha encontrado que la cantidad de dientes que tenemos está fuertemente relacionada con cuánto tiempo viviremos. 
                               Aquellos con 20 dientes o más a la edad de 70 años tenían una probabilidad considerablemente mayor de vivir más que aquellos con menos de 20 dientes.
                            </p> 
                            : <> </>
                        }
                    </div>

                    <div className="div-salud-dental"> 
                        <h4 onClick={() => cambiarEstado(4)}> Manteniendo nuestra apariencia </h4> 
                        { mostrar[4] 
                            ? <p> 
                               Al cepillarnos los dientes dos veces al día, mantener una dieta baja en azúcar y visitar regularmente a nuestro profesional dental, podemos ayudar 
                               a reducir el riesgo de enfermedades como la caries dental y la enfermedad de las encías, las cuales pueden provocar la pérdida de dientes.
                            </p> 
                            : <> </>
                        }
                    </div>
                    
                   
                </section>
            </article>

        </>
    )
}

export default ContenidoSaludDental