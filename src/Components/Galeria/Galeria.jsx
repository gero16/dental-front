import Navbar from "../Navbar/Navbar"
import "./Galeria.css"

import Galeria1 from "/galeria-1.jpg"
import Galeria2 from "/galeria-2.jpg"
import Galeria3 from "/galeria-3.jpg"

const Galeria = () => {
    return (
        <> 
            <Navbar> </Navbar>

            <section className="portada-galeria">

            </section>
            <header className="container header-galeria">
             
                <h1> Galeria de sonrisas </h1>


            </header>

            <main className="principal-galeria flex width-70 m-auto gap-30">
            
                <ul className="ul-galeria flex-column gap-10">
                    <li> Implantes Dentales </li>
                    <li> Rejuvenecimiento de Encias </li>
                    <li> Brackets Metálicos </li>
                    <li> Invisibles </li>
                </ul>

                <section>
                    <img className="img-galeria" src={Galeria1} alt="" />
                    <img className="img-galeria" src={Galeria2} alt="" />
                    <img className="img-galeria" src={Galeria3} alt="" />
                </section>
                
            

              
            </main>
        </>
    )
}

export default Galeria