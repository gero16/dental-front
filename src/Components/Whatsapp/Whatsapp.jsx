
import whatsapp from "../../../public/whatsapp.png"
import { Link as Navigate, NavLink, useLocation ,} from "react-router-dom";


const Whatsapp = () => {
    return (
            <NavLink to={`https://wa.me/59894484397`} className="section-whatsapp" > 
                <img src={ whatsapp } alt="" className="whatsapp" />
            </NavLink>
    )
}


export default Whatsapp