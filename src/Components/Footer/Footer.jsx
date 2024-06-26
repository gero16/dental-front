import "./Footer.css"

import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <> 
            <footer>

                <section className="section-footer container flex-column">
                    {
                        /*  <img src={logo}  className="logo" alt="" /> */
                    }
                   
                    <div className="flex div-footer">
                        <section className="footer-horarios flex">
                            <h5> Horarios de atención </h5>
                            <ul className="ul-footer">
                                <li className="footer-grey"> Lunes 13.00 - 19.00 (las Piedras) </li>
                                <li className="footer-grey"> Martes y Jueves 13.00 - 20.00 (Las Piedras) </li>
                                <li className="footer-grey"> Sábados 9.00 - 14.00 (Las Piedras) </li>
                                <li className="footer-grey"> Miércoles 13.00 - 20.00 (Montevideo) </li>
                            </ul>
                        </section>

                        <section className="section-footer-abajo container flex">
                            <section className="footer-quienes-somos">
                                <h5 className="mb-5"> Quienes somos </h5>
                                <p className="footer-grey"> Contacto </p>
                                <p className="footer-grey"> Acerca de Nosotros </p>
                            </section>

                        
                            <section>
                                <h5 className="mb-5"> Servicios </h5>
                                <ul >
                                    <li className="footer-grey"> <span> Servicios </span>  </li>
                                    <li className="footer-grey"> <span> Galeria </span>  </li>
                                    <li className="footer-grey"> <span> Blog </span>  </li>
                                </ul>
                            </section>

                        
                            <section className="section-footer-redes">
                                <ul className="lista-redes-sociales flex">
                                    <a href="https://www.instagram.com/globalsystemdental" className="link-redes">
                                    <li> <FaInstagram  style={{ fontSize: '30px'}} />  </li>
                                    </a>
                                    <a href="https://www.facebook.com/profile.php?id=100065159214884" className="link-redes">

                                    <li> <FaFacebook  style={{ fontSize: '30px'}} />  </li>
                                    </a>
                                    <a href="#" className="link-redes">

                                        <li> <FaTwitter  style={{ fontSize: '30px'}} /> </li>

                                    </a>
                                </ul>
                            </section>

                        </section>



                    </div>

                    <section className="mb-10"> 
                        <h5> Torre García 536 </h5> 
                        <h5> Las Piedras </h5>
                    </section>

                    

                    <section className="mb-10"> 
                        <h5> Victor Haedo 2322 Apto 109 </h5> 
                        <h5> Tres Cruces - Montevideo </h5>
                    </section>
                        
                    <section className="mb-10"> 
                        <h5> Telefono - (598) 94 484 397 </h5> 
                    </section>

                </section>

            
               <section className="footer-footer flex container">
                    <span> © 2024 Gerónimo Nicola </span>

                    <span> Politica de Privacidad </span>

                    <span> Terminos & Condiciones </span>
               </section>
            </footer>
        
        </>
    )
}

export default Footer