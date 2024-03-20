
import "./ReservaHora.css"

import 'react-calendar/dist/Calendar.css';

import Navbar from "../Navbar/Navbar";
import Calendar from 'react-calendar';
import { useState } from "react";

const ReservaHora = () => {
    const [value, onChange] = useState(new Date());
    
    return (
        <> 
            <Navbar /> 
         
            <div className="calendario">
            <Calendar onChange={onChange} value={value} />
            </div>

        </>
    )
}

export default ReservaHora