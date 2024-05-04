import Navbar from "../Navbar/Navbar"
import "./Galeria.css"

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
                    <img className="img-galeria" src={""} alt="" />
                    <img className="img-galeria" src={""} alt="" />
                    <img className="img-galeria" src={""} alt="" />
                </section>
                
            

              
            </main>
        </>
    )
}

export default Galeria