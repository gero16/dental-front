import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup   } from 'react-leaflet'

import { useGeolocated } from "react-geolocated";

const Mapa = ({ubicacion, style, clinica}) => {

    const ubiTresCruces = [-34.89578868112877, -56.16680986705166]
   
    const ubiLasPiedras = [-34.728089, -56.213810]

    const iconoRojo = new L.Icon({
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
        iconSize: [25, 42], // Tamaño del icono
        iconAnchor: [16, 32], // Punto de referencia
      });

      console.log(clinica)

      let ubicacionCoordenadas;

    if (clinica === "tres-cruces") ubicacionCoordenadas = ubiTresCruces
    
    if (clinica === "las-piedras") ubicacionCoordenadas = ubiLasPiedras;

    console.log(ubicacionCoordenadas)
    return (
        
           
        <MapContainer
            center={ubicacionCoordenadas}
            zoom={16}
            scrollWheelZoom={true}
            style={{ height: style[0], width: style[1], margin: style[2] }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={ubicacionCoordenadas} icon={iconoRojo} />
        </MapContainer>
                       
        
    )
}

export default Mapa