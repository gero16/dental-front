import "./Ubicacion.css"
import Mapa from "../Mapa/Mapa.jsx"
import { useState } from "react"

const Ubicacion = () => {
    const ubiTresCruces = [-34.89578868112877, -56.16680986705166]
    const ubiLasPiedras = [-34.728071363547315, -56.21382609708981]

    const [width, setWidth] = useState(window.innerWidth);


    const style = [300, 500, 0]
    return (

        <> 
            <section className="section-ubicacion flex-column-center">

                {
                    width <= 800 
                        ? <> 
                            <article className="flex-column-center article-ubicacion">
                                <h2 className="h2-clinica"> Clinica - Las Piedras </h2>
                                <span className="mb-5"> Torre García 536 </span>
                                <Mapa ubicacion={ubiLasPiedras} style={[150, 280, 0]}> </Mapa>
                            </article> 
                            <article className="flex-column-center article-ubicacion">
                                <h2 className="h2-clinica"> Clinica - Tres Cruces </h2>
                                <span className="mb-5"> Victor Haedo 2322 Apto 109 </span>
                            <Mapa ubicacion={ubiTresCruces} style={[200, 300, 0]} > </Mapa>
                            </article>
                        </>
                    
                        : <> 
                            <article className="flex-column-center article-ubicacion">
                                <h2 className="h2-clinica"> Clinica - Las Piedras </h2>
                                <span className="mb-5"> Torre García 536 </span>
                                <Mapa ubicacion={ubiLasPiedras} style={[300, 500, 0]}> </Mapa>
                            </article> 
                            <article className="flex-column-center article-ubicacion">
                                <h2 className="h2-clinica"> Clinica - Tres Cruces </h2>
                                <span className="mb-5"> Victor Haedo 2322 Apto 109 </span>
                            <Mapa ubicacion={ubiTresCruces} style={[300, 500, 0]} > </Mapa>
    
                            </article>
                        </>  
                        
    
                }
               

              
            </section>
        </>
    )
}

export default Ubicacion