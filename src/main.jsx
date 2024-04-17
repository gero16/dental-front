import React from 'react'
import './main.css'

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import imagen from "../public/global.fw.png"

import Navbar from "./Components/Navbar/Navbar.jsx"
import Index from "./Components/Index/Index.jsx"
import Contacto from './Components/Contacto/Contacto';
import HoraReserva from './Components/HoraReserva/HoraReserva';
import Nosotros from './Components/Nosotros/Nosotros.jsx';
import Galeria from './Components/Galeria/Galeria.jsx';

import Servicios from './Components/Servicios/Servicios.jsx';
import ServicioGeneral from './Components/Servicios/ServicioGeneral.jsx';
import ServicioCosmetico from './Components/Servicios/ServicioCosmetico.jsx';
import ServicioPeriodontal from './Components/Servicios/ServicioPeriodontal.jsx';
import ServicioAcido from './Components/Servicios/ServicioAcido.jsx';

import IniciarSesion from './Components/IniciarSesion/IniciarSesion.jsx';
import Registro from './Components/Registro/Registro.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Publicacion from './Components/Publicacion/Publicacion.jsx';

import Panel from './Components/Admin/Panel/Panel.jsx';
import HorasDisponibles from './Components/Admin/HorasDisponibles/HorasDisponibles.jsx';
import AdminPublicaciones from './Components/Admin/AdminPublicaciones/AdminPublicaciones.jsx';
import CrearPublicacion from './Components/Admin/CrearPublicacion/CrearPublicacion.jsx';
import EditarPublicacion from './Components/Admin/CrearPublicacion/EditarPublicacion.jsx';
import EliminarPublicacion from './Components/Admin/EliminarPublicacion/EliminarPublicacion.jsx';
import { CustomProvider } from './Context/Context.jsx';
import Agendados from './Components/Agenda/Agendados.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
      <Navbar> </Navbar>
      <Index> </Index>
    </>
    
  },
  {
    path: "/nosotros",
    element: <Nosotros> </Nosotros>
  },
  {
    path: "/galeria",
    element: <Galeria> </Galeria>,
  },

  {
    path: "/contacto",
    element:  <Contacto> </Contacto>

  },
  {
    path: "/servicios", 
    element:  <Servicios />,
    children : [
      {
        path: "servicio-general",
        element: <ServicioGeneral />,
      },
      {
        path: "servicio-periodontal",
        element: <ServicioPeriodontal />,
      },
      {
        path: "servicio-cosmetico",
        element: <ServicioCosmetico />,
      },
      {
        path: "acido-hialuronico",
        element: <ServicioAcido />,
      },
    ]
  },
 
  {
    path: "/blog",
    element: <Blog> </Blog>
  },
  {
    path: "/blog/publicaciones/:idPublicacion",
    element: <Publicacion> </Publicacion>
  },
  {
    path: "/reservar-hora",
    element: <HoraReserva> </HoraReserva>,
  },
  {
    path: "/iniciar-sesion",
    element: <IniciarSesion> </IniciarSesion>,
  },
  {
    path: "/registrarse",
    element: <Registro> </Registro>,
  },
  {
    path: "/admin/panel",
    element: <Panel> </Panel>,
  },
  {
    path: "/admin/panel/administrar-publicaciones",
    element:  <AdminPublicaciones />,
  },
  {
    path: "/admin/panel/horas-disponibles",
    element:  <HorasDisponibles />,
  },
  {
    path: "/admin/panel/crear-publicacion",
    element:  <CrearPublicacion />,
  },
  {
    path: "/admin/panel/admin-publicaciones/editar-publicacion/:idPublicacion",
    element:  <EditarPublicacion />,
  },
  {
    path: "/admin/panel/admin-publicaciones/eliminar-publicacion/:idPublicacion",
    element:  <EliminarPublicacion />,
  },
  {
    path: "/admin/panel/agendados",
    element: <Agendados> </Agendados>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <CustomProvider>
          <RouterProvider router={ router } />
      </CustomProvider>
      
  </React.StrictMode>,
)
