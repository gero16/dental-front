
import whatsapp from "../../../public/whatsapp.png"
import { Link as Navigate, NavLink, useLocation ,} from "react-router-dom";


const Whatsapp = () => {
    return (
            <NavLink to={`https://wa.me/59898221815`} className="section-whatsapp" > 
                <img src={whatsapp} alt="" />
            </NavLink>
    )
}


export default Whatsapp