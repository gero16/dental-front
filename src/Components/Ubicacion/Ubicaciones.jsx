import "./Ubicacion.css"
import Mapa from "../Mapa/Mapa.jsx"
import { useState } from "react"

const Ubicaciones = () => {
    const ubiTresCruces = [-34.89578868112877, -56.16680986705166]
    const ubiLasPiedras = [-34.728071363547315, -56.21382609708981]

    const [width, setWidth] = useState(window.innerWidth);


    const estilo1 = [190, 290, 0]
    const estilo2 = [220, 380, 0]
    const estilo3= width > 1201 && width < 1550 ? [350, 450, 0] :  [500, 700, 0]
    return (

        <> 
            <section className="section-ubicacion flex-column-center">

               {
                 (width <= 950) 
                 ? (
                     <>
                         <article className="flex-column-center article-ubicacion">
                             <h2 className="h2-clinica"> Clinica - Las Piedras </h2>
                             <span className="mb-5"> Torre García 536 </span>
                             <Mapa ubicacion={ubiLasPiedras} clinica={"las-piedras"}  style={estilo1}> </Mapa>
                         </article> 

                         <article className="flex-column-center article-ubicacion">
                             <h2 className="h2-clinica"> Clinica - Tres Cruces </h2>
                             <span className="mb-5"> Victor Haedo 2322 Apto 109 </span>
                             <Mapa ubicacion={ubiTresCruces} clinica={"tres-cruces"} style={estilo1} > </Mapa>
                         </article>
                     </>
                 )
                 : (
                     (width > 950 && width <= 1200)
                         ? (
                             <>
                                 <article className="flex-column-center article-ubicacion">
                                     <h2 className="h2-clinica"> Clinica - Las Piedras </h2>
                                     <span className="mb-5"> Torre García 536 </span>
                                     <Mapa ubicacion={ubiLasPiedras} clinica={"las-piedras"}  style={estilo2}> </Mapa>
                                 </article> 

                                 <article className="flex-column-center article-ubicacion">
                                     <h2 className="h2-clinica"> Clinica - Tres Cruces </h2>
                                     <span className="mb-5"> Victor Haedo 2322 Apto 109 </span>
                                     <Mapa ubicacion={ubiTresCruces} clinica={"tres-cruces"} style={estilo2} > </Mapa>
                                 </article>
                             </>
                         )
                         : (
                             <>
                                 <article className="flex-column-center article-ubicacion">
                                     <h2 className="h2-clinica"> Clinica - Las Piedras </h2>
                                     <span className="mb-5"> Torre García 536 </span>
                                     <Mapa ubicacion={ubiLasPiedras} clinica={"las-piedras"}  style={estilo3}> </Mapa>
                                 </article> 

                                 <article className="flex-column-center article-ubicacion">
                                     <h2 className="h2-clinica"> Clinica - Tres Cruces </h2>
                                     <span className="mb-5"> Victor Haedo 2322 Apto 109 </span>
                                     <Mapa ubicacion={ubiTresCruces} clinica={"tres-cruces"} style={estilo3} > </Mapa>
                                 </article>
                             </>
                         )
                 )
               }

              
            </section>
        </>
    )
}

export default Ubicaciones