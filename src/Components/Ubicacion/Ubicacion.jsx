import "./Ubicacion.css"
import Mapa from "../Mapa/Mapa.jsx"

const Ubicacion = () => {
    const ubiTresCruces = [-34.89578868112877, -56.16680986705166]
    const ubiLasPiedras = [-34.7277481203798, -56.21380023171297]
    
    return (
        <> 
        
            <section className="section-ubicacion flex-column-center">
                <article className="flex-column-center">
                    <h2 className="h2-clinica"> Clinica - Las Piedras </h2>
                    <span className="mb-5"> Torre García 536 </span>
                    <Mapa ubicacion={ubiLasPiedras} style={[300, 500, 0]}> </Mapa>
                </article>

                <article className="flex-column-center">
                    <h2 className="h2-clinica"> Clinica - Tres Cruces </h2>
                    <span className="mb-5"> Victor Haedo 2322 Apto 109 </span>
                    <Mapa ubicacion={ubiTresCruces} style={[300, 500, 0]} > </Mapa>

                </article>

            </section>
        </>
    )
}

export default Ubicacion