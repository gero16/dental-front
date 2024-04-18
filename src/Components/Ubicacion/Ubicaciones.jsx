import "./Ubicacion.css";
import Mapa from "../Mapa/Mapa.jsx";
import { useState, useEffect } from "react";

const Ubicaciones = () => {
    const ubiTresCruces = [-34.89578868112877, -56.16680986705166];
    const ubiLasPiedras = [-34.728071363547315, -56.21382609708981];

    const [width, setWidth] = useState(window.innerWidth);
    const [estilo, setEstilo] = useState([]);
    const [mostrarUbi1, setMostrarUbi1] = useState(true);
    const [ubicacion, setUbicacion] = useState(ubiTresCruces)
    const [mapaRenderizado, setMapaRenderizado] = useState(false);

    useEffect(() => {
    
        setUbicacion(mostrarUbi1 ? ubiTresCruces : ubiLasPiedras);
        // El mapa se ha actualizado, establecer mapaRenderizado en true después de un breve retraso
        const timeout = setTimeout(() => {
            setMapaRenderizado(true);
        }, 200);

        // Limpiar el timeout si el componente se desmonta antes de que se complete el renderizado del mapa
        return () => clearTimeout(timeout);
    }, [mostrarUbi1]);


    useEffect(() => {
        // Actualizar el estilo del mapa según el ancho de la ventana - Sin useEffect habia daba error
        if (width <= 450 && width < 800)  setEstilo([320, 400, 0]);
        if (width >= 800 && width < 1200) setEstilo([400, 500, 0]);
        if (width >= 1200 && width <= 1500) setEstilo([450, 550, 0]);
        if (width >= 1560) setEstilo([550, 650, 0]);
        
    }, [width]);

  

    const cambiarUbi = (estado) => {
        setMapaRenderizado(false); // Restablecer el estado del mapa renderizado al cambiar de ubicación
        setMostrarUbi1(estado);
    };

    return (
        <section className="section-ubicacion flex-column-center m-auto">

            <h3 onClick={() => cambiarUbi(!mostrarUbi1)} className="mostrar-ubi"> Cambiar Ubicación </h3>

            <article className="flex-column-center article-ubicacion">
                <h2 className="h2-clinica">{mostrarUbi1 ? 'Clinica - Tres Cruces' : 'Clinica - Las Piedras'}</h2>
                <span className="mb-5">{mostrarUbi1 ? 'Victor Haedo 2322 Apto 109' : 'Torre García 536'}</span>
                { mapaRenderizado && <Mapa ubicacion={ubicacion} clinica={mostrarUbi1 ? "tres-cruces" : "las-piedras"} style={estilo} /> }
            </article>

        </section>
    );
};

export default Ubicaciones;
