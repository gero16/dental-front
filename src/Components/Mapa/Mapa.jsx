import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup   } from 'react-leaflet'

import { useGeolocated } from "react-geolocated";

const Mapa = ({ubicacion, style}) => {

    const ubiTresCruces = [-34.89578868112877, -56.16680986705166]
    const ubiLasPiedras = [-34.728089, -56.213810]

    const iconoRojo = new L.Icon({
        iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
        iconSize: [25, 42], // Tamaño del icono
        iconAnchor: [16, 32], // Punto de referencia
      });

    return (
        <> 

                <MapContainer 
                    center={ubicacion} 
                    zoom={16} 
                    scrollWheelZoom={true}
                    style={{ height: style[0], width: style[1], margin: style[2] }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={ubiLasPiedras} icon={iconoRojo}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <Marker position={ubiTresCruces} icon={iconoRojo}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>

                    


                
                </MapContainer>,

               
        </>
    )
}

export default Mapa