
import "./Contacto.css"
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contacto = () => {

    const ubiTresCruces = [-34.89578868112877, -56.16680986705166]
    const ubiLasPiedras = [-34.7277481203798, -56.21380023171297]

    return (
        <> 
            <main>
                <h1> Contacto </h1>
            
                <MapContainer 
                    center={ubiLasPiedras} 
                    zoom={16} 
                    scrollWheelZoom={true}
                    style={{ height: 400, width: 600, margin: 100 }}
                    >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={ubiLasPiedras}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={ubiTresCruces}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>


                
                </MapContainer>,

               
            </main>
        
        </>
    )
}

export default Contacto