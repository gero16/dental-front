
import "./Agenda.css"
import "leaflet/dist/leaflet.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaInstagram, FaFacebook, FaTwitter, FaPhoneSquareAlt } from 'react-icons/fa';
import { useContext, useState } from "react";
import { Context } from "../../Context/Context";


const Agendados = () => {
    
    const { horasDisponibles } = useContext(Context)

    const indiceUno = 6; 
    const indiceDosInicio = 7; 
    const indiceDosFinal = 13; 
    const indiceTresInicio = 14; 
    const indiceTresFinal = 20; 


    return (
        <> 
            <Navbar> </Navbar> 

            {
                /* <PortadaTitulo titulo={"Contacto"} subtitulo={"Pongase en contacto con nosotros"} color={"#E5028E"}> </PortadaTitulo> */
            }
            

            <section className="section-agenda container"> 
                <section className="flex-center-v gap-10">
                    <h1 className="h1-agenda"> Personas Agendadas </h1>
                    <h2 className="h2-agenda"> - 15/04/2024 </h2>

                </section>

                <table class="table-agenda">
                    <thead>
                    <tr>
                        <th>Horario</th>
                        <th>Fecha</th>
                        <th>Nombre</th>
                        <th>Consulta</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="li-agenda">
                        <td>09:00 - 09:30</td>
                        <td>15/04/2024</td>
                        <td> Pablo Carrosa </td>
                        <td>Consulta rutina</td>
                    </tr>
                    <tr class="li-agenda">
                        <td>14:00 - 14:30</td>
                        <td>15/04/2024</td>
                        <td> Edinson Cavani </td>
                        <td>Primera consulta</td>
                    </tr>
                    <tr class="li-agenda">
                        <td>14:30 - 15:00</td>
                        <td>15/04/2024</td>
                        <td> Charly Garcia </td>
                        <td>Sesión 1 Brackets</td>
                    </tr>
                    <tr class="li-agenda">
                        <td>19:00 - 19:30</td>
                        <td>15/04/2024</td>
                        <td>  Chengue Morales </td>
                        <td>Consulta Gratis - 15 min</td>
                    </tr>
                    <tr class="li-agenda">
                        <td>19:30 - 20:00</td>
                        <td>15/04/2024</td>
                        <td> Monsanto Pereira </td>
                        <td>Revisión</td>
                    </tr>
                    
                    </tbody>
                </table>
                    
            </section>

    
    

        </>
    )
}

export default Agendados