import "./Ubicacion.css";
import Mapa from "../Mapa/Mapa.jsx";
import { useState } from "react";

const Ubicaciones = () => {
    const ubiTresCruces = [-34.89578868112877, -56.16680986705166];
    const ubiLasPiedras = [-34.728071363547315, -56.21382609708981];

    const [width, setWidth] = useState(window.innerWidth);

    let estilo;


    if (width <= 950) {
        estilo = [300, 300, 0];
    } 
    if (width > 950 && width <= 1200) {
        estilo = [220, 320, 0];
    } 
    if (width > 1200 && width <= 1560) {
        estilo = [320, 420, 0];
    }
    if (width > 1560) {
        estilo = [500, 700, 0];
    }

    return (
        <section className="section-ubicacion flex-column-center">
            <article className="flex-column-center article-ubicacion">
                <h2 className="h2-clinica"> Clinica - Las Piedras </h2>
                <span className="mb-5"> Torre García 536 </span>
                <Mapa ubicacion={ ubiLasPiedras } clinica={"las-piedras"} style={ estilo }> </Mapa>
            </article> 

            <article className="flex-column-center article-ubicacion">
                <h2 className="h2-clinica"> Clinica - Tres Cruces </h2>
                <span className="mb-5"> Victor Haedo 2322 Apto 109 </span>
                <Mapa ubicacion={ ubiTresCruces } clinica={"tres-cruces"} style={ estilo } > </Mapa>
            </article>
        </section>
    );
};

export default Ubicaciones;
